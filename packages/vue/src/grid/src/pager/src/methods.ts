import { debounce } from '@opentiny/utils'
import { emitEvent } from '@opentiny/vue-renderless/grid/utils'
import Modal from '@opentiny/vue-modal'
import { extend } from '@opentiny/utils'
import GlobalConfig from '../../config'

export default {
  // 初始化表格分页配置
  initPagerConfig() {
    // 从组件实例中解构获取数据获取配置和滚动加载配置
    const { fetchOption, scrollLoad = {} } = this as any

    // 如果配置了数据获取相关选项
    if (fetchOption) {
      const pagerProps = this.pager ? this.pager.attrs : {}

      // 如果配置了分页器、存在分页插槽或开启了滚动加载
      if (this.pager || this.scrollLoad) {
        // 合并表格分页配置、滚动加载的页大小和分页器属性
        return Object.assign(this.tablePage, { pageSize: scrollLoad.pageSize }, pagerProps)
      }

      // 如果都不满足,返回数据获取配置中的分页参数
      return fetchOption.args && fetchOption.args.page
    }
  },
  pageChangeEvent(params) {
    this.tablePageLoading = true
    // 这里需要做下防抖操作，防止在pageSize从小变大的时候导致fetch-data触发多次
    if (!this.tasks.updatePage) {
      this.tasks.updatePage = debounce(200, () => {
        const eventParams = { $grid: this, ...params }
        const toolbarVm = this.getVm('toolbar')
        // 处理标签式监听事件的：@page-change
        emitEvent(this, 'page-change', eventParams)

        // 处理配置式表格的监听事件
        this.emitter.emit('page-change', eventParams)
        this.handleFetch('query').then(() => {
          this.realTimeTablePage = { ...this.tablePage }
          this.tablePageLoading = false
        })

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

      emitEvent(this, 'before-page-change', eventParams) // 触发正常vue监听的事件比如@before-page-change
      this.emitter.emit('before-page-change', eventParams) // 触发配置式监听的事件

      return
    }

    let { callback, rollback } = params
    let { insertRecords, removeRecords, updateRecords } = this.getRecordset()

    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      let next = (res) => {
        if (res === 'confirm') {
          rollback && rollback()
          emitEvent(this, 'cancel-page-change', this) // 触发正常vue监听的事件比如@cancel-page-change
          this.emitter.emit('cancel-page-change', this) // 触发配置式监听的事件
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
