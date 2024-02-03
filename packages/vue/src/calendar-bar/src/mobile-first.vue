<template>
  <div data-tag="tiny-calendar-bar" class="select-none">
    <div
      data-tag="tiny-calendar-bar-content"
      :class="[
        'w-full h-11 flex items-center text-sm text-color-text-primary',
        'border-b-0.5 border-solid border-color-border-separator',
        {
          'justify-start': cascaderPosition === 'start',
          'justify-center': cascaderPosition === 'center',
          'justify-end': cascaderPosition === 'end'
        }
      ]"
    >
      <div
        data-tag="tiny-calendar-bar-visible"
        class="w-max h-6 flex items-center cursor-pointer space-x-1.5"
        @click="setCascaderVisible(true)"
      >
        <span>{{ i18nYearMonth() }}</span>
        <span class="-translate-y-px fill-color-icon-primary">
          <icon-chevron-down :class="{ 'rotate-180': state.cascaderVisible }"></icon-chevron-down>
        </span>
      </div>
    </div>
    <div data-tag="tiny-calendar-bar-gridbox" class="w-full h-max overflow-hidden" ref="weekPanel">
      <div class="grid grid-cols-7">
        <div
          data-tag="tiny-calendar-bar-weekday"
          v-for="weekDay in state.weekDays"
          :key="weekDay"
          :style="state.minSize2"
          class="text-xs"
        >
          <calendar-item
            :text="t(`ui.calendarBar.week.${weekDay}`)"
            :day="`${weekDay}`"
            :config="config"
          ></calendar-item>
        </div>
      </div>
      <div
        class="h-max flex relative right-full will-change-transform"
        @touchstart="touchstart"
        @touchend="touchend"
        @touchmove.prevent="touchmove"
        :style="{
          'width': ' 300%',
          'transform': `translateX(${state.delta}px)`,
          'transition-duration': `${state.duration}ms`
        }"
      >
        <div class="w-full flex" ref="calendarPanel">
          <div class="grid grid-cols-7" v-for="(calendarDays, idx) in state.data" :key="idx" style="width: 33.33%">
            <div
              v-for="calendarDay in calendarDays"
              :key="calendarDay.dateStr"
              :style="state.minSize3"
              :class="
                m(
                  'text-sm',
                  (calendarDay.isCurMon || state.showWeek) && calendarDay.isWorkday
                    ? config.workdayColorClass || 'text-color-icon-primary'
                    : config.holidayColorClass || 'text-color-icon-placeholder',
                  { [config.disabledColorClass || 'text-color-icon-disabled']: calendarDay.disabled },
                  {
                    [config.currentColorClass || 'text-color-icon-inverse']:
                      calendarDay.type === 'cur' && calendarDay.isCur
                  }
                )
              "
            >
              <calendar-item
                :text="`${calendarDay.dateArr[2]}`"
                :day="calendarDay"
                :config="config"
                @clickday="handleClickDay"
              ></calendar-item>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-4 flex justify-center items-center">
        <div
          class="w-6 h-full flex justify-center items-center"
          @click="handleDraggerClick"
          @mousedown="handleDraggerMousedown"
          @touchstart="handleDraggerTouchstart"
          @touchend="handleDraggerTouchend"
          @touchmove.prevent="throttledHandleDraggerTouchmove"
        >
          <div
            :class="[
              'box-content w-6 h-px cursor-pointer bg-color-border-separator rounded-sm',
              'border-y border-solid border-color-border-separator'
            ]"
          ></div>
        </div>
      </div>
    </div>
    <tiny-cascader-select
      v-model="state.cascaderCurrent"
      cycle-roll
      :options="state.cascaderOptions"
      :visible="state.cascaderVisible"
      @update:modelValue="handleCascaderChange"
      @update:visible="setCascaderVisible"
      v-bind="config.cascaderOp"
    ></tiny-cascader-select>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/calendar-bar/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconChevronDown } from '@opentiny/vue-icon'
import CascaderSelect from '@opentiny/vue-cascader-select'
import CalendarItem from './calendar-item.vue'

export default defineComponent({
  emits: ['update:modelValue', 'expand'],
  props: [...props, 'modelValue', 'config', 'cascaderPosition'],
  components: {
    TinyCascaderSelect: CascaderSelect,
    IconChevronDown: IconChevronDown(),
    CalendarItem
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
