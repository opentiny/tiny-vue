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
import { constants } from './service'
import template from 'virtual-template?pc|mobile=pc|mobile-first'

export const loadingProps = {
  ...$props,
  type: {
    type: String,
    validator: (value: string) => Boolean(~['primary', 'simple'].indexOf(value))
  },
  loadtext: {
    type: String,
    default: () => constants.LOAD_ICON_TEXT
  },
  _constants: {
    type: Object,
    default: () => constants
  }
}


export default defineComponent({
  name: $prefix + 'Loading',
  emits: [],
  props: loadingProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
