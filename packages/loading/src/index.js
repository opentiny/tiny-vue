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
import { constants, tinyMode } from './service'
import PCTemplate from './pc'
import MobileTemplate from './mobile'

const template = () => {
  if (process.env.TINY_MODE === 'pc') {
    return PCTemplate
  } else if (process.env.TINY_MODE === 'mobile') {
    return MobileTemplate
  } else {
    return tinyMode === 'mobile' ? MobileTemplate : PCTemplate
  }
}

export default {
  name: $prefix + 'Loading',
  emits: [],
  props: {
    ...$props,
    type: {
      type: String,
      validator: (value) => ~['primary', 'simple'].indexOf(value)
    },
    loadtext: {
      type: String,
      default: () => constants.LOAD_ICON_TEXT
    },
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}