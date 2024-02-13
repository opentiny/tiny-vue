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

export const floatButtonProps = {
  ...$props,
  trigger: {
    default: 'click',
    type: String,
    validator(val: string) {
      return ['click', 'hover', ''].includes(val)
    }
  },
  open: Boolean,
  shape: {
    type: String,
    default: 'circle',
    validator(val: string) {
      return ['circle', 'square'].includes(val)
    }
  },
  top: {
    type: String,
    default: ''
  },
  bottom: {
    type: String,
    default: '20px'
  },
  right: {
    type: String,
    default: '20px'
  },
  left: {
    type: String,
    default: ''
  },

  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },

  type: {
    type: String,
    default: 'default'
  },
  icon: {
    type: [Object, String],
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  tooltip: {
    type: String,
    default: ''
  },
  resetTime: {
    type: Number,
    default: 1000
  },

  size: {
    type: String,
    default: '',
    validator(val: string) {
      return ['large', 'medium', 'small', 'mini', ''].includes(val)
    }
  },
  loading: Boolean,
  disabled: Boolean,
  backTop: Boolean,
  // 以下属性只有backTop设置为true才生效
  // 滚动高度达到此参数值才出现悬浮按钮
  visibilityHeight: {
    default: 400,
    type: Number
  },
  // 设置需要监听其滚动事件的元素
  element: {
    default: document.body,
    type: HTMLElement
  }
}

export default defineComponent({
  name: $prefix + 'FloatButton',
  inject: {
    buttonGroup: {
      default: ''
    }
  },
  props: floatButtonProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
