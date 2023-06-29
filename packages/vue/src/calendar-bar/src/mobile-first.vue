<template>
  <div data-tag="tiny-mobile-calendar-bar" class="select-none">
    <div
      :class="[
        'w-full h-11 flex justify-center items-center text-sm text-color-text-primary',
        'border-b-0.5 border-solid border-color-border-separator'
      ]"
    >
      <div class="w-max h-6 flex items-center cursor-pointer space-x-1.5" @click="setCascaderVisible(true)">
        <span>{{ i18nYearMonth() }}</span>
        <span class="-translate-y-px fill-color-icon-primary">
          <icon-chevron-down :class="{ 'rotate-180': state.cascaderVisible }"></icon-chevron-down>
        </span>
      </div>
    </div>
    <div class="w-full h-max">
      <div class="grid grid-cols-7">
        <div v-for="weekDay in state.weekDays" :key="weekDay" :style="state.minSize2" class="text-xs">
          <calendar-item
            :text="t(`ui.calendarBar.week.${weekDay}`)"
            :day="`${weekDay}`"
            :config="config"
          ></calendar-item>
        </div>
      </div>
      <div
        class="w-full h-max"
        @touchstart="handleDraggerTouchstart"
        @touchend="handleDraggerTouchend"
        @touchmove.prevent="throttledHandleDraggerTouchmove"
      >
        <div class="grid grid-cols-7" ref="calendarPanel">
          <div
            v-for="calendarDay in state.filteredCalendarDays"
            :key="calendarDay.dateStr"
            :style="state.minSize3"
            :class="
              m(
                'text-sm',
                calendarDay.isCurMon && calendarDay.isWorkday
                  ? config.workdayColorClass || 'text-color-icon-primary'
                  : config.holidayColorClass || 'text-color-icon-placeholder',
                { [config.disabledColorClass || 'text-color-icon-disabled']: calendarDay.disabled },
                { [config.currentColorClass || 'text-color-icon-inverse']: calendarDay.isCur }
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
        <div class="w-full h-4 flex justify-center items-center">
          <div
            class="w-6 h-full flex justify-center items-center"
            @click="handleDraggerClick"
            @mousedown="handleDraggerMousedown"
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
  emits: ['update:modelValue'],
  props: [...props, 'modelValue', 'config'],
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
