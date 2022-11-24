<template>
  <span
    :class="state.wrapClasses"
    :disabled="true"
    tabindex="0"
    @click="toggle"
    @keydown.space="toggle"
  >
  </span>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme-mobile/switch/index.css'

export default {
  props: [...props, 'modelValue', 'trueValue', 'falseValue', 'disabled'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
