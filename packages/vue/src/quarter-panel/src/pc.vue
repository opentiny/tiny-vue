<template>
  <transition name="tiny-zoom-in-top">
    <div v-show="state.visible" class="tiny-quarter-panel">
      <!-- 上一年/下一年 -->
      <div class="tiny-quarter-panel__header">
        <button
          type="button"
          @click="cusPrevYear"
          class="tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-d-arrow-left"
        >
          <icon-double-left></icon-double-left>
        </button>
        <span @click="showYearPicker" role="button" class="tiny-date-picker__header-label">{{ state.yearLabel }}</span>
        <button
          type="button"
          @click="cusNextYear"
          class="tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-d-arrow-right"
        >
          <icon-double-right></icon-double-right>
        </button>
      </div>

      <div class="tiny-quarter-panel__content">
        <table
          class="tiny-quarter-panel__table"
          v-if="state.currentView === 'quarter'"
          @click="handleQuarterTableClick"
        >
          <tbody>
            <tr>
              <td v-for="(row, key) in state.rows" :key="key">
                {{ row.text }}
              </td>
            </tr>
          </tbody>
        </table>
        <year-table
          ref="yearTable"
          v-if="state.currentView === 'year'"
          :value="state.value"
          :default-value="state.defaultValue ? new Date(state.defaultValue) : null"
          :date="state.date"
          :disabled-date="state.disabledDate"
          :selection-mode="state.selectionMode"
          :start-year="state.startYear"
          @pick="handleYearPick"
        >
        </year-table>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/quarter-panel/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import YearTable from '@opentiny/vue-year-table'
import { iconDoubleRight, iconDoubleLeft } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/quarter-panel/index.less'

export default defineComponent({
  name: $prefix + 'QuarterPanel',
  components: {
    YearTable,
    IconDoubleRight: iconDoubleRight(),
    IconDoubleLeft: iconDoubleLeft()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
