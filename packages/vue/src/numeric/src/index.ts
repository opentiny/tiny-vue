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
  MAX: 'aria-valuemax',
  MIN: 'aria-valuemin',
  VALUENOW: 'aria-valuenow',
  DISABLED: 'aria-disabled',
  KEY: 'role',
  VALUE: 'spinbutton',
  EVENT_NAME: {
    blur: 'form.blur',
    change: 'form.change'
  },
  COMPONENT_NAME: 'FormItem'
}

export const numericProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  allowEmpty: {
    type: Boolean,
    default: false
  },
  circulate: Boolean,
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: ''
  },
  disabled: Boolean,
  format: [Object, String],
  hideUnit: {
    type: Boolean,
    default: false
  },
  holdZero: {
    type: Boolean,
    default: true
  },
  label: String,
  max: {
    type: [Number, String],
    default: Infinity
  },
  min: {
    type: [Number, String],
    default: -Infinity
  },
  modelTruncation: {
    type: Boolean,
    default: true
  },
  modelValue: [Number, undefined],
  mouseWheel: Boolean,
  name: String,
  placeholder: String,
  plugin: Function,
  precision: {
    type: Number,
    validator(val) {
      return val >= 0 && val === parseInt(val, 10)
    }
  },
  size: String,
  step: {
    type: [Number, String],
    default: 1
  },
  stepStrictly: {
    type: Boolean,
    default: false
  },
  strictInput: {
    type: Boolean,
    default: false
  },
  stringMode: Boolean,
  tabindex: {
    type: String,
    default: '1'
  },
  theme: {
    type: String,
    default: ''
  },
  unit: String,
  unitCenter: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  showLeft: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Numeric',
  props: numericProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
