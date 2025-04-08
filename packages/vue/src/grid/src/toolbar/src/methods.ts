import { Buttons } from '../../adapter'
import { error } from '../../tools'
import Modal from '@opentiny/vue-modal'
import GlobalConfig from '../../config'
import { emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { h, hooks } from '@opentiny/vue-common'
import { extend } from '@opentiny/utils'

export function setBodyRecords({ body, insertRecords, pendingRecords }) {
  if (insertRecords.length) {
    body.pendingRecords = pendingRecords.filter((row) => !insertRecords.includes(row))
  }

  if (pendingRecords.length) {
    body.insertRecords = insertRecords.filter((row) => !pendingRecords.includes(row))
  }
}

function canInvokeSaveDataApi(body, removeRecords, updateRecords) {
  return body.insertRecords.length || removeRecords.length || updateRecords.length || body.pendingRecords.length
}

export function doRemoveOrShowMsg({ _vm, canInvoke, code, isMsg, pendingRecords, resolve, valid }) {
  if (valid && !canInvoke) {
    if (isMsg) {
      // 直接移除未保存且标记为删除的数据
      if (pendingRecords.length) {
        _vm.remove(pendingRecords)
      } else {
        Modal.message({
          id: code,
          message: GlobalConfig.i18n('ui.grid.dataUnchanged'),
          status: 'info'
        })
      }
    }

    resolve()
  }
}

export function invokeSaveDataApi({ _vm, args, body, code, removeRecords, resolve, saveData, updateRecords, valid }) {
  let canInvoke = false

  if (valid) {
    canInvoke = canInvokeSaveDataApi(body, removeRecords, updateRecords)
  }

  if (valid && canInvoke) {
    _vm.tableLoading = true

    resolve(
      saveData.api
        .apply(_vm, [{ $grid: _vm, changeRecords: body }].concat(args))
        .then(() => {
          Modal.message({
            id: code,
            message: GlobalConfig.i18n('ui.grid.saveSuccess'),
            status: 'success'
          })
          _vm.tableLoading = false
        })
        .catch(() => {
          _vm.tableLoading = false
        })
        .then(() => _vm.commitProxy('reload'))
    )
  }

  return canInvoke
}

export default {
  // 表格工具栏渲染器
  getRenderedToolbar({ $slots, _vm, loading, tableLoading, toolbar }) {
    return (_vm.renderedToolbar = (() => {
      let res = null

      if ($slots.toolbar) {
        res = $slots.toolbar()
      } else if (toolbar) {
        res = h(hooks.toRaw(toolbar.component), {
          ref: 'toolbar',
          props: { loading: loading || tableLoading, ...toolbar },
          class: _vm.viewCls('toolbar'),
          scopedSlots: toolbar.slots || {}
        })
      }

      return res
    })())
  },
  handleSave(code, args) {
    let { saveData, isMsg } = this

    if (!saveData) {
      error('ui.grid.error.notSave')
      return
    }

    let body = extend(true, { pendingRecords: this.pendingRecords }, this.getRecordset())
    let { insertRecords, removeRecords, updateRecords, pendingRecords } = body
    let validRows = insertRecords.concat(updateRecords)
    let getCallback = (resolve) => (valid) => {
      if (!valid) {
        resolve(valid)
        return
      }

      let canInvoke = invokeSaveDataApi({
        _vm: this,
        args,
        body,
        code,
        removeRecords,
        resolve,
        saveData,
        updateRecords,
        valid
      })

      doRemoveOrShowMsg({ _vm: this, canInvoke, code, isMsg, pendingRecords, resolve, valid })
    }

    // 排除掉新增且标记为删除的数据，排除已标记为删除的数据
    setBodyRecords({ body, insertRecords, pendingRecords })

    // 只校验新增和修改的数据
    return new Promise((resolve) => {
      this.validate(validRows, getCallback(resolve))
    })
  },
  handleDelete(code, args) {
    let { deleteData, isMsg } = this

    if (!deleteData) {
      error('ui.grid.error.notDelete')
      return
    }

    let selecteds = this.getSelectRecords(true)
    let afterRemove = () => {
      let removeds = this.getRemoveRecords()

      if (!removeds.length && isMsg && !selecteds.length) {
        Modal.message({
          id: code,
          message: GlobalConfig.i18n('ui.grid.selectOneRecord'),
          status: 'warning'
        })
      }

      if (removeds.length) {
        let apiArgs = [{ $grid: this, changeRecords: { removeRecords: removeds } }, ...args]
        let stopLoading = () => {
          this.tableLoading = false
        }

        this.tableLoading = true

        return deleteData.api
          .apply(this, apiArgs)
          .then(stopLoading)
          .catch(stopLoading)
          .then(() => this.commitProxy('reload'))
      }
    }

    this.remove(selecteds).then(afterRemove)
  },
  handleFullScreen([show]) {
    this.fullScreenClass = show ? 'tiny-fullscreen-full' : ''
    this.$nextTick(() => {
      this.recalculate(true)
      emitEvent(this, 'fullscreen', show)
      this.emitter.emit('fullscreen', show)
    })
  },
  commitProxy(code, ...args) {
    // 从按钮配置中获取对应code的方法
    let btnMethod = Buttons.get(code)

    // 根据不同的操作码执行相应的操作
    if (code === 'insert') {
      // 插入新行
      this.insert()
    } else if (code === 'insert_actived') {
      // 插入新行并激活该行
      this.insert().then(({ row }) => this.setActiveRow(row))
    } else if (code === 'mark_cancel') {
      // 触发待处理事件
      this.triggerPendingEvent(code)
    } else if (code === 'delete_selection') {
      // 删除选中行,删除后会调用delete接口
      this.handleDeleteRow(code, 'ui.grid.deleteSelectRecord', () => this.commitProxy(['delete', ...args]))
    } else if (code === 'remove_selection') {
      // 移除选中行,仅从界面移除不调用接口
      this.handleDeleteRow(code, 'ui.grid.removeSelectRecord', () => this.removeSelecteds())
    } else if (code === 'export') {
      // 导出CSV文件
      this.exportCsv()
    } else if (code === 'reset_custom') {
      // 重置表格配置
      this.resetAll()
    } else if (~['reload', 'query', 'prefetch'].indexOf(code)) {
      // 处理数据刷新相关的操作
      this.handleFetch(code, args)
    } else if (code === 'delete') {
      // 删除数据
      this.handleDelete(code, args)
    } else if (code === 'save') {
      // 保存数据
      this.handleSave()
    } else if (code === 'fullscreen') {
      // 切换全屏显示
      this.handleFullScreen(args)
    } else if (btnMethod) {
      // 如果是自定义按钮方法,则调用对应的方法
      btnMethod.call(this, { code, $grid: this }, ...args)
    }

    // 等待DOM更新完成后返回Promise
    return this.$nextTick()
  },
  handleDeleteRow(code, i18nKey, callback) {
    let selecteds = this.getSelectRecords()

    if (this.isMsg && selecteds.length) {
      Modal.confirm(GlobalConfig.i18n(i18nKey)).then((type) => {
        type === 'confirm' && callback()
      })
    }

    if (this.isMsg && !selecteds.length) {
      Modal.message({
        id: code,
        message: GlobalConfig.i18n('ui.grid.selectOneRecord'),
        status: 'warning'
      })
    }

    if (!this.isMsg && selecteds.length) {
      callback()
    }
  },
  getPendingRecords() {
    return this.pendingRecords
  },
  triggerToolbarBtnEvent(button, event) {
    let { events = {}, tableListeners } = this
    let { code } = button

    if (!events.toolbarButtonClick && !tableListeners['toolbar-button-click']) {
      this.commitProxy(code, event)
    }

    emitEvent(this, 'toolbar-button-click', [{ code, button, $grid: this }, event])

    this.emitter.emit('toolbar-button-click', { code, button, $grid: this }, event)
  },
  triggerPendingEvent(code) {
    let { isMsg, pendingRecords: pendings } = this
    let selectColumn = this.getColumns().filter((col) => ~['selection', 'radio'].indexOf(col.type))
    let isSelection = selectColumn.length && selectColumn[0].type === 'selection'
    let isRadio = selectColumn.length && selectColumn[0].type === 'radio'
    let selecteds = isSelection ? this.getSelectRecords(true) : isRadio ? [this.getRadioRow()] : []

    if (!selecteds.length && isMsg) {
      Modal.message({
        id: code,
        message: GlobalConfig.i18n('ui.grid.selectOneRecord'),
        status: 'warning'
      })
    }

    if (selecteds.length) {
      let { plus = [], minus = [], tmp } = {}

      selecteds.forEach((data) => {
        let selectedPending = pendings.includes(data)

        tmp = selectedPending ? minus : plus
        tmp.push(data)
      })

      tmp = minus.length ? pendings.filter((item) => !~minus.indexOf(item)) : pendings
      this.pendingRecords = tmp.concat(plus)

      isSelection && this.clearSelection()
      isRadio && this.clearRadioRow()
    }
  }
}
