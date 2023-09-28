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

export default defineComponent({
  name: $prefix + 'Panel',
  props: {
    ...$props,
    expand: {
      type: Boolean,
      default: true
    },
    foot: {
      type: String
    },
    head: {
      type: String
    },
    iconOpen: {
      type: String,
      default: 'icon-chevron-down'
    },
    iconClose: {
      type: String,
      default: 'icon-chevron-right'
    },
    isToggle: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'panel'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
