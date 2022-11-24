<template>
  <div
    :class="{ 'tiny-mobile-tabbar-placeholder': placeholder }"
    :style="{ height: state.height }"
  >
    <div
      class="tiny-mobile-tabbar"
      :class="[
        { 'is-border': border },
        { unfit: !state.fit, 'tiny-mobile-tabbar--fixed': fixed }
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { setup, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tabbar/vue'

export default {
  name: $prefix + 'Tabbar',
  props: {
    activeColor: String,
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    inactiveColor: String,
    modelValue: {
      type: [Number, String],
      default: 0
    },
    placeholder: Boolean,
    route: Boolean,
    safeAreaInsetBottom: {
      type: Boolean,
      default: null
    },
    zIndex: [Number, String]
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
