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

export default defineComponent({
  name: $prefix + 'Col',
  props: {
    ...$props,

    /**
     * @property {number} [span=12] - 栅格占据的列数（一行以12栅格划分）
     */
    span: {
      type: Number,
      default: 12,
      validator: (value: number) => Math.floor(value) === value && value > 0 && value <= 24
    },

    /**
     * @property {number} [offset=0] - 栅格左侧的间隔格数
     */
    offset: {
      type: Number,
      default: 0,
      validator: (value: number) => value >= 0
    },

    /**
     * @property {no} [no=0] - 排序编号
     */
    no: {
      type: Number,
      default: 0
    },

    /**
     * @property {number} [move=0] - 栅格向左向右移动格数
     */
    move: {
      type: Number,
      default: 0
    },

    /**
     * @property {(number|object)} xs - <768px 响应式栅格数或者栅格属性对象
     */
    xs: {
      type: [Number, Object]
    },

    /**
     * @property {(number|object)} sm - ≥768px 响应式栅格数或者栅格属性对象
     */
    sm: {
      type: [Number, Object]
    },

    /**
     * @property {(number|object)} md - ≥992px 响应式栅格数或者栅格属性对象
     */
    md: {
      type: [Number, Object]
    },

    /**
     * @property {(number|object)} lg - ≥1200px 响应式栅格数或者栅格属性对象
     */
    lg: {
      type: [Number, Object]
    },

    /**
     * @property {(number|object)} xl - ≥1920px 响应式栅格数或者栅格属性对象
     */
    xl: {
      type: [Number, Object]
    },

    /**
     * @property {string} [tag=div] - 自定义元素标签
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
