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
  placeholder: 'ui.cascader.placeholder',
  COMPONENT_NAME: { FormItem: 'FormItem' },
  EVENT_NAME: { FormBlur: 'form.blur' }
}

export default defineComponent({
  name: $prefix + 'Cascader',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    autoSize: Boolean,
    beforeFilter: {
      type: Function,
      default: () => () => {
        // do nothing
      }
    },
    clearable: Boolean,
    collapseTags: Boolean,
    debounce: {
      type: Number,
      default: 300
    },
    disabled: Boolean,
    filterMethod: Function,
    filterable: Boolean,
    modelValue: {},
    options: Array,
    placeholder: {
      type: String,
      default: ''
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    popperClass: String,
    props: Object,
    separator: {
      type: String,
      default: '/'
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    size: String,
    shape: String,
    label: String,
    tip: String,
    displayOnly: {
      type: Boolean,
      default: false
    },
    hoverExpand: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
