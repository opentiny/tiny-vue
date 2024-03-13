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
import type { PropType } from '@opentiny/vue-common'
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile'
import { t } from '@opentiny/vue-locale'

export default defineComponent({
  name: $prefix + 'MultiSelect',
  inject: {},
  props: {
    ...$props,
    dataSource: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: [String, Array],
      default: ''
    },
    searchValue: {
      type: String,
      default: ''
    },
    defaultSelectedArray: {
      type: Array,
      default: () => []
    },
    filterable: {
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String,
      default: () => t('ui.search.placeholder')
    },
    type: {
      type: String as PropType<'list' | 'wheel'>,
      default: 'list'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
