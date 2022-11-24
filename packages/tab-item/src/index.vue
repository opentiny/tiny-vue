<template>
  <div
    v-if="!lazy || state.loaded || state.active"
    v-show="state.active"
    :aria-hidden="!state.active"
    :id="`pane-${state.paneName}`"
    :aria-labelledby="`tab-${state.paneName}`"
    :class="['tiny-tab-pane', state.animateShow ? 'active-item' : '']"
    role="tabpanel"
  >
    <slot></slot>
  </div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tab-item/vue'

export default {
  name: $prefix + 'TabItem',
  componentName: 'TabItem',
  props: {
    title: String,
    labelContent: Function,
    name: String,
    withClose: Boolean,
    disabled: Boolean,
    lazy: Boolean
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
