<template>
  <div
    :class="['tiny-divider', 'tiny-divider--' + direction, direction === 'vertical' ? 'tiny-divider--' + status : '']"
    :style="state.rootStyle"
  >
    <div
      v-if="direction !== 'vertical'"
      :style="{
        'border-color': color,
        ...state.lineStyle
      }"
      :class="['tiny-divider-line', 'tiny-divider--' + status]"
    ></div>
    <div
      v-if="slots.default"
      ref="text"
      :class="['tiny-divider__text']"
      :style="{
        color: contentColor,
        'background-color': contentBackgroundColor,
        ...state.textStyle
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
  props: [
    ...props,
    'direction',
    'color',
    'borderStyle',
    'contentPosition',
    'contentColor',
    'contentBackgroundColor',
    'status',
    'margin',
    'offset',
    'fontSize',
    'height'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
