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

const $constants = {
  PC_PREFIXCLS: 'tiny-popconfim',
  MOBILE_PREFIXCLS: 'tiny-mobile-popconfim',
  Mode: 'pc',
  prefixcls(mode) {
    return mode === this.Mode ? this.PC_PREFIXCLS : this.MOBILE_PREFIXCLS
  },
  ICON_MAP: {
    success: 'icon-success',
    error: 'icon-error',
    info: 'icon-info-solid',
    warning: 'icon-warning'
  }
}

export default defineComponent({
  name: $prefix + 'Popconfim',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    message: String,
    customClass: String,
    trigger: {
      type: String,
      default: 'hover',
      validator: (value: string) => ['click', 'hover'].includes(value)
    },
    cancelButton: {
      type: Boolean,
      default: true
    },
    title: String,
    placement: {
      type: String,
      default: 'top'
    },
    width: {
      type: [String, Number],
      default: '350'
    },
    type: [String, Object]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
