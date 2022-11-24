<template>
  <transition name="tiny-zoom-in-top" @after-leave="doDestroy">
    <ul
      class="tiny-dropdown-menu tiny-popper"
      :class="[state.size && `tiny-dropdown-menu--${state.size}`, popperClass]"
      v-show="state.showPopper"
    >
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/dropdown-menu/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme/dropdown-menu/index.css'

export default {
  props: [
    ...props,
    'visibleArrow',
    'arrowOffset',
    'placement',
    'popperClass',
    'popperAppendToBody'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
