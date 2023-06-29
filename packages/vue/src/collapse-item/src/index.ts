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
  INTERVAL: 50
}

export default defineComponent({
  name: $prefix + 'CollapseItem',
  componentName: 'CollapseItem',
  inject: ['collapse'],
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    title: String,
    titleRight: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid
      }
    },
    disabled: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
