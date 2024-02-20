<template>
  <transition name="tiny-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="state.visible"
      data-tag="tiny-time-panel tiny-popper us"
      :class="
        m(
          'my-1 bg-color-bg-1 shadow-md rounded absolute w-60 right-0 z-[1000] box-content select-none',
          state.popperClass
        )
      "
    >
      <div
        data-tag="tiny-time-panel__content"
        :class="['relative overflow-hidden', { 'has-seconds': state.showSeconds }]"
      >
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
      <div
        data-tag="tiny-time-panel__footer"
        class="border-t border-t-color-bg-3 py-3 px-4 h-14 leading-7 box-border flex justify-between"
      >
        <tiny-button
          data-tag="tiny-time-panel__btn cancel"
          type="text"
          custom-class="text-color-brand text-left p-0"
          @click="handleCancel"
        >
          {{ t('ui.datepicker.cancel') }}
        </tiny-button>
        <tiny-button data-tag="tiny-time-panel__btn" type="primary" :disabled="state.disabled" @click="handleConfirm()">
          {{ t('ui.datepicker.confirm') }}
        </tiny-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/time/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TimeSpinner from '@opentiny/vue-time-spinner'
import TinyButton from '@opentiny/vue-button'

export default defineComponent({
  emits: ['dodestroy', 'pick', 'select-range'],
  components: {
    TimeSpinner,
    TinyButton
  },
  props: [...props, 'show', 'timeArrowControl', 'emitter', 'value', 'step'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
