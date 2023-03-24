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
  name: $prefix + 'SelectDropdown',
  componentName: 'SelectDropdown',
  inject: ['select'],
  props: {
    ...$props,
    appendToBody: {
      type: Boolean,
      default: () => true
    },
    arrowOffset: {
      type: Number,
      default: () => 35
    },
    boundariesPadding: {
      default: () => 0
    },
    isDropInheritWidth: Boolean,
    modelValue: Boolean,
    offset: {
      default: () => 0
    },
    placement: {
      default: () => 'bottom-start'
    },
    popper: {},
    popperOptions: {
      default: () => ({ gpuAcceleration: false })
    },
    reference: {},
    transformOrigin: {
      type: [Boolean, String],
      default: () => true
    },
    visibleArrow: {
      default: () => false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
