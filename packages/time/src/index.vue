<template>
  <transition name="tiny-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="state.visible"
      class="tiny-time-panel tiny-popper"
      :class="state.popperClass"
    >
      <div
        class="tiny-time-panel__content"
        :class="{ 'has-seconds': state.showSeconds }"
      >
        <time-spinner
          ref="spinner"
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
        <button
          type="button"
          class="tiny-time-panel__btn cancel"
          @click="handleCancel"
        >
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

<script>
import { renderless, api } from '@opentiny/vue-renderless/time/vue'
import { $prefix, setup } from '@opentiny/vue-common'
import TimeSpinner from '@opentiny/vue-time-spinner'

export default {
  name: $prefix + 'Time',
  emits: ['dodestroy', 'pick', 'select-range'],
  components: {
    TimeSpinner
  },
  props: {
    show: Boolean,
    timeArrowControl: Boolean,
    emitter: Object,
    value: Date
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
