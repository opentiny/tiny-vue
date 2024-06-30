<template>
  <div data-tag="tiny-calendar-view" class="w-full h-auto">
    <tiny-tooltip
      ref="tooltip"
      v-model="state.eventTipVisible"
      popper-class="absolute max-w-[theme(spacing.80)]"
      :manual="true"
      effect="light"
      placement="right"
    >
      <template #content>
        <div class="p-2">
          <div class="px-1.5 mb-1.5 border-l-2 border-color-brand">{{ state.eventTipContent.title }}</div>
          <div class="mb-1.5 px-2 text-color-text-placeholder">
            {{ state.eventTipContent.startDay }} {{ state.eventTipContent.startTime }} ~
            {{ state.eventTipContent.endDay }} {{ state.eventTipContent.endTime }}
          </div>
          <p class="px-2 text-color-icon-primary">{{ state.eventTipContent.content || '' }}</p>
        </div>
      </template>
    </tiny-tooltip>
    <div data-tag="tiny-calendar-view-today" class="flex justify-around items-center mb-3">
      <tiny-button @click="toToday">{{ t('ui.calendarView.backToday') }}</tiny-button>
      <tiny-date-picker
        v-model="state.currentDate"
        class="ml-5 shrink-0"
        shape="filter"
        type="month"
        :clearable="false"
        @change="currentDateChange"
        :format="t('ui.calendarView.dateFormat')"
      ></tiny-date-picker>
      <div class="flex-1 mx-5" data-tag="tiny-calendar-view-tool">
        <slot name="tool"></slot>
      </div>
      <tiny-slider-button-group v-if="modes.length" v-model="state.mode" type="icon" class="shrink-0">
        <tiny-slider-button v-for="mode in modes" :key="mode" :label="mode">
          <component :is="state.modesIcon[mode]" />
        </tiny-slider-button>
      </tiny-slider-button-group>
    </div>
    <div data-tag="tiny-calendar-view-monthbox" v-if="state.mode === 'month'" class="shadow-sm">
      <div data-tag="tiny-calendar-view-month" class="flex relative justify-around h-10 shadow-sm">
        <div
          data-tag="tiny-calendar-view-prevmonth"
          class="absolute left-3 top-2.5 cursor-pointer"
          @click="goPrevMonth"
        >
          <icon-chevron-left></icon-chevron-left>
        </div>
        <ul data-tag="tiny-calendar-view-monthlist" class="flex justify-around flex-1 h-full">
          <li data-tag="tiny-calendar-view-monthitem" v-for="day in state.weekDays" :key="day" class="leading-10">
            <span class="text-sm text-color-text-primary">{{ t(`ui.calendarView.weekDays.${day}`) }}</span>
          </li>
        </ul>
        <div
          data-tag="tiny-calendar-view-nextmonth"
          class="absolute right-3 top-2.5 cursor-pointer"
          @click="goNextMonth"
        >
          <icon-chevron-right></icon-chevron-right>
        </div>
      </div>
      <div data-tag="tiny-calendar-view-calendarbox" class="w-full overflow-hidden">
        <div class="w-full mt-0.5">
          <ul
            data-tag="tiny-calendar-view-calendarlist"
            v-for="(item, index) of state.calendar"
            :key="index"
            class="w-full flex justify-around border-b border-color-bg-2"
          >
            <li
              data-tag="tiny-calendar-view-calendaritem"
              v-for="(day, i) of item"
              :key="i"
              @click="selectDay(day)"
              :style="{ 'width': '14.2857%' }"
              class="py-0.5 relative h-20 overflow-hidden border-r border-color-bg-2"
              :class="
                m(
                  i === 0 || i === 6 ? 'bg-color-bg-6' : 'bg-color-bg-1',
                  day.isLast || day.isNext || day.disabled
                    ? ''
                    : isSelectedDate(day)
                      ? 'bg-color-brand-hover-subtle hover:bg-color-brand-hover-subtle'
                      : 'hover:bg-color-brand-hover-subtler',
                  gcls('bg-' + getDayBgColor(day))
                )
              "
            >
              <div
                data-tag="tiny-calendar-view-multiselect"
                v-if="multiSelect && isSelectedDate(day)"
                class="absolute top-0 right-0 bg-color-brand h-4 w-4 overflow-hidden rounded-bl-lg"
              >
                <icon-checked-sur class="fill-color-brand relative -right-px -top-0.5"></icon-checked-sur>
              </div>
              <div
                data-tag="tiny-calendar-view-daytag"
                class="py-1.5 pl-2"
                :class="
                  m(
                    day.isLast || day.isNext
                      ? 'text-color-text-primary opacity-30'
                      : isToday(day) || isSelectedDate(day)
                        ? 'text-color-brand'
                        : 'text-color-text-primary',
                    day.disabled ? 'text-color-none-hover' : ''
                  )
                "
              >
                {{ isToday(day) ? t('ui.datepicker.today') : day.value }}
              </div>
              <div
                data-tag="tiny-calendar-view-timebox"
                class="overflow-y-auto scrollbar-size-0 w-full"
                style="max-height: calc(100% - 26px)"
              >
                <div
                  v-for="(event, idx) of getEventByTime(day, _constants.DAY_START_TIME, _constants.DAY_END_TIME)"
                  :key="idx"
                  @mouseenter="handleMouseenter($event, event)"
                  @mouseleave="handleMouseleave($event, event)"
                  class="mb-0.5"
                >
                  <div
                    v-if="
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    "
                    class="pl-0.5"
                    :class="[event.dayNumber > 1 ? 'pr-0' : 'pr-0.5']"
                  >
                    <span
                      data-tag="tiny-calendar-view-time"
                      class="px-1.5 inline-block rounded-sm leading-5 line-clamp-1"
                      :class="[gcls('theme-' + event.theme)]"
                    >
                      {{ event.title }}
                    </span>
                  </div>
                  <div
                    data-tag="tiny-calendar-view-theme"
                    v-else
                    class="h-5 leading-5"
                    :class="[
                      isStartOrEndDay('end', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                        ? 'mr-0.5'
                        : 'mr-0',
                      gcls('bg-' + event.theme)
                    ]"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div data-tag="tiny-calendar-view-not-month" v-else class="shadow-sm">
      <div class="flex justify-around items-center h-10 shadow-sm">
        <div class="w-7 shrink-0 text-right cursor-pointer" data-tag="tiny-calendar-view-prevweek" @click="getPrevWeek">
          <icon-chevron-left></icon-chevron-left>
        </div>
        <ul data-tag="tiny-calendar-view-weekdates" class="flex justify-around flex-1 h-full">
          <li
            data-tag="tiny-calendar-view-weekitem"
            v-for="(date, index) in state.weekDates"
            :key="date.value"
            class="leading-10"
          >
            <slot
              name="header"
              :slot-scope="{
                date: date.value,
                weekDay: t(`ui.calendarView.weekDays.${index}`)
              }"
            >
              <span
                class="relative mr-2.5 text-base"
                :class="[dateIsToday(date.value) ? 'text-color-brand' : 'text-color-text-primary']"
              >
                <span>{{ date.value.split('-')[2] }}</span>
                <span
                  v-if="isShowMark(date.value)"
                  class="w-1.5 h-1.5 absolute -bottom-2 rounded-full"
                  :class="[date.value.split('-')[2] > 9 ? 'left-2' : 'left-0.5', gcls(`mark-${markColor}`)]"
                ></span>
              </span>
              <span
                class="text-sm"
                :class="[dateIsToday(date.value) ? 'text-color-brand' : 'text-color-text-placeholder']"
                >{{ dateIsToday(date.value) ? t('ui.datepicker.today') : t(`ui.calendarView.weekDays.${index}`) }}</span
              >
            </slot>
          </li>
        </ul>
        <div data-tag="tiny-calendar-view-nextvweek" class="w-7 shrink-0 text-left cursor-pointer" @click="getNextWeek">
          <icon-chevron-right></icon-chevron-right>
        </div>
      </div>
      <div
        data-tag="tiny-calendar-view-timeline"
        v-if="state.mode === 'timeline'"
        class="w-full h-112 flex overflow-y-auto mt-1"
        :style="{ 'height': height }"
      >
        <div class="w-12" data-tag="tiny-calendar-view-timelinelist">
          <ul>
            <li
              data-tag="tiny-calendar-view-timelineitem"
              v-for="(item, i) in state.dayTimes"
              :key="item.time"
              class="h-5 text-center border-b"
              :class="[i % 2 === 1 ? 'border-color-bg-2' : 'border-color-bg-1']"
            >
              <span class="text-sm text-color-text-primary">{{ item.text.includes('30') ? '' : item.text }}</span>
            </li>
          </ul>
        </div>
        <div class="flex-1" data-tag="tiny-calendar-view-timelinelist">
          <ul class="w-full flex justify-around">
            <li
              data-tag="tiny-calendar-view-timelineitem"
              v-for="(date, index) in state.weekDates"
              :key="date.value"
              class="relative"
              style="width: calc((100% - 10px) / 7)"
              :class="[index === 0 || index === 6 ? 'bg-color-bg-6' : '']"
            >
              <slot
                :name="'timeline' + (index + 1)"
                :slot-scope="{
                  date: date.value,
                  events: state.curWeekEvents[date.value]
                }"
              >
                <ul>
                  <li
                    v-for="(item, i) in state.dayTimes"
                    :key="date.value + item.time"
                    class="relative h-5 p-0.5 list-none border-b border-color-bg-2"
                    :class="[i % 2 === 0 ? 'border-dashed' : 'border-solid']"
                  >
                    <div
                      v-for="(event, idx) of getEventByTime(
                        date.value,
                        item.time,
                        state.dayTimes[i + 1] && state.dayTimes[i + 1].time
                      )"
                      :key="idx"
                      class="w-11/12 flex items-center px-1.5 absolute top-0 left-0 z-10 leading-normal rounded-sm"
                      :class="[gcls(`theme-${event.theme || blue}`)]"
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
      <div
        data-tag="tiny-calendar-view-schedule"
        v-if="state.mode === 'schedule'"
        class="w-full px-6 pb-4 overflow-y-auto h-112"
        :style="{ 'height': height }"
      >
        <ul class="flex w-full" data-tag="tiny-calendar-view-schedulelist">
          <li
            data-tag="tiny-calendar-view-scheduleitem"
            v-for="(date, index) in state.weekDates"
            :key="date.value"
            class="h-full py-3 px-2"
            style="width: 14.28%"
          >
            <slot
              :name="'weekday' + (index + 1)"
              :slot-scope="{
                date: date.value,
                events: state.curWeekEvents[date.value]
              }"
            >
              <div
                data-tag="tiny-calendar-view-curWeek"
                v-for="(event, idx) of state.curWeekEvents[date.value] || []"
                :key="idx"
                class="py-1.5 h-auto border border-color-border-separator rounded mb-2 shadow-sm"
              >
                <div class="px-1.5 mb-1.5 border-l-2 border-color-brand">{{ event.title }}</div>
                <div class="mb-1.5 px-2 text-color-text-placeholder">
                  {{ getEventShowTime('start', event, date.value) }} - {{ getEventShowTime('end', event, date.value) }}
                </div>
                <p class="px-2 text-color-icon-primary line-clamp-2">{{ event.content || '' }}</p>
              </div>
            </slot>
            <div
              data-tag="tiny-calendar-view-newschedule"
              v-if="isShowNewSchedule(date.value)"
              class="h-8 text-center leading-8 w-full mt-2 border border-color-border-separator rounded cursor-pointer"
              @click="newSchedule(date.value)"
            >
              <icon-plus class="align-sub fill-color-text-placeholder"></icon-plus>
              <span class="ml-1 text-color-text-placeholder">{{ t('ui.calendarView.new') }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/calendar-view/vue'
import { props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import DatePicker from '@opentiny/vue-date-picker'
import SliderButton from '@opentiny/vue-slider-button'
import SliderButtonGroup from '@opentiny/vue-slider-button-group'
import Tooltip from '@opentiny/vue-tooltip'

import {
  IconPlus,
  IconCheckedSur,
  IconChevronLeft,
  IconChevronRight,
  IconMonthView,
  IconAgendaView,
  IconDayView
} from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  name: $prefix + 'CalendarView',
  emits: [
    'update:modelValue',
    'new-schedule',
    'selected-date-change',
    'prev-week-click',
    'next-week-click',
    'week-change',
    'year-change',
    'month-change',
    'date-click',
    'mode-change'
  ],
  components: {
    TinyButton: Button,
    IconCheckedSur: IconCheckedSur(),
    IconPlus: IconPlus(),
    IconChevronLeft: IconChevronLeft(),
    IconChevronRight: IconChevronRight(),
    TinySliderButton: SliderButton,
    TinySliderButtonGroup: SliderButtonGroup,
    TinyDatePicker: DatePicker,
    TinyTooltip: Tooltip
  },
  props: [
    ...props,
    '_constants',
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
    'mark-color',
    'multi-select'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      classes,
      extendOptions: {
        modesIcon: {
          timeline: IconDayView(),
          schedule: IconAgendaView(),
          month: IconMonthView()
        }
      }
    })
  }
})
</script>
