<template>
  <div class="tiny-watermark-wrapper" ref="parentRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/watermark/vue'
import '@opentiny/vue-theme/watermark/index.less'

const $constants = {
  font: {
    color: 'rgba(0,0,0,.15)',
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontStyle: 'normal'
  }
}

export default defineComponent({
  name: $prefix + 'Watermark',
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    width: { type: Number, default: 120 },
    height: { type: Number, default: 64 },
    rotate: { type: Number, default: -22 },
    zIndex: { type: Number, default: 9 },
    image: { type: String },
    content: { type: [String, Array<String>] },
    font: {
      type: Object
    },
    gap: { type: Array<number>, default: [100, 100] },
    offset: { type: Array<number>, default: [20, 20] },
    customClass: { type: String, default: '' },
    interlaced: { type: Boolean, default: true }
  },
  setup(props, context) {
    return setup({ props, context, renderless, mono: true, api })
  }
})
</script>
