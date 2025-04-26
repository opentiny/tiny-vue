import type { ScrollConfig } from './types'

/**
 * 合并滚动方向存储对象
 * @param {Object} options - 用户配置的滚动方向选项
 * @param {Object} scrollStore - 滚动方向存储对象
 */
export function mergeScrollDirStore(options = {}, scrollStore: any) {
  // 有配置才进行合并
  if (options) {
    const { oSize, rSize, rHeight } = options as ScrollConfig

    if (oSize) {
      scrollStore.offsetSize = oSize
    }

    if (rSize) {
      scrollStore.renderSize = rSize
    }

    if (rHeight) {
      scrollStore.rowHeight = rHeight
    }
  }
}

/**
 * 计算表格内部元素的位置
 * @param {Object} params - 参数对象
 */
export function generateFixedClassName({
  $table,
  bodyElem,
  leftList,
  rightList
}: {
  $table: any
  bodyElem: HTMLElement
  leftList: any[]
  rightList: any[]
}) {
  const { scrollLeft } = bodyElem

  let isLeftActive = leftList.length && scrollLeft > 0
  let isRightActive = rightList.length && bodyElem.clientWidth < bodyElem.scrollWidth - scrollLeft

  if (isLeftActive) {
    $table.scrollDirection = 'L'
  } else if (isRightActive) {
    $table.scrollDirection = 'R'
  } else {
    $table.scrollDirection = 'N'
  }

  // 优化: 当方向改变时才修改类，否则跳过
  if (isLeftActive) {
    // 存在左侧固定列且有水平滚动
    bodyElem.classList.add('tiny-grid__body--scrolling-left')
  } else {
    bodyElem.classList.remove('tiny-grid__body--scrolling-left')
  }

  if (isRightActive) {
    // 存在右侧固定列且有水平滚动
    bodyElem.classList.add('tiny-grid__body--scrolling-right')
  } else {
    bodyElem.classList.remove('tiny-grid__body--scrolling-right')
  }
}
