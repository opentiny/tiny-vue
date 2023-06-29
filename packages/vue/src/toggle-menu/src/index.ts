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

const $constants = {
  LOCALE_PLACEHOLDER: 'ui.toggleMenu.placeholder'
}

export default defineComponent({
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
    getMenuDataSync: Function, // deprecated v3.4.0废弃, v3.16.0移除；移除原因：如果是同步数据则和:data功能重复
    getMenuDataAsync: Function,
    accordion: Boolean,
    defaultCheckedKeys: Array,
    showCheckbox: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
