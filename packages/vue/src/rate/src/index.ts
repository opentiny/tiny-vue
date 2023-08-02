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
import { t } from '@opentiny/vue-locale'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  RATENODECLS: 'tiny-rate__star',
  ICON_PREFIXCLS: '.tiny-rate__icon',
  DECIMALCLS: 'tiny-rate__decimal'
}

export default defineComponent({
  name: $prefix + 'Rate',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default: () => ['#FFBB33', '#FFBB33', '#FFBB33']
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledVoidColor: {
      type: String,
      default: 'rgba(25,25,25,0.05)'
    },
    disabledVoidIconClass: {
      type: String,
      default: 'icon-star-active'
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    iconClasses: {
      type: Array,
      default: () => ['icon-star-active', 'icon-star-active', 'icon-star-active']
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 5
    },
    modelValue: {
      type: Number,
      default: 0
    },
    radio: {
      // 是否单选其他形态
      type: Boolean,
      default: false
    },
    scoreTemplate: {
      type: String,
      default: '{value}'
    },
    showScore: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '16px'
    },
    space: {
      type: String,
      default: '24px'
    },
    textColor: {
      type: String,
      default: '#191919'
    },
    textOnBottom: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Array,
      default: () => [t('ui.rate.level.poor'), t('ui.rate.level.fair'), t('ui.rate.level.average'), t('ui.rate.level.good'), t('ui.rate.level.excellent')]
    },
    voidColor: {
      type: String,
      default: 'rgba(25,25,25,0.05)'
    },
    voidIconClass: {
      type: String,
      default: 'icon-star-active'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)
