<template>
  <transition
    name="tiny-zoom-in-top"
    @after-enter="handleEnter"
    @after-leave="handleLeave"
  >
    <div
      v-show="state.visible"
      class="tiny-picker-panel tiny-date-picker tiny-popper"
      :class="[
        {
          'has-sidebar': slots.sidebar || state.shortcuts,
          'has-time': state.showTime
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
          <div class="tiny-date-picker__time-header" v-if="state.showTime">
            <span class="tiny-date-picker__editor-wrap">
              <tiny-input
                :placeholder="t('ui.datepicker.selectDate')"
                :modelValue="state.visibleDate"
                size="small"
                @update:modelValue="(val) => (state.userInputDate = val)"
                @change="handleVisibleDateChange"
              />
            </span>
            <span
              class="tiny-date-picker__editor-wrap"
              v-clickoutside="handleTimePickClose"
            >
              <tiny-input
                ref="input"
                @focus="state.timePickerVisible = true"
                :placeholder="t('ui.datepicker.selectTime')"
                :modelValue="state.visibleTime"
                size="small"
                @update:modelValue="(val) => (state.userInputTime = val)"
                @change="handleVisibleTimeChange"
              />
              <time-picker
                ref="timepicker"
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
            class="tiny-date-picker__header"
            :class="{
              'tiny-date-picker__header--bordered':
                state.currentView === 'year' || state.currentView === 'month'
            }"
            v-show="state.currentView !== 'time'"
          >
            <button
              type="button"
              @click="cusPrevYear"
              :aria-label="t(`ui.datepicker.prevYear`)"
              class="tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-d-arrow-left"
            >
              <icon-double-left></icon-double-left>
            </button>
            <button
              type="button"
              @click="cusPrevMonth"
              v-show="state.currentView === 'date'"
              :aria-label="t(`ui.datepicker.prevMonth`)"
              class="tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-arrow-left"
            >
              <icon-chevron-left></icon-chevron-left>
            </button>
            <span
              @click="showYearPicker"
              role="button"
              class="tiny-date-picker__header-label"
              >{{ state.yearLabel }}</span
            >
            <span
              @click="showMonthPicker"
              v-show="state.currentView === 'date'"
              role="button"
              class="tiny-date-picker__header-label"
              :class="{ active: state.currentView === 'month' }"
              >{{ t(`ui.datepicker.month${state.month + 1}`) }}</span
            >
            <button
              type="button"
              @click="cusNextYear"
              :aria-label="t(`ui.datepicker.nextYear`)"
              class="tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-d-arrow-right"
            >
              <icon-double-right></icon-double-right>
            </button>
            <button
              type="button"
              @click="cusNextMonth"
              v-show="state.currentView === 'date'"
              :aria-label="t(`ui.datepicker.nextMonth`)"
              class="tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-arrow-right"
            >
              <icon-chevron-right></icon-chevron-right>
            </button>
          </div>

          <div class="tiny-picker-panel__content">
            <date-table
              v-show="state.currentView === 'date'"
              @pick="handleDatePick"
              :selection-mode="state.selectionMode"
              :first-day-of-week="state.firstDayOfWeek"
              :value="state.value"
              :default-value="
                state.defaultValue ? new Date(state.defaultValue) : null
              "
              :date="state.date"
              :cell-class-name="state.cellClassName"
              :disabled-date="state.disabledDate"
            >
            </date-table>
            <year-table
              v-show="state.currentView === 'year'"
              @pick="handleYearPick"
              :value="state.value"
              :default-value="
                state.defaultValue ? new Date(state.defaultValue) : null
              "
              :date="state.date"
              :disabled-date="state.disabledDate"
            >
            </year-table>
            <month-table
              v-show="state.currentView === 'month'"
              @pick="handleMonthPick"
              :value="state.value"
              :default-value="
                state.defaultValue ? new Date(state.defaultValue) : null
              "
              :date="state.date"
              :disabled-date="state.disabledDate"
            >
            </month-table>
          </div>
        </div>
      </div>

      <div
        class="tiny-picker-panel__timezone"
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
            <component
              fill="#ccc"
              :is="state.showpopup ? 'IconChevronDown' : 'IconChevronUp'"
              @click="toggleTz"
            />
          </template>
        </tiny-input>
        <div class="tiny-picker-panel__tzlist">
          <tiny-popup
            v-model="state.showpopup"
            :overlay="false"
            position="up"
            :duration="0.2"
            :closeable="false"
          >
            <div class="tzlist">
              <ul>
                <li
                  class="tiny-picker-panel__tzlist-li"
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

      <div class="tiny-picker-panel__footer" v-show="state.isShowFooter">
        <tiny-button
          size="mini"
          type="text"
          class="tiny-picker-panel__link-btn"
          @click="changeToNow"
          v-show="state.selectionMode !== 'dates'"
        >
          {{ t('ui.datepicker.now') }}
        </tiny-button>
        <tiny-button
          type="primary"
          size="mini"
          class="tiny-picker-panel__link-btn"
          @click="confirm"
        >
          {{ t('ui.datepicker.confirm') }}
        </tiny-button>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/date-panel/vue'
import { $prefix, setup, directive } from '@opentiny/vue-common'
import { language } from '@opentiny/vue-locale'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import TimePicker from '@opentiny/vue-time'
import DateTable from '@opentiny/vue-date-table'
import YearTable from '@opentiny/vue-year-table'
import MonthTable from '@opentiny/vue-month-table'
import Input from '@opentiny/vue-input'
import Button from '@opentiny/vue-button'
import {
  iconDoubleRight,
  iconDoubleLeft,
  iconChevronLeft,
  iconChevronRight,
  iconChevronDown,
  iconChevronUp
} from '@opentiny/vue-icon'
import Popup from '@opentiny/vue-popup'
import '@opentiny/vue-theme/input/index.css'

export default {
  name: $prefix + 'DatePanel',
  directives: directive({ Clickoutside }),
  components: {
    TimePicker,
    YearTable,
    MonthTable,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    TinyPopup: Popup,
    IconDoubleRight: iconDoubleRight(),
    IconDoubleLeft: iconDoubleLeft(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp()
  },
  props: {
    emitter: Object
  },
  emits: ['pick', 'select-change', 'dodestroy'],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      extendOptions: { language }
    })
  }
}
</script>
