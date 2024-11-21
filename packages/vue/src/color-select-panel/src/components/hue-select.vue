<template>
  <div class="tiny-color-select-panel__inner">
    <sv-select :color="color" @ready="onSvReady" />
    <div class="tiny-color-select-panel__inner__hue-select" ref="bar">
      <div
        ref="thumb"
        :style="{
          top: state.thumbTop + 'px',
          transform: 'translateY(-50%)'
        }"
      ></div>
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
