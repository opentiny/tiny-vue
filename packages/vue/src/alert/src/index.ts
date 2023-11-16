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
import template from 'virtual-template?pc|mobile|mobile-first'

export const $constants = {
  ICON_MAP: {
    success: 'icon-success',
    error: 'icon-error',
    info: 'icon-help',
    warning: 'icon-warning'
  },
  TITLE_MAP: {
    success: 'ui.alert.success',
    error: 'ui.alert.error',
    info: 'ui.alert.info',
    warning: 'ui.alert.warning'
  },
  CONTENT_MAXHEUGHT: 252
}

export const alertProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  icon: [String, Object],
  type: {
    type: String,
    default: 'info'
  },
  size: {
    type: String,
    default: 'normal'
  },
  description: {
    type: String,
    default: ''
  },
  title: {
    type: String
  },
  center: Boolean,
  showIcon: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ''
  },
  singleLine: {
    type: Boolean,
    default: false
  },
  scrolling: {
    type: Boolean,
    default: false
  },
  showFoldable: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array]
}

export default defineComponent({
  name: $prefix + 'Alert',
  props: alertProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
