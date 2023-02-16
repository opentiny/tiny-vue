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
  KB: 'KB',
  FILE_NAME: 'ui.popupload.fileName',
  FILE_SIZE: 'ui.popupload.fileSize',
  FILE_STATUS: 'ui.popupload.fileStatus',
  DIALOG_TITLE: 'ui.popupload.dialogTitle',
  UPLOAD_ERROR: 'ui.popupload.uploadError',
  ERROR_NUM_TIPS: 'ui.popupload.errorNumTips',
  UPLOAD_SUCCESS: 'ui.popupload.uploadSuccess',
  TIPS_TITLE_TEXT: 'ui.popupload.tipsFileText',
  ERROR_TYPE_TIPS: 'ui.popupload.errorTypeTips',
  ERROR_SIZE_TIPS: 'ui.popupload.errorSizeTips',
  SAVE_BUTTON_TEXT: 'ui.popupload.saveButtonText',
  UPLOAD_BUTTON_TEXT: 'ui.popupload.uploadButtonText',
  CANCEL_BUTTTON_TEXT: 'ui.popupload.cancelButtonText',
  UPLOADS_BUTTON_TEXT: 'ui.popupload.uploadsButtonText',
  LIMIT_UPLOAD_FILE_TYPE: 'ui.popupload.limitUploadFileType',
  LIMIT_UPLOAD_FILE_SIZE: 'ui.popupload.limitUploadFileSize',
  LIMIT_UPLOAD_FILE_NUMBER: 'ui.popupload.limitUploadFileNumber'
}

const template = function () {
  return PCTemplate
}

export default {
  name: $prefix + 'PopUpload',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    size: String,
    data: Object,
    uploadName: String,
    dialogTitle: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: ''
    },
    uploadButtonText: {
      type: String,
      default: ''
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    limit: Number,
    multiple: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Object,
      default: () => ({})
    },
    accept: String,
    submitButtonText: {
      typee: String,
      default: ''
    },
    cancelButtonText: {
      typee: String,
      default: ''
    },
    uploadFileType: Array,
    beforeUpload: Function,
    beforeRemove: Function,
    maxUploadFileSize: Number,
    httpRequest: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
