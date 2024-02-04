<template>
  <tiny-select-mobile
    data-tag="tiny-currency"
    v-bind="a($attrs, ['^on[A-Z]'])"
    :mode="mode"
    :model-value="state.selectedValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :menus="state.options"
    value-field="value"
    text-field="label"
    :title="title || t('ui.currency.chooseCurrency')"
    :placeholder="placeholder"
    :multiple="multiple"
    :visible="visible"
    :search-config="state.searchConfig"
    @update:visible="visibleChange"
  ></tiny-select-mobile>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/currency/vue'
import { props, setup } from '@opentiny/vue-common'
import SelectMobile from '@opentiny/vue-select-mobile'

export default {
  inheritAttrs: false,
  components: {
    TinySelectMobile: SelectMobile
  },
  emits: ['update:modelValue', 'change', 'clear', 'visible-change', 'update:visible'],
  props: [
    ...props,
    'visible',
    'modelValue',
    'title',
    'mode',
    'multiple',
    'searchConfig',
    'fetchCurrency',
    'fields',
    'placeholder',
    'currency'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
