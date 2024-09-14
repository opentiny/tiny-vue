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
import template from 'virtual-template?pc|mobile|mobile-first'

export const $constants = {
  RADIO_GROUP: 'RadioGroup'
}

export const radioProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {},
  label: {},
  disabled: Boolean,
  name: String,
  border: Boolean,
  size: {
    type: String as PropType<'mini' | 'small' | 'medium'>,
    default: 'small'
  },
  text: String,
  events: {
    type: Object,
    default: () => ({})
  },
  tabindex: {
    type: String,
    default: '1'
  },
  displayOnly: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Radio',
  props: radioProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
