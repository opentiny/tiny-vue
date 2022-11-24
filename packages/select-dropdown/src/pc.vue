<template>
  <div
    class="tiny-select-dropdown tiny-popper"
    :class="[{ 'is-multiple': state.multiple }, state.popperClass]"
    @mousedown.stop
    :style="{
      minWidth: state.minWidth,
      width: isDropInheritWidth ? state.minWidth : 'auto'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/select-dropdown/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [
    ...props,
    'placement',
    'boundariesPadding',
    'popperOptions',
    'visibleArrow',
    'appendToBody',
    'transformOrigin',
    'reference',
    'popper',
    'offset',
    'modelValue',
    'arrowOffset',
    'isDropInheritWidth'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
