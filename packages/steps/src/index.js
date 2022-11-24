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

const template = () => {
  return PCTemplate
}

export default {
  name: $prefix + 'Steps',
  props: {
    ...$props,
    nameField: {
      type: String,
      default: 'name'
    },
    countField: {
      type: String,
      default: 'count'
    },
    statusField: {
      type: String,
      default: 'status'
    },
    data: [Object, Array],
    space: Number,
    active: {
      type: Number,
      default: -1
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
