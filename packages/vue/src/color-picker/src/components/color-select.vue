<template>
  <div class="tiny-color-picker__wrapper__inner">
    <div
      class="tiny-color-picker__wrapper__inner__color-select" ref="wrapper" :style="{
        background: state.background,
      }"
    >
      <div class="white"></div>
      <div class="black"></div>
      <div class="cursor" ref="cursor"></div>
    </div>
    <div class="tiny-color-picker__wrapper__inner__hue-select" ref="bar">
      <div ref="thumb"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/color-picker/color-select/vue'
import '@opentiny/vue-theme/color-picker/index.less'

export default defineComponent({
  emits: ['hue-update', 'sv-update'],
  props: {
    color: {
      type: String
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
})
</script>
