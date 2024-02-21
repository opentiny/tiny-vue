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
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'DropTimes',
  props: {
    ...$props,
    modelValue: {},
    placeholder: {
      type: String,
      default: ''
    },
    tabindex: {
      type: String,
      default: '1'
    },
    size: String,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 24 * 60
    },
    step: {
      type: Number,
      default: 15
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
