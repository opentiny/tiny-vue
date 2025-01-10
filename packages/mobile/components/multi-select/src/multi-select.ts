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
import type { PropType } from '@mobile-root/common'

export const multiSelectProps = {
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
    default: false
  },
  maskOptions: {
    type: Object,
    default: () => ({})
  }
}
