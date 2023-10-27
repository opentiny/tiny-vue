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
import template from 'virtual-template?mobile'

export const toastProps = {
  ...$props,
  type: {
    type: String,
    validator: (value: string) => Boolean(~['text', 'correct', 'error'].indexOf(value))
  },
  zIndex: {
    type: Number,
    default: 100
  },
  text: {
    type: String,
    default: 'text'
  },
  time: {
    type: [String, Number],
    default: 2000
  }
}

export default defineComponent({
  name: $prefix + 'Toast',
  emits: ['timeout'],
  props: toastProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
