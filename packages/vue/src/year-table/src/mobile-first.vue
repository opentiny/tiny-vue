<template>
  <table
    class="text-xs -m-px border-collapse w-full table-fixed"
    data-tag="tiny-year-table"
    @mousemove="handleMouseMove"
    @click="handleYearTableClick"
  >
    <tbody>
      <tr v-for="(row, key) in state.rows" :key="key">
        <td
          v-for="(cell, key) in row"
          class="text-center cursor-pointer py-4 px-0"
          :data-class="getCellStyle(cell)"
          :key="key"
        >
          <div
            :class="
              m(
                cell.inRange ? 'bg-color-brand-hover-subtle hover:bg-color-brand-hover-subtle' : 'h-auto p-0',
                { 'rounded-tl rounded-bl': cell.start },
                { 'rounded-tr rounded-br mr-5': cell.end }
              )
            "
          >
            <a
              :class="
                m(
                  'w-12 h-12 leading-[theme(spacing.12)] box-border block text-color-text-primary my-0 rounded hover:bg-color-brand-hover-subtle',
                  { 'border border-solid border-color-border-focus leading-[46px]': state.today },
                  { 'my-0 mx-auto': !cell.inRange },
                  { 'text-color-text-inverse bg-color-brand': cell.start },
                  { 'text-color-text-inverse bg-color-brand': cell.end },
                  {
                    'bg-color-bg-3 cursor-not-allowed text-color-text-disabled hover:text-color-text-disabled hover:bg-color-bg-3':
                      state.disabled
                  },
                  {
                    'text-color-text-inverse bg-color-brand hover:text-color-text-inverse hover:bg-color-brand':
                      state.current && !state.disabled
                  }
                )
              "
              :aria-disabled="state.disabled ? true : undefined"
              >{{ cell.text }}</a
            >
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/year-table/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['pick', 'changerange'],
  props: [
    ...props,
    'disabledDate',
    'value',
    'defaultValue',
    'date',
    'selectionMode',
    'startYear',
    'maxDate',
    'minDate',
    'rangeState'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
