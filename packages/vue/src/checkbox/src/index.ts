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
import template from 'virtual-template?pc|mobile|mobile-first'

const $constants = {
  FORM_ITEM: 'FormItem',
  FORM_CHANGE: 'form.change',
  CHECKBOX: $prefix + 'Checkbox',
  CHECKBOX_GROUP: 'CheckboxGroup'
}

export default defineComponent({
  name: $prefix + 'Checkbox',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],

    /*
     * 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
     */
    id: String,

    /*
     * 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
     */
    controls: String,
    border: Boolean,
    size: String,
    text: String,
    validateEvent: {
      type: Boolean,
      default: true
    },
    events: {
      type: Object,
      default: () => ({})
    },
    displayOnly: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
