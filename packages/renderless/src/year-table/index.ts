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

import { toDate } from '@opentiny/vue-renderless/common/date'
import { hasClass } from '@opentiny/vue-renderless/common/deps/dom'
import { range, nextDate, getDayCountOfYear } from '@opentiny/vue-renderless/common/deps/date-util'
import { arrayFindIndex, coerceTruthyValueToArray } from '@opentiny/vue-renderless/date-table'

const datesInYear = (year) => {
  const numOfDays = getDayCountOfYear(year)
  const firstDay = new Date(year, 0, 1)

  return range(numOfDays).map((n) => nextDate(firstDay, n))
}

export const getCellStyle = ({ props }) => (year) => {
  const style = {}
  const today = new Date()

  style.disabled = typeof props.disabledDate === 'function' ? datesInYear(year).every(props.disabledDate) : false

  const execDate = typeof props.value === 'object' ? props.value : toDate(props.value)

  style.current = arrayFindIndex(coerceTruthyValueToArray(execDate), (date) => date.getFullYear() === year) >= 0
  style.today = today.getFullYear() === year
  style.default = props.defaultValue && props.defaultValue.getFullYear() === year

  return style
}

export const handleYearTableClick = ({ emit }) => (event) => {
  const target = event.target

  if (target.tagName === 'A') {
    if (hasClass(target.parentNode, 'disabled')) {
      return
    }

    const year = target.textContent || target.innerText

    emit('pick', Number(year))
  }
}
