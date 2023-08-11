/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { isString } from '@opentiny/vue-renderless/grid/static/'
import { getCellValue } from '@opentiny/vue-renderless/grid/utils'
import { log } from '@opentiny/vue-renderless/common'
import Formatter from './formatter'
import GlobalConfig from '../config'

function getRenderType({ editor, formatConfig, formatText }) {
  let renderType = formatText || formatConfig.type

  if (!renderType && editor && editor.component === 'select') {
    renderType = 'select'
  }

  return renderType
}

function getFormatData({ $table, cacheFormat, row }) {
  let rest, formatData

  if (cacheFormat) {
    rest = $table.fullAllDataRowMap.get(row)
    formatData = rest.formatData

    if (!formatData) {
      formatData = $table.fullAllDataRowMap.get(row).formatData = {}
    }
  }

  return { rest, formatData }
}

function hasCacheValue({ async, cellValue, colid, formatData, rest }) {
  return rest && formatData[colid] && formatData[colid].value === cellValue && (!async || formatData[colid].label)
}

function notHasCacheVal({ cellLabel, cellValue, column, formatText, hasCacheVal, params, renderType, row }) {
  if (!hasCacheVal) {
    const cellText = row[GlobalConfig.constant.insertedField + column.property]
    let formatParams = { cellValue }

    if (cellText) {
      formatParams.cellLabel = cellText
    }

    cellLabel = isString(renderType)
      ? Formatter[renderType].call(column, cellValue)
      : formatText(Object.assign(formatParams, params))
  }

  return cellLabel
}

function setFormatData({ cellLabel, cellValue, colid, formatData }) {
  if (formatData) {
    formatData[colid] = { value: cellValue, label: cellLabel }
  }
}

export const getCellLabel = (row, column, params) => {
  let { formatText, editor } = column
  let { formatConfig = {} } = column.own
  let cellValue = getCellValue(row, column)
  let cellLabel = cellValue
  let renderType = getRenderType({ editor, formatConfig, formatText })

  if (params && renderType) {
    let { $table } = params
    let colid = column.id
    const { formatConfig = {} } = column.own
    const async = formatConfig.async === true
    let cacheFormat = $table && $table.fullAllDataRowMap.has(row)
    let { rest, formatData } = getFormatData({ $table, cacheFormat, row })
    // cache的值 与当前值相等 不是异步列或是异步列但有值时直接返回cache
    let hasCacheVal = hasCacheValue({
      async,
      cellValue,
      colid,
      formatData,
      rest
    })

    if (hasCacheVal) {
      return formatData[colid].label
    }

    cellLabel = notHasCacheVal({
      cellLabel,
      cellValue,
      column,
      formatText,
      hasCacheVal,
      params,
      renderType,
      row
    })
    setFormatData({ cellLabel, cellValue, colid, formatData })
  }

  return cellLabel
}

const outLog = (type) => (message) => {
  let msg = `[tiny-grid] ${GlobalConfig.i18n(message) || message}`

  log(msg, type)

  return msg
}

export const warn = outLog('warn')

export const error = outLog('error')
