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
import template from 'virtual-template?pc|mobile'

export default defineComponent({
  inheritAttrs: true,
  name: $prefix + 'Popover',
  props: {
    ...$props,
    appendToBody: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    closeDelay: {
      type: Number,
      default: 200
    },
    content: String,
    disabled: Boolean,
    modelValue: Boolean,
    offset: {
      default: 0
    },
    openDelay: {
      type: Number,
      default: 0
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    popper: {},
    popperClass: String,
    popperOptions: {
      type: Object,
      default: () => ({ gpuAcceleration: false })
    },
    reference: {},
    tabindex: {
      type: Number,
      default: 0
    },
    title: String,
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    trigger: {
      type: String,
      default: 'click',
      validator: (value: string) => Boolean(~['click', 'focus', 'hover', 'manual'].indexOf(value))
    },
    visibleArrow: {
      default: true
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    maxHeight: {
      type: [String, Number]
    },
    listData: [Object, Array]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
