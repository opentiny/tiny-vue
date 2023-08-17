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

export default defineComponent({
  name: $prefix + 'DropdownMenu',
  componentName: $prefix + 'DropdownMenu',
  props: {
    ...$props,
    multiStage: {
      type: Boolean,
      default: false
    },
    checkedStatus: {
      type: Boolean,
      default: false
    },
    visibleArrow: {
      type: Boolean,
      default: false
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    placement: {
      type: String,
      default: 'bottom-end' // aui的默认值为bottom-start
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    activeColor: String,
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'down'
    },
    duration: {
      type: [Number, String],
      default: 0.2
    },
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: [Number, String],
    maxHeight: {
      type: [Number, String],
      default: '400'
    },
    options: {
      type: Array,
      default: () => []
    },
    textField: {
      type: String,
      default: 'label'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
