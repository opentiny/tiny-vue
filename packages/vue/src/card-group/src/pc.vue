<template>
  <div class="tiny-card-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/card-group/vue'
import { $prefix, props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/card-group/index.less'

export default defineComponent({
  name: $prefix + 'CardGroup',
  componentName: 'CardGroup',
  emits: ['update:modelValue', 'change', 'handleChange'],
  props: [
    ...props,
    'modelValue',
    'customClass',
    'height',
    'autoWidth',
    'size',
    'status',
    'checkType',
    'type',
    'disabled'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api
    })
  }
})
</script>
