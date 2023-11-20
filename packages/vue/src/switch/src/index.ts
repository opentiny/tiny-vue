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

export const $constants = {
  PC_PREFIXCLS: 'tiny-switch',
  MOBILE_PREFIXCLS: 'tiny-mobile-switch',
  Mode: 'pc',
  prefixcls(mode) {
    return mode === this.Mode ? this.PC_PREFIXCLS : this.MOBILE_PREFIXCLS
  }
}

export const switchProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean || undefined,
    default: undefined
  },
  types: {
    type: String
  },
  falseColor: String,
  falseValue: {
    type: [String, Number, Boolean],
    default: false
  },
  mini: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  size: [Number, String],
  tabindex: {
    type: String,
    default: '1'
  },
  trueColor: String,
  trueValue: {
    type: [String, Number, Boolean],
    default: true
  },
  beforeChange: Function,
  displayOnly: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Switch',
  props: switchProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
