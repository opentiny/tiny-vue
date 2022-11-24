<template>
  <div
    ref="wrapper"
    class="tiny-fullscreen"
    v-bind="$attrs"
    :style="state.wrapperStyle"
    :class="{ [fullscreenClass]: state.isFullscreen }"
    @click="shadeClick($event)"
    @keyup="exit"
  >
    <slot />
  </div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import {
  renderless,
  api
} from '@opentiny/vue-renderless/fullscreen/vue'

export default {
  name: $prefix + 'Fullscreen',
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    exitOnClickWrapper: {
      type: Boolean,
      default: true
    },
    fullscreenClass: {
      type: String,
      default: ''
    },
    pageOnly: {
      type: Boolean,
      default: false
    },
    teleport: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
