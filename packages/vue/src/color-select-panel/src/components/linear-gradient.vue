<template>
  <div
    class="tiny-color-select-panel__linear-gradient"
    ref="linearGradientBar"
    @click="onClickBar"
    :style="{
      background: state.linearGradientBarBackground
    }"
  >
    <div
      class="tiny-color-select-panel__linear-gradient__thumb"
      v-for="(point, idx) of context.colorPoints"
      ref="thumb"
      :key="idx"
      @click.stop
      @mousedown="(event) => onThumbMouseDown(event, point)"
      :style="{
        left: point.cursorLeft + 'px',
        transform: 'translateX(-50%)'
      }"
    >
      <div
        class="tiny-color-select-panel__linear-gradient__thumb-heart"
        :style="{
          background: point.color.value
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/linear-gradient/vue'
import { setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: {},
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
