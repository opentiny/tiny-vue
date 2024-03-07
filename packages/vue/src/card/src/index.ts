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
import template from 'virtual-template?pc|mobile-first'
import { IconEllipsis } from '@opentiny/vue-icon'

const $constants = {
  CARD_GROUP: 'CardGroup'
}
export const cardProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {},
  src: String,
  title: String,
  customClass: String,
  height: String,
  label: {},
  autoWidth: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: () => {
      return []
    }
  },
  iconMore: {
    type: [Object, String],
    default: () => {
      return IconEllipsis()
    }
  },
  size: {
    type: String,
    default: 'medium'
  },
  status: {
    type: String,
    default: 'default'
  },
  checkType: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Card',
  props: cardProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
