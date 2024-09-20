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
import template from 'virtual-template?mobile'

const $constants = {
  DEFAULT: 'default',
  SIMPLE: 'simple',
  LEGEND: 'legend',
  CLASSIC: 'classic',
  FASHION: 'fashion'
}

export default defineComponent({
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
      validator: (value: string) => !!$constants[value.toUpperCase()]
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
    },

    // mobile
    leftWidth: {
      type: [Number, String],
      default: 60
    },
    rightWidth: {
      type: [Number, String],
      default: 44
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
