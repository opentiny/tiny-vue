<template>
  <div class="tiny-calendar-view">
    <div class="tiny-calendar-view__header">
      <tiny-button @click="toToday">{{ t('ui.calendarView.backToday') }}</tiny-button>
      <tiny-date-picker
        v-model="state.currentDate"
        class="tiny-calendar-view__picker"
        shape="filter"
        type="month"
        :clearable="false"
        @change="currentDateChange"
        :format="t('ui.calendarView.dateFormat')"
      ></tiny-date-picker>
      <div class="tiny-calendar-view__tool">
        <slot name="tool"></slot>
      </div>
      <tiny-radio-group v-if="modes.length" v-model="state.mode" size="mini" class="tiny-calendar-view__radio">
        <tiny-radio-button v-for="mode in modes" :key="mode" :label="mode">
          <component :is="state.modesIcon[mode]" :class="state.mode === mode && 'fill-brand'" />
        </tiny-radio-button>
      </tiny-radio-group>
    </div>
    <div v-if="state.mode === 'month'" class="tiny-calendar-view-month">
      <div class="tiny-calendar-view-month__header">
        <div class="header-left" @click="goPrevMonth">
          <icon-chevron-left></icon-chevron-left>
        </div>
        <ul class="header-main">
          <li v-for="day in state.weekDays" :key="day">
            <span>{{ t(`ui.calendarView.weekDays.${day}`) }}</span>
          </li>
        </ul>
        <div class="header-right" @click="goNextMonth">
          <icon-chevron-right></icon-chevron-right>
        </div>
      </div>
      <div class="tiny-calendar-view-month__main">
        <div class="main-container">
          <ul v-for="(item, index) of state.calendar" :key="index">
            <li
              v-for="(day, i) of item"
              :key="i"
              @click="selectDay(day)"
              :style="{ 'width': '14.2857%' }"
              :class="[
                i === 0 || i === 6 ? 'is-weekends' : '',
                day.isLast || day.isNext || day.disabled ? '' : isSelectedDate(day) ? 'is-selected' : 'not-selected',
                'bg-' + getDayBgColor(day)
              ]"
            >
              <div v-if="multiSelect && isSelectedDate(day)" class="day-selected">
                <icon-checked-sur></icon-checked-sur>
              </div>
              <div
                class="date"
                :class="[
                  day.isLast || day.isNext
                    ? 'is-next-or-last'
                    : isToday(day) || isSelectedDate(day)
                      ? 'is-selected'
                      : '',
                  day.disabled ? 'is-disabled' : ''
                ]"
              >
                {{ isToday(day) ? t('ui.datepicker.today') : day.value }}
              </div>
              <div class="day-events" style="max-height: calc(100% - 26px)">
                <div
                  v-for="(event, idx) of getEventByTime(day, _constants.DAY_START_TIME, _constants.DAY_END_TIME)"
                  :key="idx"
                  @mouseenter="handleMouseenter($event, event)"
                  @mouseleave="handleMouseleave($event, event)"
                  class="events-container"
                >
                  <div
                    v-if="
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    "
                    class="events-start"
                    :class="event.dayNumber > 1 && 'multi-day'"
                  >
                    <span class="events-title" :class="event.theme ? 'theme-' + event.theme : ''">
                      {{ event.title }}
                    </span>
                  </div>
                  <div
                    v-else
                    class="events-end"
                    :class="[
                      isStartOrEndDay('end', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                        ? 'is-end'
                        : '',
                      event.theme ? 'bg-' + event.theme : ''
                    ]"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="tiny-calendar-view-week">
      <div class="tiny-calendar-view-week__header">
        <div class="header-left" @click="getPrevWeek">
          <icon-chevron-left></icon-chevron-left>
        </div>
        <ul class="header-main">
          <li v-for="(date, index) in state.weekDates" :key="date.value">
            <slot
              name="header"
              :slot-scope="{
                date: date.value,
                weekDay: t(`ui.calendarView.weekDays.${index}`)
              }"
            >
              <span class="date" :class="dateIsToday(date.value) && 'is-today'">
                <span>{{ date.value.split('-')[2] }}</span>
                <span
                  v-if="isShowMark(date.value)"
                  class="mark"
                  :class="[date.value.split('-')[2] > 9 ? 'is-two-digit' : '', markColor ? `mark-${markColor}` : '']"
                ></span>
              </span>
              <span class="week-day" :class="dateIsToday(date.value) && 'is-today'">{{
                dateIsToday(date.value) ? t('ui.datepicker.today') : t(`ui.calendarView.weekDays.${index}`)
              }}</span>
            </slot>
          </li>
        </ul>
        <div class="header-right" @click="getNextWeek">
          <icon-chevron-right></icon-chevron-right>
        </div>
      </div>
      <div v-if="state.mode === 'timeline'" class="tiny-calendar-view-week__timeline" :style="{ 'height': height }">
        <div class="day-times">
          <ul>
            <li v-for="(item, i) in state.dayTimes" :key="item.time" :class="i % 2 === 1 && 'is-odd-num'">
              <span>{{ item.text.includes('30') ? '' : item.text }}</span>
            </li>
          </ul>
        </div>
        <div class="day-events">
          <ul>
            <li
              v-for="(date, index) in state.weekDates"
              :key="date.value"
              style="width: calc((100% - 10px) / 7)"
              :class="index === 0 || index === 6 ? 'is-weekends' : ''"
            >
              <slot
                :name="'timeline' + (index + 1)"
                :slot-scope="{
                  date: date.value,
                  events: state.curWeekEvents[date.value]
                }"
              >
                <ul class="events-list">
                  <li
                    v-for="(item, i) in state.dayTimes"
                    :key="date.value + item.time"
                    :class="i % 2 === 0 && 'is-even-num'"
                  >
                    <div
                      v-for="(event, idx) of getEventByTime(
                        date.value,
                        item.time,
                        state.dayTimes[i + 1] && state.dayTimes[i + 1].time
                      )"
                      :key="idx"
                      class="events-item"
                      :class="[`theme-${event.theme || 'blue'}`]"
                      :style="{
                        'height': event.height + 'px',
                        'left': event.left + 'px',
                        'width': `calc(92% - ${event.left}px)`
                      }"
                    >
                      <span>{{ event.title }}</span>
                    </div>
                  </li>
                </ul>
              </slot>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="state.mode === 'schedule'" class="tiny-calendar-view-week__schedule" :style="{ 'height': height }">
        <ul>
          <li v-for="(date, index) in state.weekDates" :key="date.value" style="width: 14.28%">
            <slot
              :name="'weekday' + (index + 1)"
              :slot-scope="{
                date: date.value,
                events: state.curWeekEvents[date.value]
              }"
            >
              <div v-for="(event, idx) of state.curWeekEvents[date.value] || []" :key="idx" class="day-events">
                <div class="title">{{ event.title }}</div>
                <div class="date">
                  {{ getEventShowTime('start', event, date.value) }} - {{ getEventShowTime('end', event, date.value) }}
                </div>
                <p class="content">{{ event.content || '' }}</p>
              </div>
            </slot>
            <div v-if="isShowNewSchedule(date.value)" class="new-schedule" @click="newSchedule(date.value)">
              <icon-plus></icon-plus>
              <span>{{ t('ui.calendarView.new') }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <tiny-tooltip
      ref="tooltip"
      v-model="state.eventTipVisible"
      popper-class="tiny-calendar-view-tooltip"
      :manual="true"
      effect="light"
      placement="right"
    >
      <template #content>
        <div class="tooltip-main">
          <div class="title">{{ state.eventTipContent.title }}</div>
          <div class="date">
            {{ state.eventTipContent.startDay }} {{ state.eventTipContent.startTime }} ~
            {{ state.eventTipContent.endDay }} {{ state.eventTipContent.endTime }}
          </div>
          <p class="content">{{ state.eventTipContent.content || '' }}</p>
        </div>
      </template>
    </tiny-tooltip>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/calendar-view/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import DatePicker from '@opentiny/vue-date-picker'
import RadioButton from '@opentiny/vue-radio-button'
import RadioGroup from '@opentiny/vue-radio-group'
import Tooltip from '@opentiny/vue-tooltip'
import {
  iconPlus,
  iconCheckedSur,
  iconChevronLeft,
  iconChevronRight,
  iconMonthView,
  iconAgendaView,
  iconDayView
} from '@opentiny/vue-icon'

export default defineComponent({
  emits: [
    'new-schedule',
    'selected-date-change',
    'prev-week-click',
    'next-week-click',
    'week-change',
    'year-change',
    'month-change'
  ],
  components: {
    TinyButton: Button,
    IconCheckedSur: iconCheckedSur(),
    IconPlus: iconPlus(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
    TinyRadioButton: RadioButton,
    TinyRadioGroup: RadioGroup,
    TinyDatePicker: DatePicker,
    TinyTooltip: Tooltip
  },
  props: [
    ...props,
    'modelValue',
    'showMark',
    'showNewSchedule',
    'setDayBgColor',
    'disabled',
    'mode',
    'modes',
    'year',
    'month',
    'dayTimes',
    'events',
    'height',
    'markColor',
    'multiSelect'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: {
        modesIcon: {
          timeline: iconDayView(),
          schedule: iconAgendaView(),
          month: iconMonthView()
        }
      }
    })
  }
})
</script>
