<template>
  <div class="w-full grid gap-4" :style="state.style">
    <slot></slot>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/card-group/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'CardGroup',
  componentName: 'CardGroup',
  emits: ['update:modelValue', 'change'],
  props: {
    ...$props,
    modelValue: {},
    cardClass: String,
    height: String,
    autoWidth: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'medium'
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
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
