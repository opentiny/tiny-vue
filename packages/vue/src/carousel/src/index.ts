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
import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {
  CHILD_NAME: $prefix + 'CarouselItem'
}

export default defineComponent({
  name: $prefix + 'Carousel',
  componentName: 'Carousel',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    indicatorPosition: String,
    arrow: {
      type: String,
      default: 'hover'
    },
    type: {
      type: String,
      validator: (value) => !value || ~['card', 'vertical'].indexOf(value)
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({
      props,
      context,
      template
    })
  }
})
