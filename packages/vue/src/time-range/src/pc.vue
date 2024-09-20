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
  <transition name="tiny-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div v-show="state.visible" class="tiny-time-range-picker tiny-picker-panel tiny-popper" :class="state.popperClass">
      <div class="tiny-time-range-picker__content">
        <div class="tiny-time-range-picker__cell">
          <div class="tiny-time-range-picker__header">
            <span>{{ t('ui.datepicker.startTime') }}</span>
          </div>
          <div class="tiny-time-range-picker__content-date">
            <div class="tiny-time-range-picker__header-title">
              <span>{{ t('ui.datepicker.hour') }}</span>
              <span>{{ t('ui.datepicker.minute') }}</span>
              <span v-if="state.showSeconds">{{ t('ui.datepicker.second') }}</span>
            </div>
            <div
              :class="{
                'has-seconds': state.showSeconds,
                'is-arrow': state.arrowControl
              }"
              class="tiny-time-range-picker__body tiny-time-panel__content"
            >
              <time-spinner
                ref="minSpinner"
                :show-seconds="state.showSeconds"
                :am-pm-mode="state.amPmMode"
                @change="handleMinChange"
                :end-date="state.maxDate"
                :arrow-control="state.arrowControl"
                @select-range="setMinSelectionRange"
                :date="state.minDate"
              >
              </time-spinner>
            </div>
          </div>
        </div>
        <div class="tiny-time-range-picker__cell">
          <div class="tiny-time-range-picker__header">
            <span>{{ t('ui.datepicker.endTime') }}</span>
          </div>
          <div class="tiny-time-range-picker__header-title">
            <span>{{ t('ui.datepicker.hour') }}</span>
            <span>{{ t('ui.datepicker.minute') }}</span>
            <span v-if="state.showSeconds">{{ t('ui.datepicker.second') }}</span>
          </div>
          <div
            :class="{
              'has-seconds': state.showSeconds,
              'is-arrow': state.arrowControl
            }"
            class="tiny-time-range-picker__body tiny-time-panel__content"
          >
            <time-spinner
              ref="maxSpinner"
              :show-seconds="state.showSeconds"
              :am-pm-mode="state.amPmMode"
              @change="handleMaxChange"
              :start-date="state.minDate"
              :arrow-control="state.arrowControl"
              @select-range="setMaxSelectionRange"
              :date="state.maxDate"
            >
            </time-spinner>
          </div>
        </div>
      </div>
      <div class="tiny-time-range-picker__footer">
        <tiny-button
          v-if="!state.showTimePickerRangeButton"
          class="tiny-time-range-picker__btn"
          @click="handleCancel()"
        >
          {{ t('ui.datepicker.cancel') }}
        </tiny-button>
        <tiny-button
          @click="handleConfirm()"
          :disabled="state.btnDisabled"
          size="small"
          :class="{
            'tiny-time-range-picker__btn': !state.showTimePickerRangeButton,
            confirm: !state.disabled && !state.showTimePickerRangeButton
          }"
        >
          {{ t('ui.datepicker.confirm') }}
        </tiny-button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/time-range/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import TimeSpinner from '@opentiny/vue-time-spinner'
import Button from '@opentiny/vue-button'

export default defineComponent({
  name: $prefix + 'TimeRange',
  emits: ['dodestroy', 'pick', 'select-range'],
  components: { TimeSpinner, TinyButton: Button },
  props: {
    emitter: Object
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
