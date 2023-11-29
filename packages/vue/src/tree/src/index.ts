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
  EMPTY_TEXT_LOCAL: 'ui.tree.emptyText'
}

export default defineComponent({
  name: $prefix + 'Tree',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    accordion: Boolean,
    allowDrag: Function,
    allowDrop: Function,
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    checkDescendants: {
      type: Boolean,
      default: false
    },
    checkOnClickNode: Boolean,
    checkStrictly: Boolean,
    currentNodeKey: [String, Number],
    data: {
      type: Array
    },
    dataset: Object,
    defaultCheckedKeys: Array,
    defaultExpandAll: Boolean,
    defaultExpandedKeys: Array,
    defaultExpandedKeysHighlight: [Number, String],
    draggable: {
      type: Boolean,
      default: false
    },
    emptyText: String,
    expandIcon: Object,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    filterNodeMethod: Function,
    highlightCurrent: Boolean,
    icon: Object,
    iconTriggerClickNode: {
      type: Boolean,
      default: true
    },
    indent: {
      type: Number,
      default: 16
    },
    lazy: {
      type: Boolean,
      default: false
    },
    load: Function,
    nodeKey: String,
    parentKey: String,
    props: {
      default(context) {
        const ctx = this || context
        const { lazy } = ctx
        const defaultProps = {
          children: 'children',
          label: 'label',
          disabled: 'disabled'
        }
        lazy && Object.assign(defaultProps, { isLeaf: 'isLeaf' })
        return defaultProps
      }
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    showContextmenu: {
      type: Boolean,
      default: false
    },
    showRadio: {
      type: Boolean,
      default: false
    },
    showNumber: {
      type: Boolean,
      default: false
    },
    collapsible: {
      type: Boolean,
      default: true
    },
    showCheckEasily: {
      type: Boolean,
      default: false
    },
    nodeHeight: Number,
    shrinkIcon: Object,
    expandIconColor: String,
    shrinkIconColor: String,
    size: {
      type: String,
      default: 'medium'
    },
    deleteDisabledKeys: Array,
    editDisabledKeys: Array,
    addDisabledKeys: Array,
    theme: String,
    viewType: {
      type: String,
      default: 'tree',
      validator: (value) => ~['tree', 'plain'].indexOf(value)
    },
    // 平铺视图时，是否显示下面的辅助信息
    showAuxi: {
      type: Boolean,
      default: true
    },
    pathSplit: {
      type: String,
      default: '/'
    },
    filterPlainMethod: Function,
    afterLoad: Function,
    lazyCurrent: Boolean,
    baseIndent: {
      type: Number,
      default: 0
    },
    showLine: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
