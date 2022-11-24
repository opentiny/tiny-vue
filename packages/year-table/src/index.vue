<template>
  <table @click="handleYearTableClick" class="tiny-year-table">
    <tbody>
      <tr>
        <td class="available" :class="getCellStyle(state.startYear + 0)">
          <a class="cell">{{ state.startYear }}</a>
        </td>
        <td class="available" :class="getCellStyle(state.startYear + 1)">
          <a class="cell">{{ state.startYear + 1 }}</a>
        </td>
        <td class="available" :class="getCellStyle(state.startYear + 2)">
          <a class="cell">{{ state.startYear + 2 }}</a>
        </td>
        <td class="available" :class="getCellStyle(state.startYear + 3)">
          <a class="cell">{{ state.startYear + 3 }}</a>
        </td>
      </tr>
      <tr>
        <td class="available" :class="getCellStyle(state.startYear + 4)">
          <a class="cell">{{ state.startYear + 4 }}</a>
        </td>
        <td class="available" :class="getCellStyle(state.startYear + 5)">
          <a class="cell">{{ state.startYear + 5 }}</a>
        </td>
        <td class="available" :class="getCellStyle(state.startYear + 6)">
          <a class="cell">{{ state.startYear + 6 }}</a>
        </td>
        <td class="available" :class="getCellStyle(state.startYear + 7)">
          <a class="cell">{{ state.startYear + 7 }}</a>
        </td>
      </tr>
      <tr>
        <td class="available" :class="getCellStyle(state.startYear + 8)">
          <a class="cell">{{ state.startYear + 8 }}</a>
        </td>
        <td class="available" :class="getCellStyle(state.startYear + 9)">
          <a class="cell">{{ state.startYear + 9 }}</a>
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/year-table/vue'
import { isDate } from '@opentiny/vue-renderless/common/deps/date-util'
import { $prefix, setup } from '@opentiny/vue-common'

export default {
  name: $prefix + 'YearTable',
  emits: ['pick'],
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator(val) {
        // null or valid Date Object
        return val === null || (val instanceof Date && isDate(val))
      }
    },
    date: {}
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
