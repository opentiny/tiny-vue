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
import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc'
import MobileTemplate from './mobile'

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

export default {
  name: $prefix + 'Form',
  componentName: 'Form',
  props: {
    ...$props,
    model: Object,
    rules: Object,
    inlineMessage: Boolean,
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
      default: false
    },
    labelPosition: {
      type: String,
      default: 'right',
      validator: (value) => ~['left', 'top', 'right'].indexOf(value)
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
      validator(value) {
        return ~['tip', 'text'].indexOf(value)
      }
    },
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
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
