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
    <div v-show="state.visible" class="tiny-time-panel tiny-popper" :class="state.popperClass">
      <div class="tiny-time-panel__header">
        <div class="tiny-time-panel__header-input">
          <tiny-input v-model="state.displayValue" :placeholder="state.format"></tiny-input>
        </div>
        <div class="tiny-time-panel__header-title">
          <span>{{ t('ui.datepicker.hour') }}</span>
          <span>{{ t('ui.datepicker.minute') }}</span>
          <span v-if="state.showSeconds">{{ t('ui.datepicker.second') }}</span>
        </div>
      </div>
      <div class="tiny-time-panel__content" :class="{ 'has-seconds': state.showSeconds }">
        <time-spinner
          ref="spinner"
          :step="step"
          @change="handleChange"
          :arrow-control="state.useArrow"
          :show-seconds="state.showSeconds"
          :am-pm-mode="state.amPmMode"
          @select-range="setSelectionRange"
          :date="state.date"
        >
        </time-spinner>
      </div>
      <div class="tiny-time-panel__footer">
        <tiny-button v-if="!state.showTimePickerButton" class="tiny-time-panel__btn" @click="handleCancel()">
          {{ t('ui.datepicker.cancel') }}
        </tiny-button>
        <tiny-button
          @click="handleConfirm()"
          size="small"
          :class="{
            'tiny-time-panel__btn': !state.showTimePickerButton,
            confirm: !state.disabled && !state.showTimePickerButton
          }"
        >
          {{ t('ui.datepicker.confirm') }}
        </tiny-button>
      </div>
    </div>
  </transition>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/time/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TimeSpinner from '@opentiny/vue-time-spinner'
import Input from '@opentiny/vue-input'
import Button from '@opentiny/vue-button'

export default defineComponent({
  emits: ['dodestroy', 'pick', 'select-range'],
  components: {
    TimeSpinner,
    TinyInput: Input,
    TinyButton: Button
  },
  props: [...props, 'show', 'timeArrowControl', 'emitter', 'value', 'step'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
