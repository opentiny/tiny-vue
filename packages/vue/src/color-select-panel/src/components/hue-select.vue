<template>
  <div class="tiny-color-select-panel__inner">
    <div
      class="tiny-color-select-panel__inner__color-select"
      ref="wrapper"
      :style="{
        background: state.background
      }"
    >
      <div class="white"></div>
      <div class="black"></div>
      <div class="cursor" ref="cursor"></div>
    </div>
    <div class="tiny-color-select-panel__inner__hue-select" ref="bar">
      <div ref="thumb"></div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/hue-select/vue'
import { setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['hue-update', 'sv-update'],
  props: {
    color: {
      type: Object
    },
    alpha: {
      type: Boolean
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
