/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { toNumber } from '@opentiny/vue-renderless/grid/static/'
import browser from '@opentiny/vue-renderless/common/browser'

let isWebkit = browser['-webkit'] && browser.name !== 'edge'

export function computeScrollYLoad({ _vm, scrollLoad, scrollY, scrollYLoad, scrollYStore, tableBodyElem }) {
  if (scrollYLoad || scrollLoad) {
    scrollYStore.rowHeight = _vm.getRowHeight()
  }

  if (scrollYLoad) {
    let visibleYSize = toNumber(scrollY.vSize || Math.ceil(tableBodyElem.clientHeight / scrollYStore.rowHeight))

    scrollYStore.visibleSize = visibleYSize

    // 自动优化
    if (!scrollY.oSize) {
      scrollYStore.offsetSize = visibleYSize
    }

    if (!scrollY.rSize) {
      scrollYStore.renderSize = visibleYSize + (isWebkit ? 2 : visibleYSize)
    }

    _vm.updateScrollYData()
  } else {
    _vm.updateScrollYSpace()
  }
}

export function computeScrollXLoad({ _vm, scrollX, scrollXLoad, scrollXStore, tableBodyElem, visibleColumn }) {
  if (scrollXLoad) {
    let firstColumn = visibleColumn[0]
    let cWidth = firstColumn ? firstColumn.renderWidth : 40
    let visibleXSize = toNumber(scrollX.vSize || Math.ceil(tableBodyElem.clientWidth / cWidth))

    scrollXStore.visibleSize = visibleXSize
    // 自动优化
    if (!scrollX.oSize) {
      scrollXStore.offsetSize = visibleXSize
    }

    if (!scrollX.rSize) {
      scrollXStore.renderSize = visibleXSize + 2
    }

    _vm.updateScrollXData()
  } else {
    _vm.updateScrollXSpace()
  }
}
