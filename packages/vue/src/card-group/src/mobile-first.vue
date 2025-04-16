<template>
  <div data-tag="tiny-card-group" class="w-full grid gap-4" :class="gcls(`size-${state.size}`)">
    <slot></slot>
    <icon-grid-no-data data-tag="tiny-card-group-empty" class="hidden first:block w-full !h-28"></icon-grid-no-data>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/card-group/vue'
import { $prefix, props, setup, defineComponent } from '@opentiny/vue-common'
import { iconGridNoData } from '@opentiny/vue-icon'

import { classes } from './token'

export default defineComponent({
  name: $prefix + 'CardGroup',
  componentName: 'CardGroup',
  components: {
    IconGridNoData: iconGridNoData()
  },
  emits: ['update:modelValue', 'change'],
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
      api,
      classes
    })
  }
})
</script>
