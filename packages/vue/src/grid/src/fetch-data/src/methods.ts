import { getObj } from '@opentiny/utils'
import { getDataset } from '@opentiny/utils'
import { error } from '../../tools'

export default {
  /**
   * 初始化fetch-data配置项
   * @returns {object}
   */
  initFetchOption() {
    // 从组件实例中解构获取 fetchData 和 dataset 配置
    const { fetchData = {}, dataset = {} } = this as any

    // 判断是否配置了数据获取相关的属性
    if (fetchData.api || dataset.source || dataset.value || dataset.api) {
      // 从 fetchData 或 dataset 中解构需要的配置项
      // loading: 加载状态
      // fields: 字段映射
      // api: 请求接口
      // reloadConfig: 重新加载配置
      const { loading, fields, api, reloadConfig } = fetchData || dataset.source || dataset.api || {}

      // 重新加载时是否保留过滤条件
      let isReloadFilter = false
      // 重新加载时是否保留滚动位置
      let isReloadScroll = false

      // 如果配置了 reloadConfig
      if (reloadConfig) {
        // 设置是否保留过滤条件
        isReloadFilter = Boolean(reloadConfig.filter)
        // 设置是否保留滚动位置
        isReloadScroll = Boolean(reloadConfig.scroll)
      }

      // 返回处理后的配置对象
      return { api, dataset, fields, loading, isReloadFilter, isReloadScroll }
    }
  },
  handleFetch(code, sortArg) {
    // 从组件实例中解构获取相关配置和数据
    let { pager, sortData, filterData, pagerConfig, fetchOption, fetchData, dataset } = this as any

    // 处理初始加载状态
    if (this.isInitialLoading) {
      this.isInitialLoading = false
    } else {
      // 如果存在列锚点,清除激活状态
      this.columnAnchor && this.clearActiveAnchor()
    }

    // 非预加载时,清除单选行并重置滚动位置
    if (code !== 'prefetch') {
      this.clearRadioRow()
      this.resetScrollTop()
    }

    // 如果没有配置fetchOption,报错并返回
    if (!fetchOption) {
      error('ui.grid.error.notQuery')
      return this.$nextTick()
    }

    // 获取请求参数和加载状态
    let { args, loading } = fetchData || dataset.source || dataset.api || {}
    // 获取排序相关数据
    let { field, order, prop, property } = sortData
    let sortByData = { field, order, prop, property }
    // 构建请求参数对象
    let params = {
      $grid: this,
      sort: sortData,
      sortBy: sortByData,
      filters: filterData,
      ...args
    }
    let search
    // 获取是否重新加载时保留过滤条件的配置
    const { isReloadFilter = false } = fetchOption

    // 设置表格加载状态
    this.tableLoading = loading

    // 如果配置了分页,添加分页参数
    if (pagerConfig) {
      params.page = pagerConfig
    }

    // 处理重新加载的情况
    if (code === 'reload') {
      // 如果有分页配置,重置当前页为第一页
      if (pager || args.page) {
        pagerConfig.currentPage = 1
      }

      // 清空排序数据
      this.sortData = params.sort = {}

      // 根据配置决定是否清空过滤条件
      if (!isReloadFilter) {
        params.filters = []
        this.filterData = params.filters
      }

      // 清空待处理记录和所有选中状态
      this.pendingRecords = []
      this.clearAll()
    }

    // 如果有排序参数,更新排序数据
    if (sortArg && sortArg.length > 0) {
      params.sortBy = sortArg
    }

    // 执行数据请求
    if (fetchData && fetchData.api) {
      // 使用自定义的API函数
      search = fetchData.api.apply(this, [params])
    } else {
      // 使用默认的数据集请求方法
      search = getDataset({ dataset, service: this.$service }, params)
    }

    // 处理请求结果
    return search.then(this.loadFetchData).catch((error) => {
      // 请求失败时关闭加载状态并抛出错误
      this.tableLoading = false
      throw error
    })
  },
  clearActiveAnchor() {
    // 从组件实例中获取列锚点相关配置
    // columnAnchor: 列锚点组件实例
    // columnAnchorParams: 列锚点参数配置,默认为空对象
    const { columnAnchor, columnAnchorParams = {} } = this

    // 从列锚点参数中获取锚点数组配置,默认为空数组
    const { anchors = [] } = columnAnchorParams

    // 如果没有列锚点组件或锚点数组为空,则直接返回
    if (!columnAnchor || anchors.length <= 0) return

    // 遍历所有锚点,将其active状态设置为false,即清除所有锚点的激活状态
    anchors.forEach((anchor) => (anchor.active = false))
  },
  loadFetchData(rest) {
    // 如果没有返回数据,则清空表格数据并关闭加载状态
    if (!rest) {
      this.tableData = []
      this.tableLoading = false
      return
    }

    // 从组件实例中解构需要的配置
    let {
      fetchOption: { fields = {} }, // 字段映射配置
      pagerConfig, // 分页配置
      pagerSlot // 分页插槽
    } = this as any

    // 处理带分页的数据结构
    if (pagerConfig && !Array.isArray(rest)) {
      // 获取总数,优先使用配置的total字段,否则使用默认路径'page.total'
      // 如果都没有则使用result数组长度
      let total = getObj(rest, fields.total || 'page.total') || rest?.result?.length || 0

      // 获取数据列表,按优先级尝试fields.result、fields.data、'result'路径
      let data = getObj(rest, fields.result || fields.data || 'result') || []

      // 更新表格数据和分页总数
      this.tableData = data
      pagerConfig.total = total

      // 如果存在内置分页器组件,则调用其setTotal方法更新总数
      let setTotal = pagerSlot && pagerSlot.componentInstance.setTotal
      setTotal && setTotal(total)
    } else {
      // 处理不带分页的数据
      // 如果配置了list字段则按配置取值,否则直接使用整个响应数据
      this.tableData = (fields.list ? getObj(rest, fields.list) : rest) || []
    }

    // 关闭表格loading状态
    this.tableLoading = false
  }
}
