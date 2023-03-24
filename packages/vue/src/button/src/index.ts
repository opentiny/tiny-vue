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
import template from 'virtual-template?pc|mobile'

export default defineComponent({
  name: $prefix + 'Button',
  inject: {
    buttonGroup: {
      default: ''
    }
  },
  props: {
    ...$props,
    type: {
      type: String,
      default: 'default'
    },
    tabindex: { type: String, default: '1' },
    icon: {
      type: [Object, String],
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    resetTime: {
      type: Number,
      default: 1000
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: String,
    round: Boolean,
    plain: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
