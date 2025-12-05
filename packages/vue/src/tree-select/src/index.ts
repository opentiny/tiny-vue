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
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'TreeSelect',
  componentName: 'TreeSelect',
  props: {
    ...$props,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    modelValue: {},
    multiple: Boolean,
    textField: {
      type: String,
      default: 'label'
    },
    treeOp: {
      type: Object,
      default: () => ({})
    },
    valueField: {
      type: String,
      default: 'value'
    },
    // 基础 props
    size: String,
    disabled: Boolean,
    placeholder: String,
    readonly: Boolean,
    // 弹框相关
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    dropStyle: {
      type: Object,
      default: () => ({})
    },
    // 标签相关
    collapseTags: Boolean,
    copyable: Boolean,
    textSplit: {
      type: String,
      default: ','
    },
    hoverExpand: Boolean,
    clickExpand: Boolean,
    showTips: {
      type: Boolean,
      default: true
    },
    // 搜索和过滤
    searchable: Boolean,
    // 多选相关
    multipleLimit: {
      type: Number,
      default: 0
    },
    // 下拉图标
    dropdownIcon: {
      type: [Object, String],
      default: ''
    },
    // 标签类型
    tagType: {
      type: String,
      default: ''
    },
    // 输入框类型
    inputBoxType: {
      type: String,
      default: 'input',
      validator: (value: string) => ['input', 'underline'].includes(value)
    },
    // 多行默认最大显示行数
    maxVisibleRows: {
      type: Number,
      default: 1
    },
    // 原生属性
    name: String,
    autocomplete: {
      type: String,
      default: 'off'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
