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
  name: $prefix + 'Calendar',
  props: {
    ...$props,

    /**
     * @property {String} [mode='month'] - 显示模式，month|year 可选
     */
    mode: {
      type: String,
      default: 'month',
      validator: (value: string) => Boolean(~['month', 'year'].indexOf(value))
    },

    /**
     * @property {Number} [year=getFullYear()] - 指定年份，默认今年
     */
    year: {
      type: Number,
      default() {
        return new Date().getFullYear()
      }
    },

    /**
     * @property {Number} [month=getMonth()] - 指定月份，默认当月
     */
    month: {
      type: Number,
      default() {
        return new Date().getMonth() + 1
      }
    },

    /**
     * @property {Array} events - 事件列表
     * @example
     * [{ time: 1534297845236, title: '消息', content: '这是一条消息', type: 'primary' },
     * { time: 1534297845236, title: '消息', content: '还有', type: 'info' }]
     * type 类型： warning、error、info、success
     */
    events: Array,

    /**
     * @property {Boolean} [showSelected=false] - 显示选中的日期
     */
    showSelected: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
