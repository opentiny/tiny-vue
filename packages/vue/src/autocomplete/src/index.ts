/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {
  WARP_CLS: '.tiny-autocomplete-suggestion__wrap',
  ITEM_CLS: '.tiny-autocomplete-suggestion__list li'
}

export default defineComponent({
  name: $prefix + 'Autocomplete',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    autofocus: Boolean,
    clearable: {
      type: Boolean,
      default: () => false
    },
    customItem: String,
    debounce: {
      type: Number,
      default: () => 300
    },
    disabled: Boolean,
    fetchSuggestions: Function,
    hideLoading: Boolean,
    highlightFirstItem: {
      type: Boolean,
      default: () => false
    },
    label: String,
    maxlength: Number,
    minlength: Number,
    modelValue: String,
    name: String,
    placeholder: String,
    placement: {
      type: String,
      default: () => 'bottom-start'
    },
    popperAppendToBody: {
      type: Boolean,
      default: () => true
    },
    popperClass: String,
    popperOptions: Object,
    prefixIcon: [String, Object],
    selectWhenUnmatched: {
      type: Boolean,
      default: () => false
    },
    size: String,
    suffixIcon: [String, Object],
    triggerOnFocus: {
      type: Boolean,
      default: () => true
    },
    valueKey: {
      type: String,
      default: () => 'value'
    },
    displayOnly: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
