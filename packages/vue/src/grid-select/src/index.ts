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
  name: $prefix + 'GridSelect',
  componentName: 'GridSelect',
  props: {
    ...$props,
    // 基础 props
    clearable: Boolean,
    disabled: Boolean,
    size: String,
    placeholder: String,
    readonly: Boolean,
    modelValue: {},
    multiple: Boolean,
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
    filterable: Boolean,
    filterMethod: Function,
    searchable: Boolean,
    // 远程搜索
    remote: Boolean,
    remoteMethod: Function,
    remoteConfig: {
      type: Object,
      default() {
        return {
          showIcon: false,
          clearData: false,
          autoSearch: false
        }
      }
    },
    reserveKeyword: Boolean,
    extraQueryParams: {
      type: [Object, String, Boolean, Array, Number],
      default: ''
    },
    initQuery: Function,
    // 表格配置
    gridOp: {
      type: Object,
      default: () => ({})
    },
    selectConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
    radioConfig: {
      type: Object,
      default() {
        return {
          checkMethod() {
            return true
          }
        }
      }
    },
    // 字段映射
    textField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    // 多选相关
    multipleLimit: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
