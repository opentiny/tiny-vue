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
 * integer：显示成整数。
 * number：显示成小数。
 * money：显示成钱数。
 * rate：显示成百分比的数据。
 * filesize：显示成文件大小的数据。
 * boole：显示成对号或者叉号的图标。
 * date：显示成年月日。
 * dateTime：显示成年月日时分。
 * longDateTime：显示成年月日时分秒。
 * time：显示成时分。
 * longTime：显示成时分秒。
 * yearMonth：显示成年月。
 * ellipsis：显示成省略的内容，鼠标移到该单元格上，显示完整内容的提示信息。需要同时配置 format 的 len 属性
 */

import {
  tryToCurrency,
  truncate,
  tryToInt,
  tryToDecimal,
  toFileSize,
  toRate,
  toBoolValue
} from '@opentiny/vue-renderless/common/string'
import { find } from '@opentiny/vue-renderless/grid/static/'
import { isNumber, isDate, isNull } from '@opentiny/vue-renderless/common/type'
import { toDateStr, getDateWithNewTimezone, toDate, format } from '@opentiny/vue-renderless/common/date'
import { iconClose, iconYes } from '@opentiny/vue-icon'
import { warn } from './logger'

const DateFormat = {
  FULLDATETIME: 'yyyy-MM-dd hh:mm:ss.SSS',
  LONGDATETIME: 'yyyy-MM-dd hh:mm:ss',
  DATETIME: 'yyyy-MM-dd hh:mm',
  DATE: 'yyyy-MM-dd',
  FULLTIME: 'hh:mm:ss.SSS',
  LONGTIME: 'hh:mm:ss',
  TIME: 'hh:mm',
  YEARMONTH: 'yyyy-MM'
}

const dateFormat = function (value, formatString) {
  const userFormat = { dateFormat: formatString, ...this.own.formatConfig }

  if (value) {
    // 如果源值是日期字符串
    if (typeof value === 'string') {
      // 如果提供了源值日期格式，就转换为日期对象
      if (userFormat.valueFormat) {
        value = toDate(value, userFormat.valueFormat)
      } else {
        // 如果未提供了源值日期格式，就触发警告
        warn('ui.grid.error.missingValueFormat')
        // 如果源值字符串无法被正常解析，就返回源值字符串，不进行格式化转换
        if (isNaN(Date.parse(value))) {
          return value
        }
      }
    } else if (typeof value === 'number') {
      // 如果源值是数字
      value = new Date(value)
    }
  }

  if (userFormat.isutc8) {
    if (!value) {
      return value
    }

    const currentTimezone = 0 - new Date().getTimezoneOffset() / 60
    const newDate = getDateWithNewTimezone(
      isDate(value) ? value : new Date(toDate(value)),
      currentTimezone,
      userFormat.timezone || 8
    )

    return format(newDate, userFormat.dateFormat)
  }

  return toDateStr(value, userFormat.dateFormat, userFormat.timezone)
}

export default {
  money(value) {
    const prefix = '$'
    const format = {
      fraction: 2,
      flag: `${prefix}{0}`,
      ...this.own.formatConfig
    }

    return tryToCurrency(value, format.fraction, format.flag, '')
  },
  enum(value) {
    const format = { label: 'label', value: 'value', ...this.own.formatConfig }
    const data = Array.isArray(format.data) && find(format.data, (item) => item[format.value] === value)

    return data ? data[format.label] : ''
  },
  select(cellValue) {
    let { options, optionGroups, optionProps = {}, optionGroupProps = {} } = this.editor
    const format = this.own.formatConfig

    if (isNull(cellValue) || cellValue === '') {
      return ''
    }

    let selectItem
    let labelProp = optionProps.label || 'label'
    let valueProp = optionProps.value || 'value'

    if (optionGroups) {
      let groupOptions = optionGroupProps.options || 'options'

      for (let index = 0; index < optionGroups.length; index++) {
        selectItem = find(optionGroups[index][groupOptions], (item) => item[valueProp] === cellValue)

        if (selectItem) {
          break
        }
      }

      return selectItem ? selectItem[labelProp] : null
    } else {
      if (!options && format && format.async && format.data) {
        options = format.data
      }

      selectItem = find(options, (item) => item[valueProp] === cellValue)

      return selectItem ? selectItem[labelProp] : null
    }
  },
  number(value) {
    const format = { fraction: 2, ...this.own.formatConfig }

    return tryToDecimal(value, format.fraction, false, '')
  },
  integer(value) {
    return tryToInt(value, '')
  },
  filesize(value) {
    const format = { ...this.own.formatConfig }

    return toFileSize(value, format.unit, format.currUnit)
  },
  date(value) {
    return dateFormat.call(this, value, DateFormat.DATE)
  },
  dateTime(value) {
    return dateFormat.call(this, value, DateFormat.DATETIME)
  },
  longDateTime(value) {
    return dateFormat.call(this, value, DateFormat.LONGDATETIME)
  },
  time(value) {
    return dateFormat.call(this, value, DateFormat.TIME)
  },
  longTime(value) {
    return dateFormat.call(this, value, DateFormat.LONGTIME)
  },
  yearMonth(value) {
    return dateFormat.call(this, value, DateFormat.YEARMONTH)
  },
  ellipsis(value) {
    const format = { ...this.own.formatConfig }

    return (h) =>
      h('div', { class: 'data-ellipsis' }, [h('span', { domProps: { title: value } }, truncate(value, format.len))])
  },
  /**
   * rate 渲染器的计算规则：
   * 如果配置了 max，就按照 value / max 计算样式百分比，按照 value / 1 计算显示百分比；
   * 如果未配置 max，就按照 value / total 计算样式百分比和显示百分比；
   * @param {Number} value
   * @returns Function
   */
  rate(value) {
    const format = {
      fraction: 2,
      total: 1,
      section: [30, 60, 90],
      ...this.own.formatConfig
    }
    const { rateMethod } = format
    let rate

    let formatTotal = format.total

    const getLengthRate = (value, config) => {
      let lengthRate

      if (config.max && typeof config.max === 'number' && typeof value === 'number') {
        // 如果配置了 max 那么 formatTotal 就必须是 1
        formatTotal = 1
        lengthRate = toRate(value / config.max, formatTotal, format.fraction)
      }

      return lengthRate
    }

    let lengthRate = getLengthRate(value, format)

    if (typeof rateMethod === 'function') {
      rate = rateMethod.call(this, value, Object.assign({ formatTotal }, format))
    } else {
      rate = toRate(value, formatTotal, format.fraction)
    }
    lengthRate = lengthRate || rate

    let section = format.section
    let css = ''

    if (section) {
      let rateValue = parseInt(lengthRate, 10)

      if (!isNumber(rateValue)) {
        return rate
      }
      if (rateValue === 100) {
        css = ' tiny-grid__chart-completed'
      } else {
        const cssMap = {
          0: ' tiny-grid__chart-danger',
          1: ' tiny-grid__chart-warning',
          2: ' tiny-grid__chart-normal'
        }
        Array.isArray(section) || (section = section.split(','))

        for (let i = 0; i < section.length; i++) {
          if (rateValue < section[i]) {
            css = cssMap[i]
            break
          }
        }
      }
    }

    return (h) =>
      h('div', { class: 'tiny-grid__data-rate' }, [
        h('div', {
          class: `tiny-grid__rate-chart${css}`,
          style: { width: lengthRate }
        }),
        h('span', { class: 'tiny-grid__rate-text' }, rate)
      ])
  },
  boole(value) {
    const defaultFormat = {
      trueValue: true,
      falseValue: false,
      htmlView: true,
      noFork: false
    }
    const format = Object.assign(defaultFormat, this.own.formatConfig)
    const cellValue = !isNull(format.trueValue) ? value === format.trueValue : toBoolValue(value)

    if (!format.htmlView) {
      return cellValue
    }

    if (format.noFork && !value) {
      return ''
    }

    const icon = !cellValue ? iconClose() : iconYes()

    return (h) =>
      h('div', { class: 'tiny-grid__data-boole' }, [
        h(icon, {
          class: ['tiny-svg-size', !cellValue ? 'icon-close' : 'icon-yes']
        })
      ])
  }
}
