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
  ANIMATION_DURATION: 'animation-duration'
}

export default defineComponent({
  name: $prefix + 'ScrollText',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    text: {
      type: String,
      default: 'ScrollText'
    },
    time: {
      type: Number,
      default: 5
    },
    styles: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'left',
      validator: (value: string) => Boolean(~['up', 'left', 'down', 'right'].indexOf(value))
    },
    hoverStop: {
      type: Boolean,
      default: true
    },
    widthAdapt: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
