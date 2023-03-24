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
  <div class="tiny-calendar">
    <!-- 头部 -->
    <div class="tiny-calendar__header">
      <div v-if="showSelected && state.selectedTip" class="tiny-calendar__selected">
        {{ state.selectedTip }}
      </div>
      <slot name="tool" :slot-scope="state">
        <ul class="tiny-calendar__tool">
          <li>
            <Popover
              v-model="state.showYear"
              placement="bottom-start"
              trigger="click"
              transition="tiny-transition-zoom-in-top"
              popper-class="tiny-calendar is-popover"
              :visible-arrow="false"
            >
              <template #reference>
                <div class="tiny-calendar__input">
                  <input :value="state.activeYear + t('ui.datepicker.year')" type="text" readonly />
                  <div class="tiny-calendar__input-btn">
                    <component class="tiny-svg-size" :is="state.showYear ? 'icon-chevron-up' : 'icon-chevron-down'" />
                  </div>
                </div>
              </template>
              <template #default>
                <div class="tiny-calendar__selector">
                  <ul class="tiny-calendar__poplist">
                    <li
                      v-for="year in state.dropdownYear"
                      :key="year"
                      :class="['tiny-calendar__list-item', { 'is-selected': state.activeYear === year }]"
                      @click="
                        () => {
                          state.activeYear = year
                          state.showYear = false
                        }
                      "
                      :title="year + t('ui.datepicker.year')"
                    >
                      {{ year + t('ui.datepicker.year') }}
                    </li>
                  </ul>
                </div>
              </template>
            </Popover>
          </li>
          <li v-show="state.displayMode === 'month'">
            <Popover
              v-model="state.showMonth"
              transition="tiny-transition-zoom-in-top"
              placement="bottom-start"
              trigger="click"
              popper-class="tiny-calendar is-popover"
              :visible-arrow="false"
            >
              <template #reference>
                <div class="tiny-calendar__input">
                  <input :value="t('ui.datepicker.month' + state.activeMonth)" type="text" readonly />
                  <div class="tiny-calendar__input-btn">
                    <component class="tiny-svg-size" :is="state.showYear ? 'icon-chevron-up' : 'icon-chevron-down'" />
                  </div>
                </div>
              </template>
              <template #default>
                <div class="tiny-calendar__selector">
                  <ul class="tiny-calendar__poplist">
                    <li
                      v-for="month in 12"
                      :key="month"
                      :class="['tiny-calendar__list-item', { 'is-selected': state.activeMonth === month }]"
                      @click="
                        () => {
                          state.activeMonth = month
                          state.showMonth = false
                        }
                      "
                      :title="t('ui.datepicker.month' + month)"
                    >
                      {{ t('ui.datepicker.month' + month) }}
                    </li>
                  </ul>
                </div>
              </template>
            </Popover>
          </li>
          <li>
            <Button type="primary" @click="toToday">{{ state.displayMode === 'month' ? t('ui.datepicker.today') : t('ui.datepicker.currentMonth') }}</Button>
          </li>
          <li>
            <ul class="tiny-calendar__tabs">
              <li :class="{ active: state.displayMode === 'month' }" @click="toggeModel('month')">
                {{ t('ui.datepicker.month') }}
              </li>
              <li :class="{ active: state.displayMode === 'year' }" @click="toggeModel('year')">
                {{ t('ui.calendar.showType.year') }}
              </li>
            </ul>
          </li>
        </ul>
      </slot>
    </div>

    <div :class="['tiny-calendar__main', state.displayMode]">
      <!-- 月模式 -->
      <table v-show="state.displayMode === 'month'" style="table-layout: fixed">
        <tr>
          <th>{{ t('ui.datepicker.weeks.sun') }}</th>
          <th>{{ t('ui.datepicker.weeks.mon') }}</th>
          <th>{{ t('ui.datepicker.weeks.tue') }}</th>
          <th>{{ t('ui.datepicker.weeks.wed') }}</th>
          <th>{{ t('ui.datepicker.weeks.thu') }}</th>
          <th>{{ t('ui.datepicker.weeks.fri') }}</th>
          <th>{{ t('ui.datepicker.weeks.sat') }}</th>
        </tr>
        <tr v-for="(item, index) of state.calendar" :key="index">
          <td v-for="(day, i) of item" :key="i" @click="selectDay(day)" width="14.2857%">
            <div
              :class="[
                'tiny-calendar__day',
                {
                  selected: !(day.isLast || day.isNext) && state.selectedDate === getTime(day.value),
                  disable: day.isLast || day.isNext,
                  today: isToday(day)
                }
              ]"
            >
              <div class="label">{{ day.value }}</div>
              <ul class="tiny-calendar__events tiny-min-scrollbar" v-if="!(day.isLast || day.isNext)">
                <li v-for="({ type, title, content, parseTime: { year, month, day, hours, minutes } }, j) of getEventByDay(day.value)" :key="j">
                  <slot
                    name="day"
                    :slot-scope="{
                      type,
                      title,
                      content,
                      year,
                      month,
                      day,
                      hours,
                      minutes
                    }"
                  >
                    <tooltip :type="type" placement="right" class="tiny-calendar__tip" popper-class="tiny-calendar__tip" mode="hover">
                      <template #content>
                        <div>
                          <div class="tiny-calendar__tip-header">
                            <div class="tiny-calendar__tip-year">
                              {{ `${year}-${month}-${day}` }}
                            </div>
                            <div class="tiny-calendar__tip-hours">
                              {{ `${hours}:${minutes}` }}
                            </div>
                          </div>
                          <div :class="['tiny-calendar__tip-title', type || 'info']">
                            {{ title }}
                          </div>
                          <div class="tiny-calendar__tip-content">
                            {{ content }}
                          </div>
                        </div>
                      </template>
                      <div :class="['event', type || 'info']">{{ title }}</div>
                    </tooltip>
                  </slot>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </table>

      <!-- 年模式 -->
      <table v-show="state.displayMode === 'year'" style="table-layout: fixed">
        <tr v-for="(item, i) of genMonths()" :key="i">
          <td v-for="(mth, j) of item" :key="j" @click="selectMonth(mth)" width="25%">
            <div
              :class="[
                'tiny-calendar__day',
                {
                  selected: state.activeMonth === mth,
                  'this-month': isThisMonth(mth)
                }
              ]"
            >
              <div class="label">{{ t('ui.datepicker.month' + mth) }}</div>
              <ul class="tiny-calendar__events tiny-min-scrollbar">
                <li v-for="({ type, title, content, parseTime: { year, month, day, hours, minutes } }, k) of getEventByMonth(mth)" :key="k">
                  <slot
                    name="month"
                    :slot-scope="{
                      type,
                      title,
                      content,
                      year,
                      month,
                      day,
                      hours,
                      minutes
                    }"
                  >
                    <tooltip :type="type" class="tiny-calendar__tip" placement="right" popper-class="tiny-calendar__tip" mode="hover">
                      <template #content>
                        <div>
                          <div class="tiny-calendar__tip-header">
                            <div class="tiny-calendar__tip-year">
                              {{ `${year}-${month}-${day}` }}
                            </div>
                            <div class="tiny-calendar__tip-hours">
                              {{ `${hours}:${minutes}` }}
                            </div>
                          </div>
                          <div :class="['tiny-calendar__tip-title', type || 'info']">
                            {{ title }}
                          </div>
                          <div class="tiny-calendar__tip-content">
                            {{ content }}
                          </div>
                        </div>
                      </template>
                      <div :class="['event', type || 'info']">{{ title }}</div>
                    </tooltip>
                  </slot>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/calendar/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Tooltip from '@opentiny/vue-tooltip'
import Popover from '@opentiny/vue-popover'
import Button from '@opentiny/vue-button'
import { iconChevronUp, iconChevronDown } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    Tooltip,
    Popover,
    Button,
    IconChevronUp: iconChevronUp(),
    IconChevronDown: iconChevronDown()
  },
  props: [...props, 'mode', 'year', 'month', 'events', 'showSelected'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
