<template>
  <div></div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/[[NAME]]/vue'
import { setup, $prefix, defineComponent } from '@opentiny/vue-common'

const $constants = {}

export default defineComponent({
  name: $prefix + '[[UNAME]]',
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
