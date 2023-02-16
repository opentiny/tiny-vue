<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <table class="tiny-month-table" @mousemove="handleMouseMove" @click="handleMonthTableClick">
    <tbody>
      <tr v-for="(row, key) in state.rows" :key="key">
        <td v-for="(cell, key) in row" :class="getCellStyle(cell)" :key="key">
          <div>
            <a class="cell" v-text="t('ui.datepicker.months.' + state.months[cell.text])"></a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/month-table/vue'
import { $prefix, setup } from '@opentiny/vue-common'
import { isDate } from '@opentiny/vue-renderless/common/deps/date-util'

export default {
  name: $prefix + 'MonthTable',
  emits: ['changerange', 'pick'],
  props: {
    date: {},
    defaultValue: {
      validator: (val) => val === null || isDate(val) || (Array.isArray(val) && val.every(isDate))
    },
    disabledDate: {},
    maxDate: {},
    minDate: {},
    rangeState: {
      default: () => ({ endDate: null, selecting: false })
    },
    selectionMode: {
      default: 'month'
    },

    value: {}
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
