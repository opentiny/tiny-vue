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
import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile'

export const labelProps = {
  ...$props,
  label: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'gray'
  },
  size: {
    type: String,
    default: 'normal'
  },
  type: {
    type: String,
    default: 'base'
  },
  wholeline: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'left'
  },
  ellipsis: {
    type: Number,
    default: 0
  },
  decimal: {
    type: Number,
    default: 2
  },
  limit: {
    type: Number,
    default: 0
  },
  isRequired: {
    type: Boolean,
    default: false
  },
  bold: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Label',
  props: labelProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
