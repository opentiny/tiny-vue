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
import type { PropType } from 'vue'
import type { IButtonGroupNode } from '@opentiny/vue-renderless/types/button-group.type'

export const buttonGroupProps = {
  ...$props,
  size: String,
  data: {
    type: Array as PropType<IButtonGroupNode[]>,
    default: () => []
  },
  plain: Boolean,
  modelValue: [String, Number],
  disabled: Boolean,
  valueField: {
    type: String,
    default: 'value'
  },
  textField: {
    type: String,
    default: 'text'
  },
  showMore: Number,
  showEdit: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: true
  }
}

export default defineComponent({
  name: $prefix + 'ButtonGroup',
  provide() {
    return {
      buttonGroup: this
    }
  },
  props: buttonGroupProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
