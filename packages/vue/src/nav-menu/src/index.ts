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

export const navMenuProps = {
  ...$props,
  data: Array,
  overflow: {
    type: String,
    default: 'auto',
    validator(value) {
      return /^(auto|retract|fixed|hidden)$/.test(value)
    }
  },
  parentKey: String,
  beforeSkip: Function,
  fetchMenuData: Function,
  fields: Object,
  prevent: {
    type: Boolean,
    default: false
  },
  allowFullUrl: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'NavMenu',
  props: navMenuProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
