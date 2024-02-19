<template>
  <div></div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/[[NAME]]/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['update:modelValue'],
  props: [...props, 'modelValue'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
