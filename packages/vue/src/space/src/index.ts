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
import template from 'virtual-template?pc|mobile-first'

// 定义常量
const $constants = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  ALIGN_START: 'flex-start',
  ALIGN_CENTER: 'center',
  ALIGN_END: 'flex-end',
  JUSTIFY_START: 'flex-start',
  JUSTIFY_CENTER: 'center',
  JUSTIFY_END: 'flex-end',
  JUSTIFY_SPACE_BETWEEN: 'space-between',
  JUSTIFY_SPACE_AROUND: 'space-around',
  ROW: 'row',
  COLUMN: 'column'
}

export default defineComponent({
  name: $prefix + 'Space',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    size: {
      type: [String, Number, Array],
      default: $constants.SMALL
    },
    align: {
      type: String,
      default: $constants.ALIGN_START
    },
    justify: {
      type: String,
      default: $constants.JUSTIFY_START
    },
    direction: {
      type: String,
      default: $constants.ROW
    },
    wrap: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
