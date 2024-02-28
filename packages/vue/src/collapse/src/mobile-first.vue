<template>
  <div role="tablist" aria-multiselectable="true" data-tag="tiny-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/collapse/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'accordion', 'modelValue', 'beforeClose'],
  emits: ['update:modelValue', 'change'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
