<template>
  <div>virtual-scroll</div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/virtual-scroll/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['update:modelValue'],
  props: [...props, 'modelValue'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
