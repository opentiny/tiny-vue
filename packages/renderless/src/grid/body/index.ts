import { emitEvent } from '../utils'

import { addClass, removeClass } from '../../common/deps/dom'

export const generateFixedClassName = ({ $table, bodyElem, leftList, rightList }) => {
  if (!$table || !bodyElem) {
    return
  }

  const scrollLeft = bodyElem.scrollLeft

  if (leftList.length) {
    if (scrollLeft === 0) {
      removeClass($table.$el, 'tiny-grid-fixed__left')
    } else {
      addClass($table.$el, 'tiny-grid-fixed__left')
    }
  }

  if (rightList.length) {
    const isShowRightFixed = bodyElem.scrollWidth - bodyElem.clientWidth - bodyElem.scrollLeft

    if (isShowRightFixed === 0) {
      removeClass($table.$el, 'tiny-grid-fixed__right')
    } else {
      addClass($table.$el, 'tiny-grid-fixed__right')
    }
  }
}

export const scrollEvent =
  ({ parent }) =>
  (event) => {
    // 滚动处理： 如果存在列固定左侧，同步更新滚动状态；如果存在列固定右侧，同步更新滚动状态。
    const $table = parent

    let { $refs } = $table
    const { lastScrollLeft, lastScrollTop, scrollXLoad, columnStorescrollXLoad, scrollYLoad, columnStore } =
      $table.state
    let { leftList, rightList } = columnStore
    let { tableBody, tableFooter, tableHeader } = $refs

    // 获取主表头，主表体，主表尾，左表体，右表体
    let headerElem = tableHeader ? tableHeader.$el : null
    let bodyElem = tableBody.$el
    let footerElem = tableFooter ? tableFooter.$el : null

    // 获取主表体元素的滚动位置
    let scrollLeft = bodyElem.scrollLeft
    let scrollTop = bodyElem.scrollTop

    // 对比当前滚动位置和最后一次滚动位置，来得到当前滚动的是哪个方向上的滚动条
    let isY = scrollTop !== lastScrollTop
    let isX = scrollLeft !== lastScrollLeft

    // 记录新的滚动位置和时间
    $table.lastScrollTime = Date.now()
    $table.state.lastScrollLeft = scrollLeft
    $table.state.lastScrollTop = scrollTop
    $table.state.scrollDirection = isX ? 'X' : 'Y'

    // 同步滚动条状态，只同步表头(表尾)滚动条状态，冻结列已优化为sticky方式
    syncHeaderAndFooterScroll({ bodyElem, footerElem, headerElem, isX })

    // 处理关于冻结列最外层div类名
    if (leftList.length || rightList.length) {
      generateFixedClassName({ $table, bodyElem, leftList, rightList })
    }

    // 处理x和y轴方法虚拟滚动数据加载逻辑
    doScrollLoad({ $table, _vm: this, bodyElem, event, headerElem, isX, isY, scrollLeft, scrollXLoad, scrollYLoad })

    // 触发用户监听的表格滚动事件
    emitEvent($table, 'scroll', [{ type: 'body', scrollTop, scrollLeft, isX, isY, $table }, event])
  }

const syncHeaderAndFooterScroll = ({ bodyElem, footerElem, headerElem, isX }) => {
  if (isX && headerElem) {
    headerElem.scrollLeft = bodyElem.scrollLeft
  }
  if (isX && footerElem) {
    footerElem.scrollLeft = bodyElem.scrollLeft
  }
}

function doScrollLoad({ $table, _vm, bodyElem, event, headerElem, isX, isY, scrollLeft, scrollXLoad, scrollYLoad }) {
  let isScrollX = scrollXLoad && isX

  // 如果是水平虚拟滚动，并且正在进行水平滚动，就触发水平虚滚事件
  if (isScrollX) {
    // 处理x轴方法虚拟滚动加载数据逻辑
    $table.triggerScrollXEvent(event)
  }

  // 同上，并且主表头存在时，修复极端场景（拖动滚动条到最右侧）表头表体水平滚动位置不同步问题
  if (isScrollX && headerElem && scrollLeft + bodyElem.clientWidth >= bodyElem.scrollWidth) {
    // 修复拖动滚动条时可能存在不同步问题
    _vm.$nextTick(() => {
      if (bodyElem.scrollLeft !== headerElem.scrollLeft) {
        headerElem.scrollLeft = bodyElem.scrollLeft
      }
    })
  }

  // 如果是垂直虚拟滚动，并且正在进行垂直滚动，就触发垂直虚滚事件
  if (scrollYLoad && isY) {
    // 处理y轴方法虚拟滚动加载数据逻辑
    $table.triggerScrollYEvent(event)
  }
}
