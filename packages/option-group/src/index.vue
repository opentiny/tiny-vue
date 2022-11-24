<template>
  <ul class="tiny-select-group__wrap" v-show="state.visible">
    <li class="tiny-select-group__title">{{ label }}</li>
    <li>
      <ul class="tiny-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/option-group/vue'
import { setup, $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'OptionGroup',
  componentName: 'OptionGroup',
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
