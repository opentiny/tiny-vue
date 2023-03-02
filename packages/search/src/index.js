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
import { $prefix, $props, $setup } from '@opentiny/vue-common'
import { t } from '@opentiny/vue-locale'
import PCTemplate from './pc'
import MobileTemplate from './mobile'

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

export default {
  name: $prefix + 'Search',
  props: {
    ...$props,
    mini: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: () => t('ui.search.placeholder')
    },

    /**
     * 设置为透明模式，配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景
     */
    transparent: {
      type: Boolean,
      default: false
    },

    /**
     * 搜索的类型选项，格式为[{text:'文档',value:1},...]，不配置时类型选择固定显示为All
     */
    searchTypes: {
      type: Array,
      default: () => []
    },

    /**
     * 设置搜索输入框内的提示占位文本
     */
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: String,
    clearable: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: '1'
    },

    /**
     * 配置搜索输入框enter键,enter按下触发搜索
     */
    isEnterSearch: {
      type: Boolean,
      default: false
    },
    /**
     * 配置主题色，primary:蓝 gray:灰
     */
    themeType: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'gray'].includes(value)
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
