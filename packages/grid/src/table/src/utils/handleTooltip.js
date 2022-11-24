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
/*
 * use range width instead of scrollWidth to determine whether the text is overflowing
 * to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
 */
export function createTooltipRange({ _vm, cell, column, isHeader }) {
  let range = document.createRange()
  let rangeEnd

  range.setStart(cell, 0)

  if (_vm.headerSuffixIconAbsolute) {
    if (column.sortable && column.filter && isHeader) {
      rangeEnd = cell.childNodes.length - 2
    } else if ((column.sortable || column.filter) && isHeader) {
      rangeEnd = cell.childNodes.length - 1
    } else {
      rangeEnd = cell.childNodes.length
    }
  } else {
    rangeEnd = column.sortable && isHeader ? cell.childNodes.length - 1 : cell.childNodes.length
  }

  range.setEnd(cell, rangeEnd)

  return range
}

/*
 * 预期 contentMethod 可以返回空串、null、undefined 和非空字符串
 * 1、返回空串，则不显示 tooltip 提示
 * 2、返回非空字符串，则处理字符串中的换行字符
 * 3、返回 null 或 undefined，则按之前默认逻辑处理
 */
export function processContentMethod({ _vm, column, content, contentMethod, event, isHeader, row, showTip }) {
  let tooltipContent

  if (contentMethod) {
    tooltipContent = contentMethod({ event, column, row, showTip, isHeader, content })

    if (tooltipContent === '') return
  }

  if (tooltipContent) {
    _vm.tooltipContent = tooltipContent
    _vm.tooltipContentPre = true
  } else {
    _vm.tooltipContent = content
    _vm.tooltipContentPre = false
  }
}
