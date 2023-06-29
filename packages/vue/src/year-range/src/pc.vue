<template>
  <transition name="tiny-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="state.visible"
      class="tiny-picker-panel tiny-date-range-picker tiny-popper"
      :class="[
        {
          'has-sidebar': slots.sidebar || state.shortcuts
        },
        state.popperClass
      ]"
    >
      <div class="tiny-picker-panel__body-wrapper">
        <slot name="sidebar" class="tiny-picker-panel__sidebar"></slot>
        <div class="tiny-picker-panel__sidebar" v-if="state.shortcuts">
          <button
            type="button"
            class="tiny-picker-panel__shortcut"
            v-for="(shortcut, key) in state.shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)"
          >
            {{ shortcut.text }}
          </button>
        </div>
        <div class="tiny-picker-panel__body">
          <div class="tiny-picker-panel__content tiny-date-range-picker__content is-left">
            <div class="tiny-date-range-picker__header">
              <button type="button" @click="leftPrevYear" class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left">
                <icon-double-left></icon-double-left>
              </button>
              <div>{{ state.leftLabel }}</div>
            </div>
            <year-table
              ref="leftYearTable"
              :selection-mode="state.selectionMode"
              :date="state.leftDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              :start-year="state.leftStartYear"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
            >
            </year-table>
          </div>
          <div class="tiny-picker-panel__content tiny-date-range-picker__content is-right">
            <div class="tiny-date-range-picker__header">
              <button type="button" @click="rightNextYear" class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right">
                <icon-double-right></icon-double-right>
              </button>
              <div>{{ state.rightLabel }}</div>
            </div>
            <year-table
              ref="rightRearTable"
              :selection-mode="state.selectionMode"
              :date="state.rightDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              :start-year="state.rightStartYear"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
            >
            </year-table>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/year-range/vue'
import { $prefix, setup, directive, $props } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import YearTable from '@opentiny/vue-year-table'
import { IconDoubleRight, IconDoubleLeft } from '@opentiny/vue-icon'

export default {
  name: $prefix + 'YearRange',
  directives: directive({ Clickoutside }),
  components: {
    YearTable,
    IconDoubleRight: IconDoubleRight(),
    IconDoubleLeft: IconDoubleLeft()
  },
  props: {
    ...$props,
    emitter: Object
  },
  emits: ['dodestroy', 'pick'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
