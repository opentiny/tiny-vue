<template>
  <span
    :class="state.wrapClasses"
    :tabindex="tabindex"
    @click="toggle"
    @keydown.space="toggle"
  >
    <span :class="state.innerClasses">
      <div v-if="!mini">
        <slot v-if="state.currentValue === trueValue" name="open">ON</slot>
        <slot v-if="state.currentValue === falseValue" name="close">OFF</slot>
      </div>
    </span>
  </span>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme/switch/index.css'

export default {
  emits: ['change', 'update:modelValue'],
  props: [
    ...props,
    'modelValue',
    'trueValue',
    'falseValue',
    'disabled',
    'mini',
    'tabindex'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
