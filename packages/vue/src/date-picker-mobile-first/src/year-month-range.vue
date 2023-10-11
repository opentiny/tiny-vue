<template>
  <div data-tag="tiny-date-picker-mobile year-month">
    <tiny-action-sheet
      custom-class="h-full"
      :title="title"
      :lock-scroll="lockScroll"
      :visible="visible"
      @update:visible="$emit('update:visible', $event)"
    >
      <!-- box -->
      <div data-tag="tiny-date-picker-inner" :class="['flex flex-col overflow-hidden']">
        <!-- body -->
        <div ref="datePickerBody" data-tag="date-picker-body" class="flex-auto overflow-hidden px-4">
          <tiny-recycle-scroller
            ref="recycleScroller"
            key-field="id"
            class="h-full scrollbar-size-0"
            :style="{ height: state.scrollerHeight ? state.scrollerHeight + 'px' : null }"
            :items="state.computedYears"
            :item-size="state.itemSize"
            :buffer="state.buffer"
            @scroll-start="scrollStart"
            @scroll-end="scrollEnd"
          >
            <template #default="scopeSlots">
              <div class="mt-4">
                <div class="text-xl leading-7">{{ scopeSlots.item.year }}{{ t('ui.datepicker.year') }}</div>
                <div class="text-center leading-9 text-xs font-medium">
                  <div v-for="(v, row) in 2" :key="row" :class="['flex mt-2']">
                    <div
                      v-for="(v2, col) in 6"
                      :key="col"
                      :class="['flex-1 h-9 cursor-pointer']"
                      @click.stop="selectOption({ value: scopeSlots.item.year, index: row * 6 + col })"
                    >
                      <tiny-option :data="state.years[scopeSlots.item.year][row * 6 + col]">
                        <template #default="{ data }">
                          <div
                            :class="[
                              'flex-1',
                              {
                                'bg-color-info-primary-subtler':
                                  !data.disabled &&
                                  state.date.length === 2 &&
                                  ['end', 'inner'].includes(getSelectedPosition(data.value))
                              }
                            ]"
                          ></div>
                          <div
                            :class="
                              m(
                                'w-9 h-9',
                                { 'text-color-brand border-0.5 border-current': data.isToday },
                                {
                                  'bg-color-info-primary-subtler': ['inner'].includes(getSelectedPosition(data.value))
                                },
                                {
                                  'bg-color-brand text-color-text-inverse': ['start', 'end'].includes(
                                    getSelectedPosition(data.value)
                                  )
                                },
                                { 'bg-white text-color-text-disabled cursor-not-allowed': data.disabled }
                              )
                            "
                          >
                            <slot :data="data">
                              {{ data.month }}
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
                              }
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
          class="w-full flex-none flex flex-col items-center justify-center p-4 border-t border-color-bg-4 shadow-sm"
        >
          <div data-tag="rang-box" class="w-full" v-if="['year-month-range'].includes(type) && state.date.length">
            <div class="w-full flex mb-4 h-6 leading-6 text-base text-center">
              <div class="min-w-[theme(spacing.32)]">
                {{ formatDate(state.date[0], t('ui.datepicker.yearMonth', { year: 'yyyy', month: 'MM' })) }}
              </div>
              <div class="flex-auto min-w-[theme(spacing.4)] justify-center">~</div>
              <div class="min-w-[theme(spacing.32)]">
                <span v-if="state.btnDisabled" class="text-color-icon-placeholder">{{
                  t('ui.datepicker.endTime')
                }}</span>
                <span v-else>{{
                  formatDate(state.date[1], t('ui.datepicker.yearMonth', { year: 'yyyy', month: 'MM' }))
                }}</span>
              </div>
            </div>
          </div>

          <div class="w-full text-center">
            <tiny-button
              aui_mode="mobile-first"
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
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/date-picker-mobile/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import ActionSheet from '@opentiny/vue-action-sheet'
import RecycleScroller from '@opentiny/vue-recycle-scroller'
import Option from './option.vue'

export default defineComponent({
  components: {
    TinyOption: Option,
    TinyActionSheet: ActionSheet,
    TinyRecycleScroller: RecycleScroller,
    TinyButton: Button
  },
  emits: ['click', 'confirm', 'update:visible', 'update:modelValue', 'time-confirm'],
  props: [...props, 'modelValue', 'visible', 'title', 'type', 'lockScroll', 'pickerOptions'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
