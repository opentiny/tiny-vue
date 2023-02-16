<template>
  <div></div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/[[NAME]]/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  emits: ['update:modelValue'],
  props: [...props, 'modelValue'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
