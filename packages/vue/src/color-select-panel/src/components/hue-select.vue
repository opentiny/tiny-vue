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
            background: color.value
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/hue-select/vue'
import { setup, defineComponent } from '@opentiny/vue-common'
import SvSelect from './sv-select.vue'

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
  components: { SvSelect },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
