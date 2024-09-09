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
import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export const linkProps = {
  ...$props,
  /** 文本链接类型：'primary' | 'success' | 'warning' | 'danger' | 'info' */
  type: {
    type: String,
    default: 'default'
  },
  /** 显示内容 */
  value: String,
  /** 是否下划线 */
  underline: {
    type: Boolean,
    default: true
  },
  /** 原生 href 属性 */
  href: String,
  /** 自定义图标 */
  icon: [Object, String],
  /** 是否禁用状态 */
  disabled: Boolean
}

export default defineComponent({
  name: $prefix + 'Link',
  props: linkProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
