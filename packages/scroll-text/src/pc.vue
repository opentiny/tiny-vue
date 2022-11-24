<template>
  <div>
    <div
      ref="wrap"
      class="tiny-scroll-text"
      @mouseenter="stopAnimation"
      @mouseleave="startAnimation"
    >
      <div
        ref="content"
        :class="[{ stop: state.isStop }, direction]"
        :style="state.bindStyle"
        class="tiny-scroll-text__content"
      >
        <slot>
          <p>{{ text }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/scroll-text/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'text', 'time', 'styles', 'direction', 'hoverStop'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
