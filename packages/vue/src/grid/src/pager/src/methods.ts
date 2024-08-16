import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { emitEvent } from '@opentiny/vue-renderless/grid/utils'
import Modal from '@opentiny/vue-modal'
import Pager from '@opentiny/vue-pager'
import { extend } from '@opentiny/vue-renderless/common/object'
import { h, hooks } from '@opentiny/vue-common'
import GlobalConfig from '../../config'

export default {
  // 初始化表格分页配置
  initPagerConfig() {
    let { $slots, fetchOption, scrollLoad = {} } = this as any
    let pagerProps = {}

    if (fetchOption) {
      let pagerSlot = $slots.pager && $slots.pager[0]

      if (pagerSlot) {
        let { componentOptions, children } = pagerSlot

        if (componentOptions && !children) {
          this.pagerSlot = pagerSlot
          pagerProps = componentOptions.propsData
        }
      } else if (this.pager) {
        pagerProps = this.pager.attrs
      }

      if (this.pager || $slots.pager || this.scrollLoad) {
        return Object.assign(this.tablePage, { pageSize: scrollLoad.pageSize }, pagerProps)
      }

      return fetchOption.args && fetchOption.args.page
    }
  },
  // 表格内置分页渲染器
  renderPager({ $slots, _vm, loading, pager, pagerConfig, tableLoading, vSize }) {
    let res = null

    const { isThemeSaas, isModeMobileFirst, isViewGantt, currentBreakpoint, fetchData, isViewCustom } = _vm
    const style = { display: 'none' }

    // 使用saas主题和多端模式时，内置Pager使用多端模板。在非gantt/custom视图或gantt/custom视图大屏下显示多端Pager
    if (isThemeSaas && isModeMobileFirst) {
      if (!(isViewGantt || isViewCustom) || ((isViewGantt || isViewCustom) && currentBreakpoint !== 'default')) {
        style.display = 'flex'
        style.justifyContent = 'flex-end'
      }
      // 在小屏下居中显示，大屏下居右显示
      if (currentBreakpoint === 'default') {
        style.justifyContent = 'center'
      }
    } else {
      // 在其它场景，内置Pager使用PC模板。显示为block（因为Pager的PC模板外层是div）
      style.display = 'block'
    }
    if ($slots.pager) {
      res = $slots.pager()
    } else if (pager) {
      pager.component = pager.component || (fetchData && fetchData.api ? Pager : null)
      res = h(hooks.toRaw(pager.component), {
        props: {
          size: vSize,
          loading: loading || tableLoading,
          isBeforePageChange: _vm.isBeforePageChange || _vm.showSaveMsg,
          accurateJumper: _vm.autoLoad,
          ...pagerConfig
        },
        on: {
          'size-change': _vm.pageSizeChange,
          'current-change': _vm.pageCurrentChange,
          'before-page-change': _vm.beforePageChangeHandler
        },
        ref: 'pager',
        style
      })
    }

    return res
  },
  pageChangeEvent(params) {
    // 这里需要做下防抖操作，防止在pageSize从小变大的时候导致fetch-data触发多次
    if (!this.tasks.updatePage) {
      this.tasks.updatePage = debounce(200, () => {
        const eventParams = { $grid: this, ...params }
        const toolbarVm = this.getVm('toolbar')
        // 处理标签式监听事件的：@page-change
        emitEvent(this, 'page-change', eventParams)

        // 处理配置式表格的监听事件
        this.emitter.emit('page-change', eventParams)

        // 触发fetchData
        this.commitProxy('query')

        if (toolbarVm) {
          toolbarVm.orderSetting()
        }
      })
    }
    this.tasks.updatePage()
  },
  // size为页大小，load为false则触发change事件与查询，在个性化初始化时根据autoload控制是否加载数据
  pageSizeChange(size, load) {
    this.tablePage.pageSize = size
    this.tablePage.currentPage = 1
    load || this.pageChangeEvent(this.tablePage)
  },
  pageCurrentChange(current) {
    // 只有在当前页改变时，才修改状态和触发新的查询
    if (this.tablePage.currentPage !== current) {
      this.tablePage.currentPage = current
      this.pageChangeEvent(this.tablePage)
    }
  },
  beforePageChangeHandler(params) {
    if (!this.showSaveMsg) {
      let eventParams = extend(false, { $grid: this }, params)

      emitEvent(this, 'before-page-change', eventParams)
      this.emitter.emit('before-page-change', eventParams)

      return
    }

    let { callback, rollback } = params
    let { insertRecords, removeRecords, updateRecords } = this.getRecordset()

    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      let next = (res) => {
        if (res === 'confirm') {
          rollback && rollback()
          emitEvent(this, 'cancel-page-change', this)
          this.emitter.emit('cancel-page-change', this)
        } else {
          callback && callback()
        }
      }

      Modal.confirm(GlobalConfig.i18n('ui.grid.isSaveMsg')).then(next)
    } else {
      callback && callback()
    }
  }
}
