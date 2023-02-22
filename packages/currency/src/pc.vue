<template>
  <tiny-select
    v-model="state.selectedValue"
    filterable
    :size="size"
    :clearable="clearable"
    :disabled="disabled"
    :placeholder="placeholder"
    @change="change"
    v-bind="a($attrs, ['^on[A-Z]'])"
    @clear="$emit('clear')"
    @visible-change="$emit('visible-change', $event)"
  >
    <tiny-option v-for="item in state.options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/currency/vue'
import { props, setup } from '@opentiny/vue-common'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'

export default {
  inheritAttrs: false,
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  emits: ['update:modelValue', 'change', 'clear', 'visible-change'],
  props: [...props, 'modelValue', 'placeholder', 'fetchCurrency', 'fields', 'size', 'clearable', 'disabled', 'popperClass', 'popperAppendToBody', 'currency'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
