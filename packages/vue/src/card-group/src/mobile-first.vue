<template>
  <div data-tag="tiny-card-group" class="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(theme(spacing.54),1fr))]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/card-group/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'CardGroup',
  componentName: 'CardGroup',
  emits: ['update:modelValue', 'change'],
  props: {
    ...$props,
    modelValue: {},
    customClass: String,
    height: String,
    autoWidth: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
    status: {
      type: String,
      default: 'default'
    },
    checkType: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
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
