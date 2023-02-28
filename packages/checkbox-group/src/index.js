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
import MobileTemplate from './mobile'

const $constants = {
  FORM_ITEM: 'FormItem',
  FORM_CHANGE: 'form.change'
}

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

export default {
  name: $prefix + 'CheckboxGroup',
  componentName: 'CheckboxGroup',
  emits: ['change'],
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,
    vertical: Boolean,
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
