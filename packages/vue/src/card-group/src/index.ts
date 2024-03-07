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
import template from 'virtual-template?pc|mobile-first'

// 以下属性， card-group组件 似乎并未使用
export const cardGroupProps = {
  ...$props,
  modelValue: {},
  customClass: String,
  height: String,
  autoWidth: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'small'
  },
  status: {
    type: String,
    default: 'default'
  },
  checkType: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'CardGroup',
  props: cardGroupProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
