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
  <transition name="tiny-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="state.visible"
      class="tiny-picker-panel tiny-date-range-picker tiny-popper"
      :class="[
        {
          'has-sidebar': slots.sidebar || state.shortcuts,
          'has-time': state.showTime
        },
        state.popperClass
      ]"
      ref="refDateRange"
    >
      <div class="tiny-picker-panel__body-wrapper">
        <slot name="sidebar" class="tiny-picker-panel__sidebar"></slot>
        <div ref="shortcut" class="tiny-picker-panel__sidebar" v-if="state.shortcuts">
          <button
            type="button"
            class="tiny-picker-panel__shortcut"
            v-for="(shortcut, key) in state.shortcuts"
            :key="key"
            :class="{
              'tiny-picker-panel__shortcut-selected':
                state.singleSelect && shortcut.type === state.shortcutType && shortcut.text === state.shortcutText
            }"
            @click="handleShortcutClick(shortcut)"
          >
            {{ shortcut.text }}
          </button>
        </div>
        <div class="tiny-picker-panel__body">
          <div class="tiny-date-range-picker__time-header" v-if="state.showTime">
            <span class="tiny-date-range-picker__editors-wrap">
              <span class="tiny-date-range-picker__time-picker-wrap">
                <tiny-input
                  size="small"
                  :disabled="state.rangeState.selecting"
                  ref="minInput"
                  :placeholder="t('ui.datepicker.startDate')"
                  class="tiny-date-range-picker__editor"
                  :modelValue="state.minVisibleDate"
                  @update:modelValue="(val) => handleDateInput(val, 'min')"
                  @change="(val) => handleDateChange(val, 'min')"
                />
              </span>
              <span class="tiny-date-range-picker__time-picker-wrap" v-clickoutside="handleMinTimeClose">
                <tiny-input
                  size="small"
                  class="tiny-date-range-picker__editor"
                  :disabled="state.rangeState.selecting"
                  :placeholder="t('ui.datepicker.startTime')"
                  :modelValue="state.minVisibleTime"
                  @focus="state.minTimePickerVisible = true"
                  @update:modelValue="(val) => handleTimeInput(val, 'min')"
                  @change="(val) => handleTimeChange(val, 'min')"
                  :readonly="!timeEditable"
                />
                <time-picker
                  ref="minTimePicker"
                  :step="step"
                  :time-arrow-control="state.arrowControl"
                  :show="state.minTimePickerVisible"
                  :value="state.minDate"
                  @pick="handleMinTimePick"
                >
                </time-picker>
              </span>
            </span>
            <span class="tiny-icon-arrow-right"></span>
            <span class="tiny-date-range-picker__editors-wrap is-right">
              <span class="tiny-date-range-picker__time-picker-wrap">
                <tiny-input
                  size="small"
                  class="tiny-date-range-picker__editor"
                  :disabled="state.rangeState.selecting"
                  :placeholder="t('ui.datepicker.endDate')"
                  :modelValue="state.maxVisibleDate"
                  :readonly="!state.minDate"
                  @update:modelValue="(val) => handleDateInput(val, 'max')"
                  @change="(val) => handleDateChange(val, 'max')"
                />
              </span>
              <span class="tiny-date-range-picker__time-picker-wrap" v-clickoutside="handleMaxTimeClose">
                <tiny-input
                  size="small"
                  class="tiny-date-range-picker__editor"
                  :disabled="state.rangeState.selecting"
                  :placeholder="t('ui.datepicker.endTime')"
                  :modelValue="state.maxVisibleTime"
                  :readonly="!state.minDate || !timeEditable"
                  @focus="state.minDate && (state.maxTimePickerVisible = true)"
                  @update:modelValue="(val) => handleTimeInput(val, 'max')"
                  @change="(val) => handleTimeChange(val, 'max')"
                />
                <time-picker
                  ref="maxTimePicker"
                  :step="step"
                  :time-arrow-control="state.arrowControl"
                  :show="state.maxTimePickerVisible"
                  :value="state.maxDate"
                  @pick="handleMaxTimePick"
                >
                </time-picker>
              </span>
            </span>
          </div>
          <div class="tiny-picker-panel__content tiny-date-range-picker__content is-left">
            <div class="tiny-date-range-picker__header">
              <button type="button" @click="leftPrevYear" class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left">
                <icon-double-left></icon-double-left>
              </button>
              <button type="button" @click="leftPrevMonth" class="tiny-picker-panel__icon-btn tiny-icon-arrow-left">
                <icon-chevron-left></icon-chevron-left>
              </button>
              <button
                type="button"
                @click="leftNextYear"
                v-if="state.unlinkPanels"
                :disabled="!state.enableYearArrow"
                :class="{ 'is-disabled': !state.enableYearArrow }"
                class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
              >
                <icon-double-right></icon-double-right>
              </button>
              <button
                type="button"
                @click="leftNextMonth"
                v-if="state.unlinkPanels"
                :disabled="!state.enableMonthArrow"
                :class="{ 'is-disabled': !state.enableMonthArrow }"
                class="tiny-picker-panel__icon-btn tiny-icon-arrow-right"
              >
                <icon-chevron-right></icon-chevron-right>
              </button>
              <div>{{ state.leftLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="state.leftDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              :cell-class-name="state.cellClassName"
              @changerange="handleChangeRange"
              :first-day-of-week="state.firstDayOfWeek"
              :show-week-number="showWeekNumber"
              :format-weeks="formatWeeks"
              @pick="handleRangePick"
            >
            </date-table>
          </div>
          <div class="tiny-picker-panel__content tiny-date-range-picker__content is-right">
            <div class="tiny-date-range-picker__header">
              <button
                type="button"
                @click="rightPrevYear"
                v-if="state.unlinkPanels"
                :disabled="!state.enableYearArrow"
                :class="{ 'is-disabled': !state.enableYearArrow }"
                class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
              >
                <icon-double-left></icon-double-left>
              </button>
              <button
                type="button"
                @click="rightPrevMonth"
                v-if="state.unlinkPanels"
                :disabled="!state.enableMonthArrow"
                :class="{ 'is-disabled': !state.enableMonthArrow }"
                class="tiny-picker-panel__icon-btn tiny-icon-arrow-left"
              >
                <icon-chevron-left></icon-chevron-left>
              </button>
              <button type="button" @click="rightNextYear" class="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right">
                <icon-double-right></icon-double-right>
              </button>
              <button type="button" @click="rightNextMonth" class="tiny-picker-panel__icon-btn tiny-icon-arrow-right">
                <icon-chevron-right></icon-chevron-right>
              </button>
              <div>{{ state.rightLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="state.rightDate"
              :default-value="state.defaultValue"
              :min-date="state.minDate"
              :max-date="state.maxDate"
              :range-state="state.rangeState"
              :disabled-date="state.disabledDate"
              :cell-class-name="state.cellClassName"
              @changerange="handleChangeRange"
              :first-day-of-week="state.firstDayOfWeek"
              :show-week-number="showWeekNumber"
              :format-weeks="formatWeeks"
              @pick="handleRangePick"
            >
            </date-table>
          </div>
        </div>
      </div>
      <div class="tiny-picker-panel__footer" v-if="state.showTime">
        <tiny-button size="mini" type="text" class="tiny-picker-panel__link-btn" @click="handleClear">
          {{ t('ui.datepicker.clear') }}
        </tiny-button>
        <tiny-button
          plain
          size="mini"
          class="tiny-picker-panel__link-btn"
          :disabled="state.btnDisabled"
          @click="handleConfirm(false)"
        >
          {{ t('ui.datepicker.confirm') }}
        </tiny-button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/date-range/vue'
import { $prefix, setup, directive, defineComponent } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import TimePicker from '@opentiny/vue-time'
import DateTable from '@opentiny/vue-date-table'
import Input from '@opentiny/vue-input'
import Button from '@opentiny/vue-button'
import { iconDoubleRight, iconDoubleLeft, iconChevronLeft, iconChevronRight } from '@opentiny/vue-icon'

const $constants = {
  startDate: new Date('1970-01-01'),
  endDate: new Date('2099-12-31')
}
export default defineComponent({
  name: $prefix + 'DateRange',
  directives: directive({ Clickoutside }),
  components: {
    TimePicker,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    IconDoubleRight: iconDoubleRight(),
    IconDoubleLeft: iconDoubleLeft(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
  },
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    emitter: Object,
    step: {
      type: Object,
      default() {
        return { hour: 1, minute: 1, second: 1 }
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    formatWeeks: Function,
    timeEditable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['dodestroy', 'pick'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
