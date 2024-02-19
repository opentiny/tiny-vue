<template>
  <div
    :class="['tiny-divider', 'tiny-divider--' + direction]"
    :style="{
      'border-top-style': direction === 'horizontal' ? borderStyle : '',
      'border-left-style': direction === 'vertical' ? borderStyle : '',
      'border-color': color
    }"
  >
    <div
      v-if="slots.default"
      :class="['tiny-divider__text', 'is-' + contentPosition]"
      :style="{
        color: contentColor,
        'background-color': contentBackgroundColor
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/divider/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'direction', 'color', 'borderStyle', 'contentPosition', 'contentColor', 'contentBackgroundColor'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
