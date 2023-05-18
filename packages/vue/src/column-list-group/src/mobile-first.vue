<template>
  <div class="w-full [&_[role=column-list-item]]:mb-3 [&_[role=column-list-item]:last-child]:mb-0">
    <slot></slot>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/column-list-group/vue'
import { $props, $prefix, setup, defineComponent} from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'ColumnListGroup',
  componentName: 'ColumnListGroup',
  emits: ['update:modelValue', 'change'],
  props: {
    ...$props,
    modelValue: {},
    title: String,
    disabled: Boolean,
    size: {
      type: String,
      default: 'medium'
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    checkboxDisabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true
    })
  }
})
</script>
