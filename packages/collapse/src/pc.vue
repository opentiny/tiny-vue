<template>
  <div class="tiny-collapse" role="tablist" aria-multiselectable="true">
    <slot></slot>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/collapse/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'accordion', 'modelValue', 'beforeClose'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
