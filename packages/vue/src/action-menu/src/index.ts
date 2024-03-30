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

export const actionMenuProps = {
  ...$props,
  options: {
    type: Array,
    default: () => []
  },
  maxShowNum: Number,
  moreText: String,
  spacing: {
    type: [String, Number]
  },
  textField: {
    type: String,
    default: 'label'
  },
  popperClass: {
    type: String,
    default: ''
  },
  popperAppendToBody: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String,
    default: 'hover'
  },
  suffixIcon: Object,
  showIcon: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: 'default'
  }
}

export default defineComponent({
  name: $prefix + 'ActionMenu',
  props: actionMenuProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
