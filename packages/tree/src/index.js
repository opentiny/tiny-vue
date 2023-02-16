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
  EMPTY_TEXT_LOCAL: 'ui.tree.emptyText'
}

const template = () => PCTemplate

export default {
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
      default() {
        return {
          children: 'children',
          label: 'label',
          disabled: 'disabled'
        }
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
    shrinkIcon: Object
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
