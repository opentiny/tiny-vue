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
        <th v-for="(week, weekIdx) in state.weeks" :key="weekIdx">
          <div :class="gcls('th')">{{ t('ui.datepicker.weeks.' + week) }}</div>
        </th>
      </tr>
      <tr
        data-tag="tiny-date-table__row"
        v-for="(row, trIdx) in state.rows"
        :key="trIdx"
        :class="{ current: isWeekActive(row[1]) }"
      >
        <td v-for="(cell, tdIdx) in row" :key="tdIdx" :data-tag="getCellClasses(cell)" :class="gcls('td')">
          <div
            :class="
              m(
                gcls('cell'),
                gcls(getCssToken(cell, 'cell-')),
                { 'rounded-l': tdIdx === 0 },
                { 'rounded-r': tdIdx === 6 }
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
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { classes } from './token'

export default defineComponent({
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
})
</script>
