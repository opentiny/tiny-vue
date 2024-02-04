<template>
  <transition name="tiny-zoom-in-top" @after-enter="handleEnter" @after-leave="handleLeave">
    <div
      v-show="state.visible"
      data-tag="tiny-picker-panel tiny-date-picker tiny-popper"
      :class="[gcls('picker-panel'), state.popperClass]"
    >
      <div data-tag="tiny-picker-panel__body-wrapper" :class="gcls('picker-panel-body')">
        <slot name="sidebar" data-tag="tiny-picker-panel__sidebar"></slot>
        <div data-tag="tiny-picker-panel__sidebar" v-if="state.shortcuts">
          <button
            type="button"
            data-tag="tiny-picker-panel__shortcut"
            v-for="(shortcut, key) in state.shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)"
          >
            {{ shortcut.text }}
          </button>
        </div>
        <div data-tag="tiny-picker-panel__body" :class="gcls('picker-panel-body')">
          <div v-if="state.showTime" data-tag="tiny-date-picker__time-header" :class="gcls('time-header')">
            <span data-tag="tiny-date-picker__editor-wrap" :class="gcls('editor-wrap')">
              <tiny-input
                :placeholder="t('ui.datepicker.selectDate')"
                :model-value="state.visibleDate"
                size="small"
                @update:modelValue="(val) => (state.userInputDate = val)"
                @change="handleVisibleDateChange"
              />
            </span>
            <span
              v-clickoutside="handleTimePickClose"
              data-tag="tiny-date-picker__editor-wrap"
              :class="gcls('editor-wrap')"
            >
              <tiny-input
                ref="input"
                @focus="state.timePickerVisible = true"
                :placeholder="t('ui.datepicker.selectTime')"
                :model-value="state.visibleTime"
                size="small"
                @update:modelValue="(val) => (state.userInputTime = val)"
                @change="handleVisibleTimeChange"
              />
              <time-picker
                ref="timepicker"
                :step="step"
                :time-arrow-control="state.arrowControl"
                :show="state.timePickerVisible"
                v-if="state.timePickerVisible"
                :value="state.date"
                @pick="handleTimePick"
              >
              </time-picker>
            </span>
          </div>
          <div
            data-tag="tiny-date-picker__header"
            :class="[
              gcls('header'),
              ['month', 'year', 'years', 'yearrange'].includes(state.currentView) && gcls('bordered')
            ]"
            v-show="state.currentView !== 'time'"
          >
            <button
              type="button"
              @click="cusPrevMonth"
              v-show="state.currentView === 'date'"
              :aria-label="t(`ui.datepicker.prevMonth`)"
              data-tag="tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-arrow-left"
              :class="[gcls('icon-btn'), 'float-left']"
            >
              <icon-chevron-left></icon-chevron-left>
            </button>
            <!-- @click="showYearPicker" -->
            <span role="button" data-tag="tiny-date-picker__header-label" :class="[gcls('header-label')]">{{
              state.yearLabel
            }}</span>
            <!-- @click="showMonthPicker" -->
            <span
              v-show="state.currentView === 'date'"
              role="button"
              data-tag="tiny-date-picker__header-label"
              :class="[gcls('header-label'), { 'text-color-brand': state.currentView === 'month' }]"
              >{{ t(`ui.datepicker.month${state.month + 1}`) }}</span
            >
            <button
              type="button"
              @click="cusNextMonth"
              v-show="state.currentView === 'date'"
              :aria-label="t(`ui.datepicker.nextMonth`)"
              data-tag="tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-arrow-right"
              :class="[gcls('icon-btn'), 'float-right']"
            >
              <icon-chevron-right></icon-chevron-right>
            </button>
          </div>

          <div data-tag="tiny-picker-panel__content" :class="gcls('content')">
            <date-table
              ref="dateTable"
              v-if="state.currentView === 'date'"
              @pick="handleDatePick"
              :selection-mode="state.selectionMode"
              :first-day-of-week="state.firstDayOfWeek"
              :value="state.value"
              :default-value="state.defaultValue ? new Date(state.defaultValue) : null"
              :date="state.date"
              :cell-class-name="state.cellClassName"
              :disabled-date="state.disabledDate"
              :show-week-number="showWeekNumber"
              :format-weeks="formatWeeks"
            >
            </date-table>
            <year-table
              ref="yearTable"
              v-if="['year', 'years', 'yearrange'].includes(state.currentView)"
              :value="state.value"
              :default-value="state.defaultValue ? new Date(state.defaultValue) : null"
              :date="state.date"
              :disabled-date="state.disabledDate"
              :selection-mode="state.selectionMode"
              :start-year="state.startYear"
              @pick="handleYearPick"
            >
            </year-table>
            <month-table
              ref="monthTable"
              v-if="state.currentView === 'month'"
              @pick="handleMonthPick"
              :value="state.value"
              :default-value="state.defaultValue ? new Date(state.defaultValue) : null"
              :date="state.date"
              :disabled-date="state.disabledDate"
            >
            </month-table>
          </div>
        </div>
      </div>

      <div
        data-tag="tiny-picker-panel__timezone"
        v-if="state.isShowTz || state.timezone.isServiceTimezone"
        v-clickoutside="handleTzPickClose"
      >
        <tiny-input
          v-model="state.tz"
          :disabled="state.timezone.isServiceTimezone"
          @update:modelValue="searchTz"
          :placeholder="t('ui.datepicker.timezone')"
        >
          <template #suffix>
            <component fill="#ccc" :is="state.showpopup ? 'IconChevronDown' : 'IconChevronUp'" @click="toggleTz" />
          </template>
        </tiny-input>
        <div data-tag="tiny-picker-panel__tzlist">
          <tiny-popup v-model="state.showpopup" :overlay="false" position="up" :duration="0.2" :closeable="false">
            <div data-tag="tzlist">
              <ul>
                <li
                  data-tag="tiny-picker-panel__tzlist-li"
                  :title="tz.name"
                  v-show="!tz.visible"
                  v-for="(tz, index) in state.renderTzdata"
                  :key="index"
                  @click="selectTz(tz)"
                >
                  {{ tz.name }}
                </li>
              </ul>
            </div>
          </tiny-popup>
        </div>
      </div>

      <div data-tag="tiny-picker-panel__footer" :class="gcls('footer')" v-show="state.isShowFooter">
        <tiny-button
          size="mini"
          type="text"
          data-tag="tiny-picker-panel__link-btn"
          :class="gcls('link-btn')"
          @click="changeToNow"
          v-show="!['dates', 'years'].includes(state.selectionMode)"
        >
          {{ t('ui.datepicker.now') }}
        </tiny-button>
        <tiny-button
          type="primary"
          size="mini"
          data-tag="tiny-picker-panel__link-btn"
          :class="['float-right', gcls('link-btn')]"
          @click="confirm"
        >
          {{ t('ui.datepicker.confirm') }}
        </tiny-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/date-panel/vue'
import { setup, directive, props, defineComponent } from '@opentiny/vue-common'
import { language } from '@opentiny/vue-locale'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import TimePicker from '@opentiny/vue-time'
import DateTable from '@opentiny/vue-date-table'
import YearTable from '@opentiny/vue-year-table'
import MonthTable from '@opentiny/vue-month-table'
import Input from '@opentiny/vue-input'
import Button from '@opentiny/vue-button'
import {
  IconDoubleRight,
  IconDoubleLeft,
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
  IconChevronUp
} from '@opentiny/vue-icon'
import Popup from '@opentiny/vue-popup'
import { classes } from './token'

export default defineComponent({
  directives: directive({ Clickoutside }),
  components: {
    TimePicker,
    YearTable,
    MonthTable,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    TinyPopup: Popup,
    IconDoubleRight: IconDoubleRight(),
    IconDoubleLeft: IconDoubleLeft(),
    IconChevronLeft: IconChevronLeft(),
    IconChevronRight: IconChevronRight(),
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp()
  },
  props: {
    ...props,
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
    formatWeeks: Function
  },
  emits: ['pick', 'select-change', 'dodestroy'],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      classes,
      extendOptions: { language }
    })
  }
})
</script>
