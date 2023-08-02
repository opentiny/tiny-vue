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

const $constants = {
  ICON_MAP: {
    leftWardArrow: 'icon-delta-left'
  }
}

export default defineComponent({
  name: $prefix + 'DropdownItem',
  componentName: 'TinyDropdownItem',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    icon: [String, Object],
    disabled: Boolean,
    divided: Boolean,
    command: {},
    title: String,
    titleClass: String,
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'selection'
    },
    label: {
      type: String,
      default: ''
    },
    itemData: {
      type: Object,
      default: () => ({})
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    textField: {
      type: String,
      default: 'label'
    },
    selected: {
      type: Boolean,
      default: false
    },
    selectedField: {
      type: String,
      default: 'selected'
    },
    multiStage: {
      type: Boolean,
      default: false
    },
    currentIndex: {
      type: Number,
      default: () => -1
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
