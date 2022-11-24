<template>
  <component
    :is="tag"
    :class="state.className"
    :style="state.style"
    class="tiny-row"
  >
    <slot></slot>
  </component>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/row/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [
    ...props,
    'flex',
    'gutter',
    'justify',
    'align',
    'order',
    'tag',
    'noSpace'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
