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
import template from 'virtual-template?pc|mobile|mobile-first'

export const buttonProps = {
  ...$props,
  /** 展示按钮不同的状态，设置为text则展示为文本按钮。可取值为：'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'  */
  type: {
    type: String,
    default: 'default'
  },
  /** 设置原生的tabindex属性 */
  tabindex: { type: String, default: '0' },
  /** 按钮左侧展示的图标，接收为Icon组件  */
  icon: {
    type: [Object, String],
    default: ''
  },
  /** 按钮显示的文本 */
  text: {
    type: String,
    default: ''
  },
  /** 设置按钮禁用时间，防止重复提交，单位毫秒 */
  resetTime: {
    type: Number,
    default: 1000
  },
  /** 对应按钮原生 type 属性  */
  nativeType: {
    type: String,
    default: 'button'
  },
  /** 当配置href后，点击按钮则更新 location.href 进行页面跳转  */
  href: {
    type: String,
    default: ''
  },
  /** 定义按钮尺寸 */
  size: {
    type: String,
    default: '',
    validator(val: string) {
      return ['large', 'medium', 'small', 'mini', ''].includes(val)
    }
  },
  /** 是否圆角按钮 */
  round: Boolean,
  /** 是否朴素按钮  */
  plain: Boolean,
  /** 是否圆形按钮  */
  circle: Boolean,
  /** 是否加载中状态 */
  loading: Boolean,
  /** 是否被禁用按钮 */
  disabled: Boolean,
  /** 是否默认聚焦 */
  autofocus: Boolean,
  /** 自定义类名， 仅 mobile-first 模板时有效 */
  customClass: {
    type: String,
    default: ''
  },
  /** 设置通栏按钮,宽度充满水平方向， 仅 mobile-first 模板时有效  */
  banner: {
    type: Boolean,
    default: false
  },
  /** 是否幽灵按钮 */
  ghost: Boolean,
  /** 点击事件 */
  onClick: {
    type: Function as propType<(ev: MouseEvent) => void>
  }
}

export default defineComponent({
  name: $prefix + 'Button',
  inject: {
    buttonGroup: {
      default: ''
    }
  },

  props: buttonProps,
  slots: Object as SlotsType<{
    /** 默认插槽 */
    default: {}
  }>,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
