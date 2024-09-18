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
import type { PropType } from 'vue'
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const radioGroupProps = {
  ...$props,
  modelValue: {},
  size: {
    type: String as PropType<'mini' | 'small' | 'medium'>,
    default: ''
  },
  fill: String,
  textColor: String,
  disabled: Boolean,
  vertical: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'radio'
  },
  showTips: {
    type: Boolean,
    default: false
  },
  displayOnly: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'RadioGroup',
  componentName: 'RadioGroup',
  props: radioGroupProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
