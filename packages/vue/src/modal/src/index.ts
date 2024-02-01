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

export const modalProps = {
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
  message: [String, Function],
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
  top: { type: [Number, String], default: 80 },
  type: { type: String, default: 'alert' },
  vSize: String,
  width: [Number, String],
  zIndex: [Number, String],
  description: String,
  options: Array,
  showClose: { type: Boolean, default: true },
  confirmContent: String,
  cancelContent: String,
  position: {
    type: String,
    default: '',
    validator(val: string) {
      return ['', 'bottom-right'].includes(val)
    }
  },
  customClass: String,
  confirmBtnProps: { type: Object, default: () => ({}) },
  cancelBtnProps: { type: Object, default: () => ({}) }
}

export default defineComponent({
  name: $prefix + 'Modal',
  componentName: 'Modal',
  props: modalProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
