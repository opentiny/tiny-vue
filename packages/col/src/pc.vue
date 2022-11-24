<template>
  <component
    :is="tag"
    :class="state.className"
    :style="state.style"
    class="tiny-col"
  >
    <slot></slot>
  </component>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/col/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [
    ...props,
    'span',
    'offset',
    'no',
    'move',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'tag'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
