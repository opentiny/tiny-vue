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
import { t } from '@opentiny/vue-locale'
import template from 'virtual-template?pc|mobile|mobile-first'

export default defineComponent({
  name: $prefix + 'Search',
  props: {
    ...$props,
    mini: {
      type: Boolean,
      default: false
    },
    big: {
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
      default: true
    },
    /**
     * 配置主题色，primary:蓝 gray:灰
     */
    themeType: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'gray'].includes(value)
    },
    showButton: {
      type: Boolean,
      default: false
    },
    changeBgColor: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
