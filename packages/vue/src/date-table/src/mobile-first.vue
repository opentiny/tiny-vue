<template>
  <table
    cellpadding="0"
    cellspacing="0"
    data-tag="tiny-date-table"
    :class="['table-fixed w-full']"
    @mousemove="handleMouseMove"
    @click="handleClick"
  >
    <tbody>
      <tr>
        <th v-if="showWeekNumber">
          <div :class="gcls('th')">{{ t('ui.datepicker.week') }}</div>
        </th>
        <th v-for="(week, key) in state.weeks" :key="key">
          <div :class="gcls('th')">{{ t('ui.datepicker.weeks.' + week) }}</div>
        </th>
      </tr>
      <tr
        data-tag="tiny-date-table__row"
        v-for="(row, key) in state.rows"
        :key="key"
        :class="{ current: isWeekActive(row[1]) }"
      >
        <td v-for="(cell, key) in row" :key="key" :data-tag="getCellClasses(cell)" :class="gcls('td')">
          <div
            :class="
              m(
                gcls('cell'),
                gcls(getCssToken(cell, 'cell-')),
                { 'rounded-l': key === 0 },
                { 'rounded-r': key === 6 }
              )
            "
          >
            <span v-text="cell.text" :class="m(gcls('text'), gcls(getCellClasses(cell).split(' ')))"></span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/date-table/vue'
import { props, setup } from '@opentiny/vue-common'
import { classes } from './token'

export default {
  props: [
    ...props,
    'cellClassName',
    'date',
    'defaultValue',
    'disabledDate',
    'firstDayOfWeek',
    'maxDate',
    'minDate',
    'rangeState',
    'selectionMode',
    'showWeekNumber',
    'value',
    'formatWeeks'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
}
</script>
