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

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

const $constants = {
  MODAL_STATUS: {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    LOADING: 'loading'
  },
  NODAL_TYPE: {
    ALERT: 'alert',
    CONFIRM: 'confirm',
    MESSAGE: 'message'
  },
  STATUS_MAPPING_CLASSS: {
    INFO: 'tiny-modal-svg__info',
    SUCCESS: 'tiny-modal-svg__success',
    WARNING: 'tiny-modal-svg__warning',
    ERROR: 'tiny-modal-svg__error',
    LOADING: 'tiny-modal-svg__refresh roll'
  }
}

export default {
  name: $prefix + 'Modal',
  componentName: 'Modal',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    animat: { type: Boolean, default: () => true },
    beforeClose: Function,
    duration: { type: [Number, String], default: () => 3000 },
    escClosable: Boolean,
    events: Object,
    fullscreen: Boolean,
    height: [Number, String],
    id: String,
    isFormReset: {
      type: Boolean,
      default: true
    },
    lockScroll: Boolean,
    lockView: { type: Boolean, default: () => true },
    marginSize: { type: [Number, String], default: 10 },
    mask: { type: Boolean, default: () => true },
    maskClosable: Boolean,
    message: [String, Function, Object],
    minHeight: { type: [Number, String], default: () => 200 },
    minWidth: { type: [Number, String], default: () => 340 },
    modelValue: Boolean,
    resize: Boolean,
    showFooter: Boolean,
    showHeader: { type: Boolean, default: true },
    status: {
      type: [String, Object],
      default: ''
    },
    title: String,
    top: { type: [Number, String], default: 15 },
    type: { type: String, default: 'alert' },
    vSize: String,
    width: [Number, String],
    zIndex: [Number, String],
    mode: null
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
