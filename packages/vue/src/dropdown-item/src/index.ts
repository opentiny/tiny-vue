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
  label: String,
  level: String,
  titleClass: String,
  options: {
    type: Array,
    default: () => []
  },
  // mobile 属性，可选值 selection | filter | sort
  type: {
    type: String,
    default: 'selection'
  },
  // 是否选中，勾选状态功能
  selected: {
    type: Boolean,
    default: false
  },
  // 暂没找到使用的地方
  selectedField: {
    type: String,
    default: 'selected'
  },
  // 暂没找到使用的地方
  multiStage: {
    type: Boolean,
    default: false
  },
  currentIndex: {
    type: Number,
    default: () => -1
  },
  tooltipContent: {
    type: String,
    default: ''
  },
  // 以下为 tiny 新增
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
