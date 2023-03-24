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

import { extend } from '@opentiny/vue-renderless/common/object'
import browser from '@opentiny/vue-renderless/common/browser'

const isIE = browser.name === 'ie'
const rgbRegExp = /^rgba?\((\d+),\s(\d+),\s(\d+)([\s\S]*)\)$/
const hexRegExp = /^#([a-zA-Z0-9]{3}|[a-zA-Z0-9]{6})$/

function computeColor(rgbColor) {
  const rgb = rgbRegExp.exec(rgbColor).slice(1, 4)
  return parseInt(rgb[0]).toString(16) + parseInt(rgb[1]).toString(16) + parseInt(rgb[2]).toString(16)
}

function getBgc(dom) {
  const getComputedStyle = window.getComputedStyle

  const backgroundColor = isIE ? dom.currentStyle.backgroundColor : getComputedStyle(dom).backgroundColor

  if (rgbRegExp.test(backgroundColor)) {
    return computeColor(backgroundColor)
  } else if (hexRegExp.test(backgroundColor)) {
    const bgc = backgroundColor.slice(1)

    if (bgc.length === 3) {
      return bgc
        .split('')
        .map((s) => s + s)
        .join('')
    }

    return bgc
  }

  return 'ffffff'
}

function funcFromCodePoint() {
  let codeUnitArr = []
  let codeLength = 0
  let resultStr = ''

  for (let i = 0, length = arguments.length; i !== length; ++i) {
    let cp = Number(arguments[i])

    if (!(cp < 0x10FFFF && cp >>> 0 === cp)) {
      throw new RangeError('Invalid code point: ' + cp)
    }

    if (cp <= 0xFFFF) {
      codeLength = codeUnitArr.push(cp)
    } else {
      cp -= 0x10000
      codeLength = codeUnitArr.push((cp >> 10) + 0xD800, (cp % 0x400) + 0xDC00)
    }

    if (codeLength >= 0x3FFF) {
      resultStr += String.fromCharCode.apply(null, codeUnitArr)
      codeUnitArr.length = 0
    }
  }

  return resultStr + String.fromCharCode.apply(null, codeUnitArr)
}

const defaultOptions = {
  plugins: {
    XLSX: null, // xlsx 插件
    XLSXX: null, // xlsx-style 插件
    FileSaver: null // FileSaver 插件
  },
  table: {
    sheetName: 'tiny-sheet',
    formatMethod: ({ value, type }) => ({ value, type }),
    styleMethod: ({ style }) => style,
    rowHeightMethod: ({ height }) => height,
    columnWidthMethod: ({ width }) => width,
    mergesMethod: (merges) => merges
  }
}

function s2ab(s) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)

  for (let i = 0; i !== s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xFF
  }

  return buf
}

function adjustHeight(hpx) {
  const n = parseInt(hpx / 36)
  return hpx - 10 * n
}

function initHeaderDatas({ datas, headerRowCount, headerTrs }) {
  let maxColSpanCount = [-1, 0]

  for (let i = 0; i < headerRowCount; i++) {
    const childNodes = headerTrs[i].childNodes
    let colSpanCount = 0

    for (let j = 0; j < childNodes.length; j++) {
      if (~childNodes[j].className.split(/\s/).indexOf('col__gutter')) {
        break
      }

      colSpanCount += childNodes[j].colSpan
    }

    if (colSpanCount > maxColSpanCount[1]) {
      maxColSpanCount[0] = i
      maxColSpanCount[1] = colSpanCount
    }
  }

  for (let i = 0; i < headerRowCount; i++) {
    datas.push([])

    for (let j = 0; j < maxColSpanCount[1]; j++) {
      datas[i].push('')
    }
  }
}

function buildHeaderMerges({ datas, headerTrs, rowHeightMethod, ths, ws }) {
  for (let i = 0; i < headerTrs.length; i++) {
    const headerTrRect = headerTrs[i].getBoundingClientRect()
    const childNodes = headerTrs[i].childNodes
    let rowHeight = Math.round(headerTrRect.height)
    let lastColSpan = 0

    rowHeight = rowHeightMethod ? rowHeightMethod({ rowIndex: i, height: rowHeight }) : rowHeight
    ws['!rows'].push({ hpx: adjustHeight(rowHeight) })

    for (let j = 0; j < childNodes.length; j++) {
      if (~childNodes[j].className.split(/\s/).indexOf('col__gutter')) {
        break
      }

      ths.push(childNodes[j])

      const colSpan = childNodes[j].colSpan
      const rowSpan = childNodes[j].rowSpan
      const textContent = childNodes[j].textContent

      if (colSpan > 1) {
        ws['!merges'].push({
          s: { r: i, c: lastColSpan },
          e: { r: i, c: lastColSpan + colSpan - 1 }
        })
      }

      if (rowSpan > 1) {
        ws['!merges'].push({
          s: { r: i, c: lastColSpan },
          e: { r: i + rowSpan - 1, c: lastColSpan }
        })
      }

      if (i !== headerTrs.length - 1) {
        datas[i].splice(lastColSpan, 1, textContent)
      }

      lastColSpan += colSpan
    }
  }
}

function buildColids({ $table, colids, columnWidthMethod, datas, ths, ws }) {
  const getColWidth = (column, level) => {
    if (column.children) {
      for (let i = 0; i < column.children.length; i++) {
        getColWidth(column.children[i], level + 1)
      }
    } else {
      const colid = column.id

      for (let i = 0; i < ths.length; i++) {
        if (ths[i].dataset.colid === colid) {
          colids.push(colid)

          const thRect = ths[i].getBoundingClientRect()
          let columnWidth = Math.round(thRect.width)

          columnWidth = columnWidthMethod
            ? columnWidthMethod({
              columnIndex: colids.length - 1,
              width: columnWidth
            })
            : columnWidth
          ws['!cols'].push({ wch: Math.round(columnWidth / 10) })
          datas[level].splice(colids.length - 1, 1, typeof column.title === 'string' ? column.title : ths[i].textContent)

          break
        }
      }
    }
  }
  const collectColumn = $table.collectColumn

  for (let i = 0; i < collectColumn.length; i++) {
    getColWidth(collectColumn[i], 0)
  }
}

function buildHeader({ $table, colids, datas, headerRowCount, headerTrs, opts, ws }) {
  if (headerRowCount === 0) {
    return
  }

  const rowHeightMethod = opts.table.rowHeightMethod
  const columnWidthMethod = opts.table.columnWidthMethod
  const ths = []

  initHeaderDatas({ datas, headerRowCount, headerTrs })

  buildHeaderMerges({ datas, headerTrs, rowHeightMethod, ths, ws })

  buildColids({ $table, colids, columnWidthMethod, datas, ths, ws })
}

function updateRowsDatas({ childNodes, colids, datas, i, offset, rowHeight, rowHeightMethod, ws }) {
  rowHeight = rowHeightMethod ? rowHeightMethod({ rowIndex: i + offset, height: rowHeight }) : rowHeight
  ws['!rows'].push({ hpx: adjustHeight(rowHeight) })
  datas.push([])

  for (let j = 0; j < colids.length; j++) {
    let rowTd = null
    let textContent = ''

    for (let k = 0; k < childNodes.length; k++) {
      if (childNodes[k].dataset.colid === colids[j]) {
        rowTd = childNodes[k]
        break
      }
    }

    if (rowTd) {
      textContent = rowTd.textContent
      rowTd = null
    }

    datas[offset + i].push(textContent)
  }
}

function updateMerges({ childNodes, colids, i, offset, ws }) {
  for (let j = 0; j < childNodes.length; j++) {
    const colSpan = childNodes[j].colSpan
    const rowSpan = childNodes[j].rowSpan
    const colid = childNodes[j].dataset.colid
    const sc = colids.indexOf(colid)
    const sr = offset + i

    if (colSpan > 1 && rowSpan > 1) {
      ws['!merges'].push({
        s: { r: sr, c: sc },
        e: { r: sr + rowSpan - 1, c: sc + colSpan - 1 }
      })
    } else if (colSpan > 1) {
      ws['!merges'].push({
        s: { r: sr, c: sc },
        e: { r: sr, c: sc + colSpan - 1 }
      })
    } else if (rowSpan > 1) {
      ws['!merges'].push({
        s: { r: sr, c: sc },
        e: { r: sr + rowSpan - 1, c: sc }
      })
    }
  }
}

function buildBody({ bodyRowCount, bodyTrs, colids, datas, headerRowCount, opts, ws }) {
  if (bodyRowCount === 0) {
    return
  }

  const rowHeightMethod = opts.table.rowHeightMethod
  const offset = headerRowCount

  for (let i = 0; i < bodyTrs.length; i++) {
    const bodyTrRect = bodyTrs[i].getBoundingClientRect()
    const childNodes = bodyTrs[i].childNodes
    let rowHeight = Math.round(bodyTrRect.height)

    updateRowsDatas({
      colids,
      childNodes,
      i,
      datas,
      rowHeight,
      rowHeightMethod,
      offset,
      ws
    })

    updateMerges({ childNodes, colids, i, offset, ws })
  }
}

function genExcelColNames() {
  const excelColNames = []
  const f = funcFromCodePoint

  for (let i = -1; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      excelColNames.push((i === -1 ? '' : f(65 + i)) + f(65 + j))
    }
  }

  return excelColNames
}

function buildRef({ colids, datas, excelColNames, ws }) {
  // fullref
  let fullref = ''

  if (colids.length > 0 && datas.length > 0) {
    fullref = 'A1:' + excelColNames[colids.length - 1] + datas.length
  }

  ws['!fullref'] = fullref
  ws['!ref'] = fullref
}

function updateCellStyle({ bodyRowCount, bodyTrBgcArr, footerTrBgc, headerRowCount, headerWrapperBgc, rowIndex, showBorder, style }) {
  style.font = { name: 'Microsoft YaHei', sz: 12, color: { rgb: '000000' } }

  if (rowIndex < headerRowCount) {
    style.fill = { fgColor: { rgb: headerWrapperBgc } }

    style.font.bold = true
  } else if (rowIndex < headerRowCount + bodyRowCount) {
    style.fill = { fgColor: { rgb: bodyTrBgcArr[rowIndex - headerRowCount] } }
  } else {
    style.fill = { fgColor: { rgb: footerTrBgc } }
  }

  if (showBorder) {
    style.border = {
      top: { style: 'thin', color: { rgb: '000000' } },
      bottom: { style: 'thin', color: { rgb: '000000' } },
      left: { style: 'thin', color: { rgb: '000000' } },
      right: { style: 'thin', color: { rgb: '000000' } }
    }
  }

  style.alignment = { vertical: 'center', horizontal: 'left', wrapText: false }
}

function buildDatas({ showBorder, bodyRowCount, bodyTrBgcArr, headerRowCount, colids, datas, footerTrBgc, headerWrapperBgc, excelColNames, opts, $table, ws }) {
  if (datas.length === 0) {
    return
  }

  const styleMethod = opts.table.styleMethod
  const formatMethod = opts.table.formatMethod
  const fullColumn = $table.getTableColumn().fullColumn
  const isIndexColData = (i, j, indexColIndex, headerRowCount, bodyRowCount) => indexColIndex === j && i >= headerRowCount && i < headerRowCount + bodyRowCount
  let indexColIndex

  for (let i = 0; i < fullColumn.length; i++) {
    if (fullColumn[i].type === 'index') {
      indexColIndex = colids.indexOf(fullColumn[i].id)
      break
    }
  }

  for (let i = 0; i < datas.length; i++) {
    for (let j = 0; j < datas[i].length; j++) {
      let type = isIndexColData(i, j, indexColIndex, headerRowCount, bodyRowCount) ? 'n' : 's'
      let value = isIndexColData(i, j, indexColIndex, headerRowCount, bodyRowCount) ? parseInt(datas[i][j]) : datas[i][j].trim()
      let style = {}

      updateCellStyle({ bodyRowCount, bodyTrBgcArr, columnIndex: j, footerTrBgc, headerRowCount, headerWrapperBgc, rowIndex: i, showBorder, style })

      if (styleMethod) {
        style = styleMethod({ rowIndex: i, columnIndex: j, style })
      }

      if (formatMethod) {
        const ret = formatMethod({ rowIndex: i, columnIndex: j, value, type })
        type = ret.type
        value = ret.value
      }

      ws[excelColNames[j] + (i + 1)] = { t: type, v: value, s: style }
    }
  }
}

function buildWb({ XLSXX, opts, ws }) {
  ws = ws['!cols'].length === 0 || ws['!rows'].length === 0 ? {} : ws

  const sheetName = opts.table.sheetName
  const merges = ws['!merges']

  if (merges) {
    const mergesMethod = opts.table.mergesMethod
    ws['!merges'] = mergesMethod ? mergesMethod(merges) : merges
  }

  const wb = {
    Props: {
      Application: 'SheetJS',
      SheetNames: [sheetName],
      Worksheets: 1
    },
    SSF: XLSXX.SSF.get_table(),
    SheetNames: [sheetName],
    Sheets: {
      [sheetName]: ws
    }
  }

  return wb
}

function computeBodyTrBgcArr(bodyTrs, isStripe) {
  const arr = []

  for (let i = 0; i < bodyTrs.length; i++) {
    arr.push(isStripe ? getBgc(bodyTrs[i]) : 'ffffff')
  }

  return arr
}

function queryDom($table) {
  const headerTrs = $table.$el.querySelectorAll('.tiny-grid__header-wrapper.body__wrapper .tiny-grid-header__row')
  const bodyTrs = $table.$el.querySelectorAll('.tiny-grid__body-wrapper.body__wrapper .tiny-grid-body__row:not(.group)')
  const footerTrs = $table.$el.querySelectorAll('.tiny-grid__footer-wrapper.body__wrapper .tiny-grid-footer__row')
  const headerWrapper = $table.$el.querySelector('.tiny-grid__header-wrapper.body__wrapper')

  return { bodyTrs, footerTrs, headerTrs, headerWrapper }
}

function getTableAttr($table, headerWrapper, bodyTrs) {
  const showBorder = ~$table.$el.className.split(/\s/).indexOf('tiny-grid__border')
  const isStripe = ~$table.$el.className.split(/\s/).indexOf('tiny-grid__stripe')
  const headerWrapperBgc = headerWrapper ? getBgc(headerWrapper) : 'ffffff'
  const bodyTrBgcArr = computeBodyTrBgcArr(bodyTrs, isStripe)
  const footerTrBgc = 'ffffff'

  return { showBorder, headerWrapperBgc, bodyTrBgcArr, footerTrBgc }
}

function buildColidsByVisibleColumn({ $table, bodyRowCount, bodyTrs, colids, opts, ws }) {
  if (colids.length > 0 || bodyRowCount === 0) {
    return
  }

  const columnWidthMethod = opts.table.columnWidthMethod
  const tds = []

  for (let i = 0; i < bodyTrs.length; i++) {
    for (let j = 0; j < bodyTrs[i].childNodes.length; j++) {
      tds.push(bodyTrs[i].childNodes[j])
    }
  }

  for (let i = 0; i < $table.visibleColumn.length; i++) {
    let colid = $table.visibleColumn[i].id

    for (let j = 0; j < tds.length; j++) {
      if (tds[j].dataset.colid === colid) {
        colids.push(colid)

        const tdRect = tds[j].getBoundingClientRect()
        const colSpan = tds[j].colSpan
        let columnWidth = Math.round(tdRect.width / colSpan)

        columnWidth = columnWidthMethod
          ? columnWidthMethod({
            columnIndex: colids.length - 1,
            width: columnWidth
          })
          : columnWidth
        ws['!cols'].push({ wch: Math.round(columnWidth / 10) })

        break
      }
    }
  }
}

function buildFooter({ bodyRowCount, colids, datas, footerRowCount, footerTrs, headerRowCount, opts, ws }) {
  if (footerRowCount === 0) {
    return
  }

  const rowHeightMethod = opts.table.rowHeightMethod
  const offset = headerRowCount + bodyRowCount

  for (let i = 0; i < footerTrs.length; i++) {
    const footerTrRect = footerTrs[i].getBoundingClientRect()
    const childNodes = footerTrs[i].childNodes
    let rowHeight = Math.round(footerTrRect.height)

    updateRowsDatas({
      childNodes,
      colids,
      datas,
      i,
      offset,
      rowHeight,
      rowHeightMethod,
      ws
    })

    updateMerges({ childNodes, colids, i, offset, ws })
  }
}

function createExcelFromDom($table, opts) {
  const { XLSXX } = opts.plugins
  const { bodyTrs, footerTrs, headerTrs, headerWrapper } = queryDom($table)
  const { showBorder, headerWrapperBgc, bodyTrBgcArr, footerTrBgc } = getTableAttr($table, headerWrapper, bodyTrs)
  const headerRowCount = headerTrs.length
  const bodyRowCount = bodyTrs.length
  const footerRowCount = footerTrs.length
  const ws = {}
  const datas = []
  const colids = []
  const excelColNames = genExcelColNames()

  ws['!rows'] = []
  ws['!cols'] = []
  ws['!merges'] = []

  buildHeader({ $table, colids, datas, headerRowCount, headerTrs, opts, ws })

  buildColidsByVisibleColumn({ $table, bodyRowCount, bodyTrs, colids, opts, ws })

  buildBody({ bodyRowCount, bodyTrs, colids, datas, headerRowCount, opts, ws })

  buildFooter({ bodyRowCount, colids, datas, footerRowCount, footerTrs, headerRowCount, opts, ws })

  buildRef({ colids, datas, excelColNames, ws })

  buildDatas({ $table, bodyRowCount, bodyTrBgcArr, colids, datas, excelColNames, footerTrBgc, headerRowCount, headerWrapperBgc, opts, showBorder, ws })

  return buildWb({ XLSXX, opts, ws })
}

export function exportExcel($table, options) {
  const opts = extend(true, {}, options)

  opts.plugins = opts.plugins || {}

  if (!opts.plugins.XLSX || !opts.plugins.XLSXX || !opts.plugins.FileSaver) {
    return
  }

  opts.table = opts.table || {}

  opts.table.sheetName = opts.table.sheetName || defaultOptions.table.sheetName
  opts.table.formatMethod = opts.table.formatMethod || defaultOptions.table.formatMethod
  opts.table.styleMethod = opts.table.styleMethod || defaultOptions.table.styleMethod
  opts.table.rowHeightMethod = opts.table.rowHeightMethod || defaultOptions.table.rowHeightMethod
  opts.table.columnWidthMethod = opts.table.columnWidthMethod || defaultOptions.table.columnWidthMethod
  opts.table.mergesMethod = opts.table.mergesMethod || defaultOptions.table.mergesMethod

  const wb = createExcelFromDom($table, opts)

  const { XLSXX, FileSaver } = opts.plugins
  const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' }
  const wbout = XLSXX.write(wb, wopts)

  FileSaver.saveAs(new Blob([s2ab(wbout)], { type: '' }), opts.table.sheetName + '.xlsx')
}
