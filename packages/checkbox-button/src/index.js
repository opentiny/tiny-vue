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
import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc'

const $constants = {
  CHECKBOX_GROUP: 'CheckboxGroup'
}

const template = () => PCTemplate

export default {
  name: $prefix + 'CheckboxButton',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    text: String,
    events: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
