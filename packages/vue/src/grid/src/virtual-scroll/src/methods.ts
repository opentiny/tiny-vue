import { browserInfo, debounce } from '@opentiny/utils'
import { getTotalRows } from '../../table/src/strategy'
import { toNumber } from '../../utils/static/'

const isWebkit = browserInfo && browserInfo['-webkit']
// 滚动加载防抖延迟时间(毫秒)
const DEBOUNCE_SCROLL_LOAD_DURATION = 200
// 异步列数据收集超时时间(毫秒)
const ASYNC_COLLECT_TIMEOUT = 100

function computeScrollYLoad({ _vm, scrollLoad, scrollY, scrollYLoad, scrollYStore, tableBodyElem }) {
  if (scrollYLoad || scrollLoad) {
    // 获取表格体默认第一行的高度
    scrollYStore.rowHeight = _vm.rowHeight
  }

  if (scrollYLoad) {
    // scrollY.vSize用户配置的可视区域渲染行数
    const bodyHeight = toNumber(
      tableBodyElem.style?.height || tableBodyElem.style?.maxHeight || tableBodyElem.clientHeight
    )
    let visibleYSize = toNumber(scrollY.vSize || Math.ceil(bodyHeight / scrollYStore.rowHeight))

    scrollYStore.visibleSize = visibleYSize

    // 自动优化
    if (!scrollY.oSize) {
      scrollYStore.offsetSize = visibleYSize
    }

    // scrollY.rSize用户配置的每次渲染行数
    if (!scrollY.rSize) {
      // 如果是webkit内核浏览器则渲染行数+2,性能差的浏览器就*2，防止滚动时出现较多白屏
      scrollYStore.renderSize = visibleYSize + (isWebkit ? 2 : visibleYSize)
    }

    // 计算需要渲染的表格数据，并更新YSpace元素高度用来显示正确的滚动条长度
    _vm.updateScrollYData()
  } else {
    _vm.updateScrollYSpace()
  }
}

function computeScrollXLoad({ _vm, scrollX, scrollXLoad, scrollXStore, tableBodyElem, visibleColumn }) {
  if (scrollXLoad) {
    /**
     * 使用 “列渲染宽度累加方式” 优化默认 visibleSize 的计算，
     * 旧的使用总宽度除以第一列宽度方式，会出现 visibleSize 很大出现渲染空白问题。
     */
    const clientWidth = tableBodyElem.clientWidth
    let width = 0
    let visibleXSize = 0
    const len = visibleColumn.length
    const colsWidth = visibleColumn?.map((i) => i.renderWidth).sort((a, b) => a - b) || []
    for (let i = 0; i < len; i++) {
      width += colsWidth[i]
      // 当虚拟滚动可见列宽度大于表格宽度或者循环结束，保存可见列大小
      if (width > clientWidth || i === len - 1) {
        visibleXSize = i + 1
        break
      }
    }

    visibleXSize = toNumber(scrollX.vSize || visibleXSize)

    scrollXStore.visibleSize = visibleXSize
    // 自动优化
    if (!scrollX.oSize) {
      scrollXStore.offsetSize = visibleXSize
    }

    if (!scrollX.rSize) {
      scrollXStore.renderSize = visibleXSize + 2
    }

    // 处理x轴虚拟滚动渲染数据
    _vm.updateScrollXData()
  } else {
    _vm.updateScrollXSpace()
  }
}

export default {
  // 计算可视渲染相关数据
  computeScrollLoad() {
    return this.$nextTick().then(() => {
      let { $refs, optimizeOpts, visibleColumn } = this as any
      let { scrollLoad, scrollXLoad, scrollXStore, scrollYLoad, scrollYStore } = this as any
      let { scrollX, scrollY } = optimizeOpts
      let { tableBody } = $refs
      let bodyElem = tableBody ? tableBody.$el : null
      if (bodyElem) {
        // 只计算X轴虚拟滚动逻辑,优化正常表格计算效率
        computeScrollXLoad({ _vm: this, scrollX, scrollXLoad, scrollXStore, tableBodyElem: bodyElem, visibleColumn })
        // 只计算Y轴虚拟滚动逻辑,优化正常表格计算效率
        computeScrollYLoad({ _vm: this, scrollLoad, scrollY, scrollYLoad, scrollYStore, tableBodyElem: bodyElem })
      }
      this.$nextTick(this.updateStyle)
    })
  },
  // 处理x轴方向虚拟滚动列数据加载
  updateScrollXData() {
    let { scrollXStore } = this

    // 获取需要渲染的列数和最后一次渲染列的index值
    let ret = sliceVisibleColumn(this)

    if (ret.sliced) {
      // 更新DOM样式保证表格滚动时的对齐，初始化表格时也需要计算x轴方向滚动条占位符的尺寸
      this.updateScrollXSpace()
      // 处理滚动条滚动后的异步渲染列逻辑
      this.updateScrollStatus()
    }

    this.debounceRaf('updateScrollXDataHandler', () => {
      scrollXStore.lastStartIndex = ret.lastStartIndex
      // 设置新的渲染列触发Vue渲染
      this.tableColumn = ret.tableColumn
      this.visibleColumnChanged = ret.visibleColumnChanged
      this.$nextTick(() => {
        this.updateFooter()
        this.updateStyle()
      })
    })
  },
  // 更新横向 X 可视渲染上下剩余空间大小(续)
  // 设置主表头/主表体/主表尾表格元素的marginLeft（已滚动出渲染范围的列，不渲染但是保留宽度占位，保证对齐）
  updateScrollXSpace() {
    const { elemStore, scrollXLoad, scrollXStore, scrollbarWidth, tableWidth, visibleColumn } = this
    const { startIndex } = scrollXStore
    let { bodyElem, footerElem, headerElem, leftSpaceWidth, marginLeft } = {}

    // 从缓存中获取主表头/主表体/主表尾表格元素
    headerElem = elemStore['main-header-table']
    bodyElem = elemStore['main-body-table']
    footerElem = elemStore['main-footer-table']

    // 累加已滚动出渲染范围的列的总渲染宽度
    leftSpaceWidth = visibleColumn.slice(0, startIndex).reduce((previous, column) => {
      // 左侧冻结列，不计算margin
      if (column.fixed === 'left') return previous
      return previous + column.renderWidth
    }, 0)
    marginLeft = scrollXLoad ? `${leftSpaceWidth}px` : ''

    // 设置主表头/主表体/主表尾表格元素的marginLeft（已滚动出渲染范围的列，不渲染但是保留宽度占位，保证对齐）
    headerElem && (headerElem.style.marginLeft = marginLeft)
    bodyElem.style.marginLeft = marginLeft
    footerElem && (footerElem.style.marginLeft = marginLeft)

    // 设置各个区域的横向占位元素宽度
    const layouts = ['header', 'body', 'footer']
    layouts.forEach((layout) => {
      const xSpaceElem = elemStore[`main-${layout}-xSpace`]
      const extra = layout === 'header' ? scrollbarWidth : 0
      // 这里只能找到body中的元素，header和footer永远是false
      if (xSpaceElem) {
        // 表格主体内容x轴方向虚拟滚动条占位元素
        xSpaceElem.style.width = scrollXLoad ? `${tableWidth + extra}px` : ''
      }
    })

    this.$nextTick(this.updateStyle)
  },
  // 使用requestAnimationFrame实现防抖
  debounceRaf(handlerKey, callback) {
    // 如果已有请求帧，先取消
    if (this[handlerKey]) {
      cancelAnimationFrame(this[handlerKey])
    }

    // 请求新的动画帧
    this[handlerKey] = requestAnimationFrame(() => {
      this[handlerKey] = null
      callback()
    })
  },
  // 处理虚拟滚动加载数据，并更新YSpace位置
  updateScrollYData() {
    // 更新DOM样式保证表格滚动时的对齐
    this.updateScrollYSpace()
    // 使用requestAnimationFrame优化渲染
    this.debounceRaf('updateScrollYDataHandler', () => {
      this.handleTableData().then(() => this.$nextTick(this.updateStyle))
    })
  },
  // 更新纵向虚拟滚动 Y 可视渲染上下剩余空间大小
  updateScrollYSpace() {
    let { $grid, elemStore, scrollLoad, scrollLoadStore, scrollYLoad } = this
    let { rowHeight, startIndex } = this.scrollYStore
    let totalRows = getTotalRows(this)
    let bodyHeight = totalRows * rowHeight
    let scrollHeight = $grid.pagerConfig ? $grid.pagerConfig.total * rowHeight : 0
    let isVScrollOrLoad = scrollYLoad || scrollLoad
    let { marginTop, ySpaceHeight } = {}

    // 计算marginTop和空间高度
    marginTop = isVScrollOrLoad && scrollYLoad ? `${Math.max(startIndex * rowHeight, 0)}px` : ''
    ySpaceHeight = isVScrollOrLoad ? `${bodyHeight}px` : ''

    // 存储滚动分页相关数据
    scrollLoadStore.bodyHeight = bodyHeight
    scrollLoadStore.scrollHeight = scrollHeight

    const tableElem = elemStore['main-body-table']

    // 使用transform设置表格偏移位置，更高效
    if (tableElem) {
      tableElem.style.transform = marginTop ? `translateY(${marginTop})` : ''
    }

    // 设置Y轴空间元素高度
    const ySpaceElem = elemStore['main-body-ySpace']
    ySpaceElem && (ySpaceElem.style.height = ySpaceHeight)

    // 滚动分页加载逻辑设置
    if (ySpaceElem && scrollLoad && $grid) {
      Object.assign(scrollLoadStore, { bodyHeight, scrollHeight })
      ySpaceElem.firstChild.style.height = `${scrollHeight}px`
      ySpaceElem.onscroll = this.debounceScrollLoad
    }
  },
  // 更新滚动加载条位置
  updateScrollLoadBar(event) {
    let { $el, elemStore, scrollLoad, scrollLoadStore } = this
    if (scrollLoad && $el.contains(event.target)) {
      // 处理鼠标滚轮事件，更新滚动位置
      let wheelDelta = event.wheelDelta ? event.wheelDelta : -event.detail * 40
      let scrollElm = elemStore['main-body-ySpace']
      let { scrollHeight, bodyHeight } = scrollLoadStore
      let max = scrollHeight - bodyHeight
      let top = scrollElm.scrollTop - wheelDelta

      // 确保滚动位置在有效范围内
      top = max < top ? max : top
      top = top < 0 ? 0 : top
      scrollElm.scrollTop = top
    }
  },
  // 纵向 Y 可视渲染处理
  loadScrollYData(event) {
    const { scrollYStore } = this as any
    const { startIndex, renderSize, offsetSize, visibleIndex, visibleSize, rowHeight } = scrollYStore

    // 动态获取容器的scrollTop，这里有可能会造成卡顿，暂时没有好的方案
    let { scrollTop } = event.target
    let toVisibleIndex = Math.ceil(scrollTop / rowHeight)
    let preload = false
    if (visibleIndex === toVisibleIndex) {
      return
    }
    let marginSize = Math.min(Math.floor((renderSize - visibleSize) / 2), visibleSize)
    if (toVisibleIndex < visibleIndex) {
      // 向上
      preload = startIndex >= toVisibleIndex - offsetSize
      if (preload) {
        scrollYStore.startIndex = Math.max(0, toVisibleIndex - Math.max(marginSize, renderSize - visibleSize))
        this.updateScrollYData()
      }
    } else {
      // 向下
      preload = startIndex + renderSize <= toVisibleIndex + visibleSize + offsetSize
      if (preload) {
        let totalRows = getTotalRows(this)
        scrollYStore.startIndex = Math.max(0, Math.min(totalRows - renderSize, toVisibleIndex - marginSize))
        this.updateScrollYData()
      }
    }
    scrollYStore.visibleIndex = toVisibleIndex
    this.$nextTick(() => {
      this.updateSelectedCls(true)
    })
  },
  // 获取虚拟滚动状态
  getVirtualScroller() {
    let { scrollXLoad, scrollYLoad } = this
    let { scrollLeft, scrollTop } = this.$refs.tableBody.$el
    return {
      scrollX: scrollXLoad,
      scrollY: scrollYLoad,
      scrollLeft,
      scrollTop
    }
  },
  // 横向 X 可视渲染事件处理
  triggerScrollXEvent(event) {
    this.loadScrollXData(event)
  },
  debounceScrollX(event) {
    if (!this.tasks.debounceScrollX) {
      this.tasks.debounceScrollXHandler = null
      this.tasks.debounceScrollX = () => {
        return requestAnimationFrame(() => {
          this.tasks.debounceScrollXHandler = null
          this.loadScrollXData(event)
        })
      }
    }

    if (this.tasks.debounceScrollXHandler) {
      cancelAnimationFrame(this.tasks.debounceScrollXHandler)
      this.tasks.debounceScrollXHandler = null
    }

    this.tasks.debounceScrollXHandler = this.tasks.debounceScrollX()
  },
  // 处理x轴滚动时，虚拟滚动数据计算
  loadScrollXData() {
    let { scrollXStore, visibleColumn } = this
    let { offsetSize, renderSize, startIndex, visibleIndex, visibleSize } = scrollXStore
    let { scrollLeft } = this.$refs.tableBody.$el
    let { preload = false, toVisibleIndex = 0, width = 0 } = {}
    // 根据滚动位置计算边界可见列
    for (let i = 0; i < visibleColumn.length; i++) {
      width += visibleColumn[i].renderWidth
      if (scrollLeft < width) {
        toVisibleIndex = i // 边界可见列索引
        break
      }
    }
    // 边界可见列和上次记录的相同，滚动还没超过此列，就关闭Tooltip退出
    if (visibleIndex === toVisibleIndex) {
      this.clostTooltip()
      return
    }
    let marginSize = Math.min(Math.floor((renderSize - visibleSize) / 2), visibleSize)
    marginSize = Math.max(0, marginSize)
    if (visibleIndex > toVisibleIndex) {
      // 向左
      preload = startIndex >= toVisibleIndex - offsetSize
      if (preload) {
        scrollXStore.startIndex = Math.max(0, toVisibleIndex - Math.max(marginSize, renderSize - visibleSize))
        this.updateScrollXData()
      }
    } else {
      // 向右
      preload = startIndex + renderSize <= toVisibleIndex + visibleSize + offsetSize
      if (preload) {
        scrollXStore.startIndex = Math.max(0, Math.min(visibleColumn.length - renderSize, toVisibleIndex - marginSize))
        this.updateScrollXData()
      }
    }
    scrollXStore.visibleIndex = toVisibleIndex
    this.clostTooltip()
  },
  // 纵向 Y 可视渲染事件处理
  triggerScrollYEvent(event) {
    this.loadScrollYData(event)
  },
  // 处理滚动分页相关逻辑
  debounceScrollLoad(event) {
    if (!this.tasks.debounceScrollLoad) {
      this.tasks.debounceScrollLoad = debounce(DEBOUNCE_SCROLL_LOAD_DURATION, () => {
        const { scrollHeight, bodyHeight } = this.scrollLoadStore
        const { currentPage, pageSize } = this.$grid.tablePage
        const max = scrollHeight - bodyHeight
        let scrollTop = event.target.scrollTop

        if (scrollTop > max) {
          scrollTop = max
        }

        const { rowHeight } = this.scrollYStore
        let visibleIndex = Math.ceil(scrollTop / rowHeight)
        let page = Math.ceil(visibleIndex / pageSize) + 1

        if (currentPage !== page) {
          this.$grid.pageCurrentChange(page)
        }
      })
    }

    this.tasks.debounceScrollLoad()
  },
  /* X/Y 方向滚动状态更新 */
  updateScrollStatus() {
    // 防抖处理滚动状态更新
    if (!this.tasks.updateScrollStatus) {
      this.tasks.updateScrollStatus = debounce(ASYNC_COLLECT_TIMEOUT, () => {
        const { scrollXLoad, scrollYLoad, isAsyncColumn } = this

        // 如果存在异步列并且开启了虚拟滚动
        if (isAsyncColumn && (scrollXLoad || scrollYLoad)) {
          const { tableData, scrollXStore, scrollYStore, tableFullData, scrollDirection = 'N' } = this
          const isInit =
            (scrollXLoad && scrollXStore.visibleIndex === 0) || (scrollYLoad && scrollYStore.visibleIndex === 0)

          // 第一次初始化及横、纵向滚动时（用户直接设置 data 属性时将由 handleAsyncColumn 初始化异步列）
          if (isInit || scrollDirection !== 'N') {
            this.handleResolveColumn(tableFullData, this.collectAsyncColumn(tableData))
          }
        }
      })
    }

    this.tasks.updateScrollStatus()
  }
}
