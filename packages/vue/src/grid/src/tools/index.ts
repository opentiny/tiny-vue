import { isString } from '../utils/static/'
import { getCellValue } from '../utils/utils'
import Formatter from './formatter'
import GlobalConfig from '../config'

export { Formatter }

export { warn, error } from './logger'

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
