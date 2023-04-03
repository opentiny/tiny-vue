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

const $constants = {
  PROGRESS_TYPE: {
    LINE: 'line',
    CIRCLE: 'circle',
    DASHBOARD: 'dashboard'
  },
  PROGRESS_STATUS: {
    SUCCESS: 'success',
    EXCEPTION: 'exception',
    WARNING: 'warning'
  },
  STATUS_TO_COLOR: {
    success: '#13ce66',
    exception: '#ff4949',
    warning: '#e6a23c'
  },
  STATUS_DEFAULT_COLOR: '#20a0ff',
  ICON_CIRCLE_WARNING: 'icon-warning',
  ICON_CIRCLE_SUCCESS: 'icon-successful',
  ICON_CIRCLE_EXCEPTION: 'icon-error',
  ICON_SUCCESS: 'icon-yes',
  ICON_EXCEPTION: 'icon-close',
  ICON_WARNING: 'icon-warning'
}

export default defineComponent({
  name: $prefix + 'Progress',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    color: {
      type: [String, Array, Function],
      default: ''
    },
    format: Function,
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val: number) => val >= 0 && val <= 100
    },
    showText: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      validator: (value: string) => !!$constants.PROGRESS_STATUS[value.toUpperCase()]
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    textInside: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: $constants.PROGRESS_TYPE.LINE,
      validator: (value: string) => !!$constants.PROGRESS_TYPE[value.toUpperCase()]
    },
    width: {
      type: Number,
      default: 126
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
