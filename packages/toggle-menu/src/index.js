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
  LOCALE_PLACEHOLDER: 'ui.toggleMenu.placeholder'
}

const template = () => {
  return PCTemplate
}

export default {
  name: $prefix + 'ToggleMenu',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    data: Array,
    placeholder: {
      type: String,
      default: ''
    },
    icon: Object,
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    showFilter: {
      type: Boolean,
      default: true
    },
    automaticFiltering: {
      type: Boolean,
      default: true
    },
    props: {
      default: () => ({ children: 'children', disabled: 'disabled', label: 'label' })
    },
    getMenuDataSync: Function,
    accordion: Boolean,
    defaultCheckedKeys: Array,
    showCheckbox: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
