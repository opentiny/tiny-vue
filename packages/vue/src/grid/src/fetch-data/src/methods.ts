import { getObj } from '@opentiny/vue-renderless/common/object'
import { getDataset } from '@opentiny/vue-renderless/common/dataset'
import { error } from '../../tools'
export default {
  /**
   * 初始化fetch-data配置项
   * @returns {object}
   */
  initFetchOption() {
    const { fetchData = {}, dataset = {} } = this as any

    if (fetchData.api || dataset.source || dataset.value || dataset.api) {
      const { loading, fields, api, reloadConfig } = fetchData || dataset.source || dataset.api || {}
      let isReloadFilter = false
      let isReloadScroll = false

      if (reloadConfig) {
        isReloadFilter = Boolean(reloadConfig.filter)
        isReloadScroll = Boolean(reloadConfig.scroll)
      }

      return { api, dataset, fields, loading, isReloadFilter, isReloadScroll }
    }
  },
  handleFetch(code, sortArg) {
    let { pager, sortData, filterData, pagerConfig, fetchOption, fetchData, dataset } = this as any

    if (this.isInitialLoading) {
      this.isInitialLoading = false
    } else {
      this.columnAnchor && this.clearActiveAnchor()
    }

    if (code !== 'prefetch') {
      this.clearRadioRow()
      this.resetScrollTop()
    }

    if (!fetchOption) {
      error('ui.grid.error.notQuery')
      return this.$nextTick()
    }

    let { args, loading } = fetchData || dataset.source || dataset.api || {}
    let { field, order, prop, property } = sortData
    let sortByData = { field, order, prop, property }
    let params = {
      $grid: this,
      sort: sortData,
      sortBy: sortByData,
      filters: filterData,
      ...args
    }
    let search
    const { isReloadFilter = false } = fetchOption

    this.tableLoading = loading

    if (pagerConfig) {
      params.page = pagerConfig
    }

    if (code === 'reload') {
      if (pager || args.page) {
        pagerConfig.currentPage = 1
      }

      this.sortData = params.sort = {}

      if (!isReloadFilter) {
        params.filters = []
        this.filterData = params.filters
      }

      this.pendingRecords = []
      this.clearAll()
    }

    if (sortArg && sortArg.length > 0) {
      params.sortBy = sortArg
    }

    if (fetchData && fetchData.api) {
      search = fetchData.api.apply(this, [params])
    } else {
      search = getDataset({ dataset, service: this.$service }, params)
    }

    return search.then(this.loadFetchData).catch((error) => {
      this.tableLoading = false
      throw error
    })
  },
  clearActiveAnchor() {
    const { columnAnchor, columnAnchorParams = {} } = this
    const { anchors = [] } = columnAnchorParams

    if (!columnAnchor || anchors.length <= 0) return

    anchors.forEach((anchor) => (anchor.active = false))
  },
  loadFetchData(rest) {
    if (!rest) {
      this.tableData = []
      this.tableLoading = false
      return
    }

    let {
      fetchOption: { fields = {} },
      pagerConfig,
      pagerSlot
    } = this as any

    if (pagerConfig && !Array.isArray(rest)) {
      let total = getObj(rest, fields.total || 'page.total') || rest?.result?.length || 0
      let data = getObj(rest, fields.result || fields.data || 'result') || []

      this.tableData = data
      pagerConfig.total = total

      // 内置pager
      let setTotal = pagerSlot && pagerSlot.componentInstance.setTotal

      setTotal && setTotal(total)
    } else {
      this.tableData = (fields.list ? getObj(rest, fields.list) : rest) || []
    }

    this.tableLoading = false
  }
}
