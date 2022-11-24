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

const $constants = {
  LOCAL_TIPS: 'ui.detailpage.localTips',
  LOCAL_TITLE: 'ui.detailpage.localTitle',
  VALUE_TITLE: 'ui.detailpage.valueTitle',
  LABEL_TITLE: 'ui.detailpage.labelTitle',
  DIALOG_TITLE: 'ui.detailpage.dialogTitle',
  SAVE_BUTTON_TEXT: 'ui.detailpage.saveButtonText',
  CANCEL_BUTTTON_TEXT: 'ui.detailpage.cancelButtonText'
}

const template = () => {
  return PCTemplate
}

export default {
  name: $prefix + 'DetailPage',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: Array,
    title: {
      type: String,
      default: ''
    },
    textSplit: {
      type: String,
      default: '---'
    },
    dialogTitle: {
      type: String,
      default: ''
    },
    labelTitle: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    },
    valueTitle: {
      type: String,
      default: ''
    },
    saveButton: {
      type: String,
      default: ''
    },
    cancelButton: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
