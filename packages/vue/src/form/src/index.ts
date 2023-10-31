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

export const formProps = {
  ...$props,
  model: Object,
  rules: Object,
  inlineMessage: {
    type: Boolean,
    default: undefined
  },
  messageType: String,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  validatePosition: {
    type: String,
    default: 'right'
  },
  size: String,
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: undefined
  },
  labelPosition: {
    type: String,
    default: 'right',
    validator: (value: string) => ['left', 'top', 'right'].includes(value)
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  labelAlign: {
    type: Boolean,
    default: false
  },
  contentOffset: Number,
  labelSuffix: {
    type: String,
    default: ''
  },
  inline: {
    type: Boolean,
    default: false
  },
  responsiveLayout: {
    type: Boolean,
    default: false
  },
  validateType: {
    type: String,
    default: 'tip',
    validator(value: string) {
      return Boolean(~['tip', 'text'].indexOf(value))
    }
  },
  validateIcon: Object,
  manual: {
    type: Boolean,
    default: false
  },
  appendToBody: {
    type: Boolean,
    default: undefined
  },
  popperOptions: {
    type: Object,
    default: () => ({})
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  showAutoWidth: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: true
  },
  validateTag: {
    type: Boolean,
    default: false
  },
  overflowTitle: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Form',
  componentName: 'Form',
  props: formProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
