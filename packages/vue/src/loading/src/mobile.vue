<template>
  <transition name="tiny-loading-fade" @after-leave="handleAfterLeave">
    <div
      :class="['tiny-mobile-loading', state.customClass]"
      v-show="state.visible"
      :style="`background-color:${state.background}`"
    >
      <div :class="['tiny-mobile-loading__body', { [`tiny-mobile-loading-${size}`]: size }]">
        <img v-if="!state.spinner" class="tiny-mobile-loading__icon" :src="state.loadingImg" :style="state.iconStyle" />
        <component v-else :is="state.spinner" class="tiny-mobile-loading__spinner" />
        <span v-if="state.text" class="tiny-mobile-loading__text">{{ state.text }}</span>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/loading/vue'
import { classes } from './tokens'
import loadingImg from '@opentiny/vue-theme-mobile/images/loading.png'
import '@opentiny/vue-theme-mobile/loading/index.less'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Loading',
  emits: ['after-leave'],
  props: {
    ...$props,
    _constants: Object,
    loadingImg: {
      type: String,
      default: loadingImg
    },
    size: {
      type: String
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
