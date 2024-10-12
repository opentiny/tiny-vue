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
import { iconSearch } from '@opentiny/vue-icon'
import template from 'virtual-template?pc'

const $constants = {
  DIALOG_TITLE: 'ui.linkMenu.title'
}

export default defineComponent({
  name: $prefix + 'LinkMenu',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    icon: Object,
    searchIcon: {
      type: Object,
      default: () => iconSearch()
    },
    data: {
      type: Array
    },
    maxItem: {
      type: Number,
      validator: (value: number) => value >= 0
    },
    title: {
      type: String,
      default: ''
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    wrap: {
      type: Boolean,
      default: false
    },
    props: {
      default: () => ({ children: 'children', disabled: 'disabled', label: 'label' })
    },
    getMenuDataSync: Function,
    keepSelectedNodes: {
      type: Boolean,
      default: true
    },
    expandIcon: Object,
    shrinkIcon: Object,
    shrinkIconColor: {
      type: String,
      default: ''
    },
    expandIconColor: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
