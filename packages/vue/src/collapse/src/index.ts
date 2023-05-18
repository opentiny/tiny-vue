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
  COMPONENT_NAME: {
    Collapse: 'Collapse'
  },
  EVENT_NAME: {
    CollapseItemClick: 'collapse-item.click'
  }
}

export default defineComponent({
  name: $prefix + 'Collapse',
  componentName: 'Collapse',
  provide() {
    return {
      collapse: this
    }
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    accordion: Boolean,
    beforeClose: Function,
    modelValue: {
      type: [Array, String, Number],
      default() {
        return []
      }
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
