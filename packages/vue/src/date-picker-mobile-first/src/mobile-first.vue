<template>
  <div data-tag="tiny-date-picker-mobile">
    <tiny-action-sheet
      :title="title"
      custom-class="h-full max-h-[100%] rounded-none"
      :visible="visible"
      @update:visible="$emit('update:visible', $event)"
    >
      <!-- box -->
      <div data-tag="tiny-date-picker-inner" :class="['flex flex-col flex-auto h-full']">
        <!-- header -->
        <div
          data-tag="date-picker-header"
          class="flex leading-6 py-2.5 px-4 text-sm items-center text-center border-b border-color-bg-4 shadow-sm"
        >
          <div v-for="(item, index) in 7" :key="index" class="flex-1">
            {{ t('ui.calendarBar.week.' + index) }}
          </div>
        </div>
        <!-- body -->
        <div ref="datePickerBody" data-tag="date-picker-body" class="flex-auto overflow-auto px-4 scrollbar-size-0">
          <div v-for="yearMonth in state.months" :key="yearMonth" class="mt-4">
            <div class="text-xl leading-7">{{ yearMonth.replace('/', '年') + '月' }}</div>
            <div class="text-center leading-9 text-xs font-medium">
              <div v-for="(item, week) in getWeeksByMonth(yearMonth)" :key="week" :class="['flex mt-2']">
                <div
                  v-for="(item, index) in 7"
                  :key="index"
                  :class="['flex-1 h-9 cursor-pointer', { 'text-color-text-placeholder': index === 0 || index === 6 }]"
                  @click.stop="selectOption({ yearMonth, index: index + week * 7 })"
                >
                  <tiny-option :data="getDate({ yearMonth, index: index + week * 7 })">
                    <template #default="{ data }">
                      <div
                        :class="[
                          'flex-1',
                          {
                            'bg-color-info-primary-subtler':
                              ['end', 'inner'].includes(getSelectedPosition(data.date)) && state.date.length === 2
                          }
                        ]"
                      ></div>
                      <div
                        :class="[
                          'w-9 h-9',
                          { 'bg-color-info-primary-subtler': ['inner'].includes(getSelectedPosition(data.date)) },
                          {
                            'bg-color-brand text-white': ['start', 'end'].includes(getSelectedPosition(data.date))
                          }
                        ]"
                      >
                        <slot :data="data">
                          {{ data.day }}
                        </slot>
                      </div>
                      <div
                        :class="[
                          'flex-1',
                          {
                            'bg-color-info-primary-subtler':
                              ['start', 'inner'].includes(getSelectedPosition(data.date)) && state.date.length === 2
                          }
                        ]"
                      ></div>
                    </template>
                  </tiny-option>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- footer -->
        <div
          data-tag="date-picker-footer"
          class="flex flex-col items-center justify-center p-4 border-t border-color-bg-4 shadow-sm"
        >
          <div
            data-tag="rang-box"
            class="w-full"
            v-if="['datetimerange', 'daterange'].includes(type) && state.date.length"
          >
            <div class="w-full flex mb-4 leading-6 text-base text-center">
              <div class="min-w-[8rem]">{{ getFormatDate(state.date[0], '年', '月', '日') }}</div>
              <div class="flex-auto min-w-[1rem]">
                <div
                  v-if="['datetimerange'].includes(type)"
                  class="h-9 h-9 border-l-0.5 inline-block rotate-45 relative top-6 border-color-bg-2"
                ></div>
              </div>
              <div class="min-w-[8rem]">
                <span v-if="state.btnDisabled" class="text-color-icon-placeholder">结束时间</span>
                <span v-else>{{ getFormatDate(state.date[1], '年', '月', '日') }}</span>
              </div>
            </div>
            <div v-if="type === 'datetimerange'" class="w-full h-9 flex mb-4 leading-9 text-base text-center">
              <div class="w-32 bg-color-bg-2" @click.stop="timeToggle(0)">{{ state.timeList[0].join(':') }}</div>
              <div class="flex-auto min-w-[1rem]"></div>
              <div class="w-32 bg-color-bg-2" @click.stop="timeToggle(1)">{{ state.timeList[1].join(':') }}</div>
            </div>
          </div>

          <div data-tag="datetime-box" class="w-full" v-if="['datetime'].includes(type) && state.date">
            <div class="w-full flex mb-4 leading-6 text-base text-center">
              <div class="min-w-[8rem]">{{ getFormatDate(state.date, '年', '月', '日') }}</div>
              <div class="flex-auto min-w-[1rem]"></div>
              <div class="w-32 bg-color-bg-2" @click.stop="timeToggle(0)">{{ state.timeList[0].join(':') }}</div>
            </div>
          </div>

          <div class="w-full text-center">
            <tiny-button
              tiny_mode="mobile-first"
              button-class="w-full"
              :disabled="state.btnDisabled"
              type="primary"
              size="medium"
              :reset-time="0"
              @click="confirm"
            >
              {{ t('ui.button.confirm') }}
            </tiny-button>
          </div>
        </div>
      </div>
    </tiny-action-sheet>

    <tiny-time-picker-mobile
      v-model="state.time"
      title="时间选择"
      :visible="state.timeVisible"
      @update:visible="state.timeVisible = $event"
      @confirm="timeConfirm"
    >
    </tiny-time-picker-mobile>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/date-picker-mobile/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import TimePickerMobile from '@opentiny/vue-time-picker-mobile'
import ActionSheet from '@opentiny/vue-action-sheet'
import Option from './option.vue'

export default defineComponent({
  name: $prefix + 'DatePickerMobile',
  components: {
    TinyOption: Option,
    TinyActionSheet: ActionSheet,
    TinyTimePickerMobile: TimePickerMobile,
    TinyButton: Button
  },
  props: {
    ...$props,
    modelValue: [Number, String, Array, Date],
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    type: {
      type: String,
      default: 'date'
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
