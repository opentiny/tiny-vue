<template>
  <div class="tiny-color-select-panel__inner">
    <sv-select :color="color" @ready="onSvReady" />
    <div class="tiny-color-select-panel__inner__hue-select" ref="bar">
      <div
        ref="thumb"
        class="tiny-color-select-panel__inner__hue-select-thumb"
        :style="{
          left: state.thumbLeft + 'px',
          transform: 'translateX(-50%)'
        }"
      >
        <div
          class="tiny-color-select-panel__inner__hue-select-thumb-heart"
          :style="{
            background: state.ctx.activeColor.color.value
          }"
        ></div>
      </div>
    </div>
    <linear-gradient v-if="state.ctx.colorMode === 'linear-gradient'" />
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/hue-select/vue'
import { setup, defineComponent } from '@opentiny/vue-common'
import SvSelect from './sv-select.vue'
import linearGradient from './linear-gradient.vue'

export default defineComponent({
  emits: ['hueUpdate', 'svReady', 'hueReady'],
  props: {
    color: {
      type: Object
    },
    alpha: {
      type: Boolean
    }
  },
  components: { SvSelect, LinearGradient: linearGradient },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
