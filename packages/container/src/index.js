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

const $constants = {
  DEFAULT: 'default',
  SIMPLE: 'simple',
  LEGEND: 'legend',
  CLASSIC: 'classic',
  FASHION: 'fashion'
}

const template = () => {
  return PCTemplate
}

export default {
  name: $prefix + 'Container',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    pattern: {
      type: String,
      default: 'default',
      validator: (value) => !!$constants[value.toUpperCase()]
    },
    headerHeight: {
      type: [Number, String],
      default: 60
    },
    asideWidth: {
      type: [Number, String],
      default: 200
    },
    footerHeight: {
      type: [Number, String],
      default: 60
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
