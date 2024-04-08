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

export const tagProps = {
  ...$props,
  hit: Boolean,
  text: String,
  type: String,
  theme: String,
  size: String,
  color: {
    type: [String, Array],
    default: ''
  },
  closable: Boolean,
  operable: Boolean,
  disabled: Boolean,
  selectable: Boolean,
  customClass: {
    type: String,
    default: ''
  },
  effect: {
    type: String,
    default: 'light',
    validator: (value: string) => Boolean(~['dark', 'light', 'plain'].indexOf(value))
  },
  beforeDelete: Function,
  value: [Number, String],

  // mobile
  mini: {
    type: Boolean,
    default: false
  },
  maxWidth: {
    type: [String, Number],
    default: null
  }
}

export default defineComponent({
  name: $prefix + 'Tag',
  props: tagProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
