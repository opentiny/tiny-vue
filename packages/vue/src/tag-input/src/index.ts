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
import { $props, $setup, defineComponent, $prefix } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export const tagInputProps = {
  ...$props,
  modelValue: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['medium', 'small'].includes(value)
  },
  tagType: {
    type: String,
    default: '',
    validator: (value: string) => ['info', 'success', 'warning', 'danger', 'primary'].includes(value)
  },
  tagEffect: {
    type: String,
    default: 'light',
    validator: (value: string) => ['dark', 'light', 'plain'].includes(value)
  },
  clearable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  max: {
    type: Number,
    default: Infinity
  },
  readonly: {
    type: Boolean,
    default: false
  },
  separator: {
    type: String,
    default: undefined
  },
  minCollapsedNum: {
    type: Number,
    default: Infinity
  },
  draggable: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'TagInput',
  props: tagInputProps,
  setup(props, context): any {
    return $setup({ props, context, template })
  }
})
