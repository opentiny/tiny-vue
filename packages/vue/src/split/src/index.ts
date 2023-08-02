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
  PREFIX: 'tiny-split',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
}

export default defineComponent({
  name: $prefix + 'Split',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: {
      type: [Number, String],
      default: 0.5
    },
    mode: {
      validator(value) {
        const arr = [$constants.HORIZONTAL, $constants.VERTICAL]

        for (let i = 0; i < arr.length; i++) {
          if (value === arr[i]) {
            return true
          }
        }

        return false
      },
      default: $constants.HORIZONTAL
    },
    leftTopMin: {
      type: [Number, String],
      default: '40px'
    },
    rightBottomMin: {
      type: [Number, String],
      default: '40px'
    },
    'trigger-simple': {
      type: Boolean,
      default: false
    },
    'collapse-left-top': {
      type: Boolean,
      default: false
    },
    'collapse-right-bottom': {
      type: Boolean,
      default: false
    },
    'three-areas': {
      type: Boolean,
      default: false
    },
    collapsible: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
