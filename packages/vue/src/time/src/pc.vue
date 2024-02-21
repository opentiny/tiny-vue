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
        <button type="button" class="tiny-time-panel__btn cancel" @click="handleCancel">
          {{ t('ui.datepicker.cancel') }}
        </button>
        <button
          type="button"
          class="tiny-time-panel__btn"
          :class="{ confirm: !state.disabled }"
          @click="handleConfirm()"
        >
          {{ t('ui.datepicker.confirm') }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/time/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TimeSpinner from '@opentiny/vue-time-spinner'

export default defineComponent({
  emits: ['dodestroy', 'pick', 'select-range'],
  components: {
    TimeSpinner
  },
  props: [...props, 'show', 'timeArrowControl', 'emitter', 'value', 'step'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
