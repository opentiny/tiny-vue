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
  <table
    :class="['tiny-date-table', { 'is-week-mode': selectionMode === 'week' }]"
    cellspacing="0"
    @mousemove.stop="handleMouseMove"
    cellpadding="0"
    @click.stop="handleClick"
  >
    <tbody>
      <tr>
        <th v-if="showWeekNumber">
          {{ t('ui.datepicker.week') }}
        </th>
        <th v-for="(weekDay, key) in state.weeks" :key="key">
          {{ t(`ui.datepicker.weeks.${weekDay}`) }}
        </th>
      </tr>
      <tr
        v-for="(row, key) in state.rows"
        :class="['tiny-date-table__row', { current: isWeekActive(row[1]) }]"
        :key="key"
      >
        <td v-for="(cellValue, key) in row" :key="key" :class="getCellClasses(cellValue)">
          <div>
            <span>
              {{ cellValue.text }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/date-table/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { isDate } from '@opentiny/vue-renderless/common/deps/date-util'

export default defineComponent({
  name: $prefix + 'DateTable',
  emits: ['changerange', 'pick'],
  props: {
    value: {},
    defaultValue: {
      validator(value) {
        return value === null || isDate(value) || (Array.isArray(value) && value.every(isDate))
      }
    },
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: (value: number) => value >= 1 && value <= 7
    },
    date: {},
    selectionMode: {
      default: 'day'
    },
    disabledDate: {},
    cellClassName: {},
    maxDate: {},
    minDate: {},
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    rangeState: {
      default() {
        return {
          endDate: null,
          selecting: false
        }
      }
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
