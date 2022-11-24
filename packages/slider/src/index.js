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
import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc'
import MobileTemplate from './mobile'

const $constants = {
  TIP_HEIGHT: 22,
  BUTTON_SIZE: 28,
  HALF_BAR_HEIGHT: 2,
  PC_TIP_CLS: 'tiny-slider__tips',
  PC_SLIDER_CLS: 'tiny-slider',
  PC_RANGE_CLS: 'tiny-slider__range',
  PC_BUTTON_CLS: 'tiny-slider__handle',
  MOBILE_TIP_CLS: 'tiny-mobile-slider__tips',
  MOBILE_SLIDER_CLS: 'tiny-mobile-slider',
  MOBILE_RANGE_CLS: 'tiny-mobile-slider__range',
  MOBILE_BUTTON_CLS: 'tiny-mobile-slider__handle',
  Mode: 'pc',
  tipCls(mode) {
    return mode === this.Mode ? this.PC_TIP_CLS : this.MOBILE_TIP_CLS
  },
  sliderCls(mode) {
    return mode === this.Mode ? this.PC_SLIDER_CLS : this.MOBILE_SLIDER_CLS
  },
  rangeCls(mode) {
    return mode === this.Mode ? this.PC_RANGE_CLS : this.MOBILE_RANGE_CLS
  },
  buttonCls(mode) {
    return mode === this.Mode ? this.PC_BUTTON_CLS : this.MOBILE_BUTTON_CLS
  }
}

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

export default {
  name: $prefix + 'Slider',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '300px'
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    },
    numPages: {
      type: Number,
      default: 1
    },
    range: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    showTip: {
      type: Boolean,
      default: true
    },
    step: {
      type: Number,
      default: 1
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
