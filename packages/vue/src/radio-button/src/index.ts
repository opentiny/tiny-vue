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

export const $constants = {
  RADIO_GROUP: 'RadioGroup'
}

export const radioButtonProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  name: String,
  text: String,
  events: {
    type: Object,
    default: () => ({})
  },
  label: {},
  disabled: Boolean,
  tipContent: String
}

export default defineComponent({
  name: $prefix + 'RadioButton',
  props: radioButtonProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
