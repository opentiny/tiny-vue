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
import template from 'virtual-template?mobile'

export const $constants = {
  ITEM_NAME: '.user-head-item'
}

export const userHeadProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  /**
   * @property {Boolean} [min=false] - 小尺寸模式
   */
  min: Boolean,

  /**
   * @property {Boolean} [round=true] - 圆形模式
   */
  round: Boolean,

  /**
   * @property {String} [color=#ffffff] - 文字颜色
   */
  color: {
    type: String,
    default: '#ffffff'
  },

  /**
   * @property {String} [backgroundColor=#BBBBBB] - 背景色
   */
  backgroundColor: {
    type: String,
    default: '#B5BBC1'
  },

  /**
   * @property {String} [type=label] - 头像类型，icon|image|label 可选
   */
  type: {
    type: String,
    default: 'label',
    validator: (value: string) => Boolean(~['icon', 'image', 'label'].indexOf(value))
  },

  /**
   * @property {String} - 头像资源
   * type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径
   */
  value: {
    type: [Object, String],
    default: null
  },

  /**
   * @property {String} - 头像资源
   * type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径
   */
  modelValue: {
    type: [Object, String],
    default: null
  },

  /**
   * @property {Number} - 消息计数
   */
  messageTotal: Number,

  /**
   * @property {String} [messageType=details] - 消息类型 details|basic 可选
   */
  messageType: {
    type: String,
    default: 'details',
    validator: (value: string) => Boolean(~['details', 'basic'].indexOf(value))
  },

  /**
   * @property {Number} [messageUpperLimit=0] - 消息显示上限
   */
  messageUpperLimit: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 40
  }
}

export default defineComponent({
  name: $prefix + 'UserHead',
  props: userHeadProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
