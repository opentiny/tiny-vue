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
import { $prefix, $props, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc'

const template = () => PCTemplate

export default {
  name: $prefix + 'Link',
  props: {
    ...$props,
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    href: String,
    icon: [Object, String],
    disabled: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
