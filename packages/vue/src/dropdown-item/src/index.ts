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

export const $constants = {
  ICON_MAP: {
    leftWardArrow: 'icon-delta-left'
  }
}

export const dropdownItemProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  icon: [String, Object],
  disabled: Boolean,
  divided: Boolean,
  itemData: {
    type: [String, Object],
    default: ''
  },
  title: String,
  label: {
    type: String,
    default: ''
  },
  level: String,
  titleClass: String,
  options: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'selection'
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
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  textField: {
    type: String,
    default: 'label'
  },
  tip: {
    type: [String, Function],
    default: ''
  },
  tipPosition: {
    type: String,
    default: 'right'
  }
}

export default defineComponent({
  name: $prefix + 'DropdownItem',
  componentName: 'TinyDropdownItem',
  props: dropdownItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
