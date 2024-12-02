<template>
  <div
    class="tiny-color-select-panel__inner__color-select"
    ref="wrapper"
    :style="{
      background: state.bg
    }"
  >
    <div class="white"></div>
    <div class="black"></div>
    <div
      class="cursor"
      ref="cursor"
      :style="{
        top: state.cursorTop + 'px',
        left: state.cursorLeft + 'px',
        transform: 'translate(-50%, -50%)'
      }"
    ></div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/sv-select/vue'
import { setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emit: ['ready', 'svUpdate'],
  props: {
    color: {
      type: Object
    }
  },
  setup(props, context) {
    return setup({ props, api, renderless, context, mono: true })
  }
})
</script>
