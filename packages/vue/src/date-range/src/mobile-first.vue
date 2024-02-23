<template>
  <transition name="tiny-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="state.visible"
      data-tag="tiny-picker-panel tiny-date-range-picker tiny-popper"
      :class="
        m(
          gcls(['picker-panel', 'date-range-picker']),
          state.popperClass
        )
      "
      ref="refDateRange"
    >
      <div data-tag="tiny-picker-panel__body-wrapper" class="relative">
        <slot name="sidebar" data-tag="tiny-picker-panel__sidebar" :class="gcls('sidebar')"></slot>
        <div v-if="state.shortcuts" ref="shortcut" data-tag="tiny-picker-panel__sidebar" :class="gcls('sidebar')">
          <button
            type="button"
            data-tag="tiny-picker-panel__shortcut"
            v-for="(shortcut, key) in state.shortcuts"
            :key="key"
            :class="
              m(
                gcls('shortcut'),
                state.singleSelect &&
                  shortcut.type === state.shortcutType &&
                  shortcut.text === state.shortcutText &&
                  gcls('shortcut-selected')
              )
            "
            @click="handleShortcutClick(shortcut)"
          >
            {{ shortcut.text }}
          </button>
        </div>
        <div data-tag="tiny-picker-panel__body">
          <div v-if="state.showTime" data-tag="tiny-date-range-picker__time-header" :class="gcls('time-header')">
            <span data-tag="tiny-date-range-picker__editors-wrap" :class="gcls(['editors-wrap', 'is-left'])">
              <span
                data-tag="tiny-date-range-picker__time-picker-wrap"
                :class="gcls(['time-picker-wrap', 'time-picker-wrap-left'])"
              >
                <tiny-input
                  size="small"
                  :disabled="state.rangeState.selecting"
                  ref="minInput"
                  :placeholder="t('ui.datepicker.startDate')"
                  data-tag="tiny-date-range-picker__editor"
                  :custom-class="gcls('editor')"
                  :modelValue="state.minVisibleDate"
                  @update:modelValue="(val) => handleDateInput(val, 'min')"
                  @change="(val) => handleDateChange(val, 'min')"
                />
              </span>
              <span
                data-tag="tiny-date-range-picker__time-picker-wrap"
                v-clickoutside="handleMinTimeClose"
                :class="gcls('time-picker-wrap')"
              >
                <tiny-input
                  size="small"
                  data-tag="tiny-date-range-picker__editor"
                  :custom-class="gcls('editor')"
                  :disabled="state.rangeState.selecting"
                  :placeholder="t('ui.datepicker.startTime')"
                  :modelValue="state.minVisibleTime"
                  @focus="state.minTimePickerVisible = true"
                  @update:modelValue="(val) => handleTimeInput(val, 'min')"
                  @change="(val) => handleTimeChange(val, 'min')"
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
            <span data-tag="tiny-icon-arrow-right"></span>
            <span data-tag="tiny-date-range-picker__editors-wrap is-right" :class="gcls(['editors-wrap', 'is-right'])">
              <span
                data-tag="tiny-date-range-picker__time-picker-wrap"
                :class="gcls(['time-picker-wrap', 'time-picker-wrap-left'])"
              >
                <tiny-input
                  size="small"
                  data-tag="tiny-date-range-picker__editor"
                  :custom-class="gcls('editor')"
                  :disabled="state.rangeState.selecting"
                  :placeholder="t('ui.datepicker.endDate')"
                  :modelValue="state.maxVisibleDate"
                  :readonly="!state.minDate"
                  @update:modelValue="(val) => handleDateInput(val, 'max')"
                  @change="(val) => handleDateChange(val, 'max')"
                />
              </span>
              <span
                data-tag="tiny-date-range-picker__time-picker-wrap"
                v-clickoutside="handleMaxTimeClose"
                :class="gcls('time-picker-wrap')"
              >
                <tiny-input
                  size="small"
                  data-tag="tiny-date-range-picker__editor"
                  :custom-class="gcls('editor')"
                  :disabled="state.rangeState.selecting"
                  :placeholder="t('ui.datepicker.endTime')"
                  :modelValue="state.maxVisibleTime"
                  :readonly="!state.minDate"
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
          <div
            data-tag="tiny-picker-panel__content tiny-date-range-picker__content is-left"
            :class="gcls(['content', 'is-left'])"
          >
            <div data-tag="tiny-date-range-picker__header" :class="gcls('header')">
              <button
                type="button"
                @click="leftPrevYear"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
                :class="gcls(['icon-btn', 'arrow-left'])"
              >
                <icon-double-left></icon-double-left>
              </button>
              <button
                type="button"
                @click="leftPrevMonth"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-left"
                :class="gcls(['icon-btn', 'arrow-left'])"
              >
                <icon-chevron-left></icon-chevron-left>
              </button>
              <button
                type="button"
                @click="leftNextYear"
                v-if="state.unlinkPanels"
                :disabled="!state.enableYearArrow"
                :class="{ 'is-disabled': !state.enableYearArrow }"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
              >
                <icon-double-right></icon-double-right>
              </button>
              <button
                type="button"
                @click="leftNextMonth"
                v-if="state.unlinkPanels"
                :disabled="!state.enableMonthArrow"
                :class="{ 'is-disabled': !state.enableMonthArrow }"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-right"
              >
                <icon-chevron-right></icon-chevron-right>
              </button>
              <div class="mx-12">{{ state.leftLabel }}</div>
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
          <div
            data-tag="tiny-picker-panel__content tiny-date-range-picker__content is-right"
            :class="gcls(['content', 'is-right'])"
          >
            <div data-tag="tiny-date-range-picker__header" :class="gcls('header')">
              <button
                type="button"
                @click="rightPrevYear"
                v-if="state.unlinkPanels"
                :disabled="!state.enableYearArrow"
                :class="m(gcls(['icon-btn', 'arrow-left']), !state.enableYearArrow && gcls('is-disabled'))"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
              >
                <icon-double-left></icon-double-left>
              </button>
              <button
                v-if="state.unlinkPanels"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-left"
                type="button"
                :disabled="!state.enableMonthArrow"
                :class="m(gcls(['icon-btn', 'arrow-left']), !state.enableMonthArrow && gcls('is-disabled'))"
                @click="rightPrevMonth"
              >
                <icon-chevron-left></icon-chevron-left>
              </button>
              <button
                type="button"
                @click="rightNextYear"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
                :class="gcls(['icon-btn', 'arrow-right'])"
              >
                <icon-double-right></icon-double-right>
              </button>
              <button
                type="button"
                @click="rightNextMonth"
                data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-right"
                :class="gcls(['icon-btn', 'arrow-right'])"
              >
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
      <div data-tag="tiny-picker-panel__footer" v-if="state.showTime" :class="gcls('footer')">
        <tiny-button size="mini" type="text" data-tag="tiny-picker-panel__link-btn" @click="handleClear" custom-class="text-left pl-0">
          {{ t('ui.datepicker.clear') }}
        </tiny-button>
        <tiny-button
          type="primary"
          size="mini"
          data-tag="tiny-picker-panel__link-btn"
          custom-class="float-right"
          :disabled="state.btnDisabled"
          @click="handleConfirm(false)"
        >
          {{ t('ui.datepicker.confirm') }}
        </tiny-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/date-range/vue'
import { props, setup, directive } from '@opentiny/vue-common'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import TimePicker from '@opentiny/vue-time'
import DateTable from '@opentiny/vue-date-table'
import Input from '@opentiny/vue-input'
import Button from '@opentiny/vue-button'
import { IconDoubleRight, IconDoubleLeft, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'
import { classes } from './token'

export default {
  directives: directive({ Clickoutside }),
  components: {
    TimePicker,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    IconDoubleRight: IconDoubleRight(),
    IconDoubleLeft: IconDoubleLeft(),
    IconChevronLeft: IconChevronLeft(),
    IconChevronRight: IconChevronRight()
  },
  props: [...props, 'emitter', 'step', 'showWeekNumber', 'formatWeeks'],
  emits: ['dodestroy', 'pick'],
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
}
</script>
