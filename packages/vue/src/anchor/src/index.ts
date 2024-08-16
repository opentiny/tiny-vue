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
import { $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const anchorProps = {
  isAffix: {
    type: Boolean,
    default: false
  },
  links: {
    type: Array,
    default: () => []
  },
  containerId: {
    type: String,
    default: ''
  },
  markClass: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'line'
  }
}

export default defineComponent({
  name: $prefix + 'Anchor',
  props: anchorProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
