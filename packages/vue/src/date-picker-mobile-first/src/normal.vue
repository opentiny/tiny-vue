<template>
  <div data-tag="tiny-date-picker-mobile">
    <tiny-action-sheet
      ref="actionSheet"
      :title="title"
      :custom-class="m('h-full max-h-full rounded-none min-h-[95vh]', customClass)"
      :lock-scroll="lockScroll"
      :visible="visible"
      @update:visible="$emit('update:visible', $event)"
    >
      <template #header-left v-if="clearable">
        <div class="cursor-pointer text-color-brand" @click="clear">{{ t('ui.datepicker.clear') }}</div>
      </template>
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
        <div ref="datePickerBody" data-tag="date-picker-body" class="flex-auto overflow-hidden px-4">
          <tiny-recycle-scroller
            ref="recycleScroller"
            class="h-full scrollbar-size-0"
            key-field="id"
            :style="{ height: state.scrollerHeight ? state.scrollerHeight + 'px' : null }"
            :items="state.months"
            :item-size="state.itemSize"
            :buffer="state.buffer"
            @scroll-start="scrollStart"
            @scroll-end="scrollEnd"
          >
            <template #default="scopeSlots">
              <div class="mt-4">
                <div class="text-xl leading-7 text-color-text-primary">
                  {{
                    formatDate(scopeSlots.item.yearMonth, t('ui.datepicker.yearMonth', { year: 'yyyy', month: 'MM' }))
                  }}
                </div>
                <div class="text-center leading-9 text-xs font-medium">
                  <div
                    v-for="(item, week) in getWeeksByMonth(scopeSlots.item.yearMonth)"
                    :key="week"
                    :class="['flex mt-2']"
                  >
                    <div
                      v-for="(item, index) in 7"
                      :key="index"
                      :class="[
                        'flex-1 h-9 cursor-pointer',
                        index === 0 || index === 6 ? 'text-color-text-placeholder' : 'text-color-text-primary'
                      ]"
                      @click.stop="selectOption({ value: scopeSlots.item.yearMonth, index: index + week * 7 })"
                    >
                      <tiny-option :data="getDate({ yearMonth: scopeSlots.item.yearMonth, index: index + week * 7 })">
                        <template #default="{ data }">
                          <div
                            :class="[
                              'flex-1',
                              {
                                'bg-color-info-primary-subtler':
                                  !data.disabled &&
                                  state.date.length === 2 &&
                                  ['end', 'inner'].includes(getSelectedPosition(data.value))
                              },
                              {'rounded-l': index === 0 }
                            ]"
                          ></div>
                          <div
                            :class="
                              m(
                                'w-9 h-9',
                                { 'text-color-brand border-0.5 border-current rounded': data.isToday },
                                {
                                  'bg-color-info-primary-subtler': ['inner'].includes(getSelectedPosition(data.value))
                                },
                                {
                                  'bg-color-brand text-color-text-inverse rounded': ['start', 'end'].includes(
                                    getSelectedPosition(data.value)
                                  )
                                },
                                { 'bg-white text-color-text-disabled cursor-not-allowed': data.disabled }
                              )
                            "
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
                                  !data.disabled &&
                                  state.date.length === 2 &&
                                  state.selected.length > 1 &&
                                  ['start', 'inner'].includes(getSelectedPosition(data.value))
                              },
                              { 'rounded-r': index === 6 }
                            ]"
                          ></div>
                        </template>
                      </tiny-option>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </tiny-recycle-scroller>
        </div>
        <!-- footer -->
        <div
          data-tag="date-picker-footer"
          class="flex flex-none flex-col items-center justify-center p-4 border-t border-color-bg-4 shadow-sm"
        >
          <div
            data-tag="rang-box"
            class="w-full"
            v-if="['datetimerange', 'daterange'].includes(type) && state.date.length"
          >
            <div class="w-full flex mb-4 h-6 leading-6 text-base text-center">
              <div class="min-w-[theme(spacing.32)]">
                {{
                  formatDate(state.date[0], t('ui.datepicker.yearMonthDay', { year: 'yyyy', month: 'MM', day: 'dd' }))
                }}
              </div>
              <div class="flex-auto min-w-[theme(spacing.4)]">
                <div
                  v-if="['datetimerange'].includes(type)"
                  class="h-9 border-l-0.5 inline-block rotate-45 relative top-6 border-color-bg-2"
                ></div>
                <div v-else class="text-center">
                  <template v-if="typeof rangeSeparator === 'string'">{{ rangeSeparator }}</template>
                  <component v-else :is="rangeSeparator" />
                </div>
              </div>
              <div class="min-w-[theme(spacing.32)]">
                <span v-if="state.btnDisabled" class="text-color-icon-placeholder">{{ endPlaceholder }}</span>
                <span v-else>{{
                  formatDate(state.date[1], t('ui.datepicker.yearMonthDay', { year: 'yyyy', month: 'MM', day: 'dd' }))
                }}</span>
              </div>
            </div>
            <div v-if="type === 'datetimerange'" class="w-full h-9 flex mb-4 leading-9 text-base text-center">
              <div class="w-32 bg-color-bg-2" @click.stop="timeToggle(0)">{{ state.timeList[0].join(':') }}</div>
              <div class="flex-auto min-w-[theme(spacing.4)]"></div>
              <div class="w-32 bg-color-bg-2" @click.stop="timeToggle(1)">{{ state.timeList[1].join(':') }}</div>
            </div>
          </div>

          <div data-tag="datetime-box" class="w-full" v-if="['datetime'].includes(type) && state.date">
            <div class="w-full flex mb-4 leading-6 text-base text-center">
              <div class="min-w-[theme(spacing.32)]">
                {{ formatDate(state.date, t('ui.datepicker.yearMonthDay', { year: 'yyyy', month: 'MM', day: 'dd' })) }}
              </div>
              <div class="flex-auto min-w-[theme(spacing.4)]"></div>
              <div class="w-32 bg-color-bg-2" @click.stop="timeToggle(0)">{{ state.timeList[0].join(':') }}</div>
            </div>
          </div>

          <div class="w-full text-center">
            <tiny-button
              tiny_mode="mobile-first"
              custom-class="w-full"
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
      :title="t('ui.datepicker.selectTime')"
      :step="step"
      :show-seconds="showTimeSecond"
      :visible="state.timeVisible"
      @update:visible="state.timeVisible = $event"
      @confirm="timeConfirm"
    >
    </tiny-time-picker-mobile>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/date-picker-mobile/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import TimePickerMobile from '@opentiny/vue-time-picker-mobile'
import ActionSheet from '@opentiny/vue-action-sheet'
import RecycleScroller from '@opentiny/vue-recycle-scroller'
import Option from './option.vue'

export default defineComponent({
  components: {
    TinyOption: Option,
    TinyActionSheet: ActionSheet,
    TinyTimePickerMobile: TimePickerMobile,
    TinyRecycleScroller: RecycleScroller,
    TinyButton: Button
  },
  emits: ['click', 'confirm', 'update:visible', 'update:modelValue', 'time-confirm'],
  props: [
    ...props,
    'modelValue',
    'visible',
    'title',
    'type',
    'lockScroll',
    'pickerOptions',
    'customClass',
    'clearable',
    'step',
    'rangeSeparator',
    'endPlaceholder',
    'showTimeSecond'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
