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
  name: $prefix + 'IpAddress',
  props: {
    ...$props,
    size: String,

    /**
     * @property {String} value - 显示值
     */
    modelValue: String,

    /**
     * @property {String} [type = IPv4]  - IP地址输入组件类型（'IPv4', 'IPv6',）可选择
     */
    type: {
      type: String,
      default: 'IPv4',
      validator: (value) => ~['IPv4', 'IPv6'].indexOf(value)
    },

    /**
     * @property {Boolean} readonly - 只读
     */
    readonly: Boolean,

    /**
     *  @property {Boolean} disabled - 禁用
     */
    disabled: Boolean,

    /**
     * @property {String, Object} [delimiter = .] - 组件IP段显示的分隔符改为图标
     */
    delimiter: {
      type: [String, Object],
      default: 'icon-dot-ipv4'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
