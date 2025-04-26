import { toNumber } from '../../../utils/static/'
import { browserInfo } from '@opentiny/utils'

let isWebkit = browserInfo['-webkit']

export function computeScrollYLoad({ _vm, scrollLoad, scrollY, scrollYLoad, scrollYStore, tableBodyElem }) {
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

export function computeScrollXLoad({ _vm, scrollX, scrollXLoad, scrollXStore, tableBodyElem, visibleColumn }) {
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
