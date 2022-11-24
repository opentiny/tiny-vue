<template>
  <div class="tiny-mobile-pull-refresh">
    <div
      class="tiny-mobile-pull-refresh__track"
      ref="track"
      :style="{
        'transition-duration': state.animationDuration + 'ms',
        transform: 'translate3d(0px,' + state.translate3d + 'px,0px)'
      }"
    >
      <div
        class="tiny-mobile-pull-refresh__head"
        :style="{ height: headHeight + 'px' }"
      >
        <span v-if="!state.checkStatus">{{ state.replaces }}</span>
        <slot name="loading" v-if="state.checkStatus">
          <ul v-if="state.checkStatus" class="tiny-mobile-pull-refresh__loading">
            <i></i>
            <i></i>
            <i></i>
          </ul>
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { t } from '@opentiny/vue-locale'
import { $prefix, setup } from '@opentiny/vue-common'
import {
  renderless,
  api
} from '@opentiny/vue-renderless/pull-refresh/vue'
import '@opentiny/vue-theme-mobile/pull-refresh/index.css'

export default {
  name: $prefix + 'PullRefresh',
  props: {
    modelValue: Boolean,
    pullingText: {
      type: String,
      default: () => t('ui.pullRefresh.pulling')
    },
    loosingText: {
      type: String,
      default: () => t('ui.pullRefresh.loosing')
    },
    successText: String,
    successDuration: {
      type: [Number, String],
      default: 500
    },
    animationDuration: {
      type: [Number, String],
      default: 300
    },
    headHeight: { type: [Number, String], default: 50 },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
