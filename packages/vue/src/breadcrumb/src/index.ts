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

const $constants = {
  EVENT_NAME: {
    breadcrumbItemSelect: 'breadcrumbItemSelect'
  }
}

export default defineComponent({
  name: $prefix + 'Breadcrumb',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    separator: {
      type: String,
      default: '>'
    },
    separatorIcon: {
      type: Object
    },
    textField: {
      type: String,
      default: 'label'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
