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
  DIALOG_SLIDER_RIGHT: 'dialog-slideRight',
  DIALOG_FADE: 'dialog-fade',
  SELECT_DROPDOWN: $prefix + 'SelectDropdown',
  DROPDOWN_MENU: $prefix + 'DropdownMenu',
  DIALOG_BOX_CLASS: 'div.tiny-dialog-box',
  PC_SCROLL_LOCK_CLASS: 'tiny-dialog-box__scroll-lock',
  MOBILE_SCROLL_LOCK_CLASS: 'tiny-mobile-dialog-box__scroll-lock',
  Mode: 'pc',
  scrollLockClass(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_SCROLL_LOCK_CLASS
  }
}

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

export default {
  name: $prefix + 'DialogBox',
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    appendToBody: {
      type: Boolean,
      default: () => false
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: () => false
    },
    closeOnClickModal: {
      type: Boolean,
      default: () => true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: () => true
    },
    destroyOnClose: Boolean,
    dialogClass: {
      type: String,
      default: () => ''
    },
    draggable: {
      type: Boolean,
      default: () => false
    },
    fullscreen: {
      type: Boolean,
      default: () => false
    },
    isFormReset: {
      type: Boolean,
      default: () => true
    },
    lockScroll: {
      type: Boolean,
      default: () => true
    },
    modal: {
      type: Boolean,
      default: () => true
    },
    modalAppendToBody: {
      type: Boolean,
      default: () => true
    },
    resize: {
      type: Boolean,
      default: () => false
    },
    rightSlide: {
      type: Boolean,
      default: () => false
    },
    showClose: {
      type: Boolean,
      default: () => true
    },
    showHeader: {
      type: Boolean,
      default: () => true
    },
    title: {
      type: String,
      default: () => ''
    },
    top: String,
    visible: {
      type: Boolean,
      default: () => false
    },
    width: {
      type: String,
      default: () => '500px'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
