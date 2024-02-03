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

import {
  showDialog,
  computedUploadSuccess,
  closeSuccessTips,
  computedUploadError,
  progressEvent,
  computedErrorNumTips,
  beforeAvatarUpload,
  handleAvatarSuccess,
  handleExceed,
  errorEvent,
  watchWithCredentials,
  abort,
  computedErrorSizeTips,
  computedErrorTypeTips,
  computedFileName,
  computedFileStatus,
  computedFileSize,
  computedLimitSizeTips,
  computedLimitTypeTips,
  computedLimitCountTips,
  computedTipsTitleText,
  closeErrorTips,
  watchUploaFileType,
  watchMaxUploadFileSize,
  watchAccept,
  computedUploadButtonText,
  computedUploadsButtonText,
  watchDisabled,
  watchMultiple,
  watchLimit,
  watchAction,
  watchHeaders,
  uploadSubmit,
  closeDialog,
  computedSetDialogTitle,
  computedCancel,
  computedconfirm,
  fileUploadChange,
  deleteFile
} from './index'

export const api = [
  'state',
  'closeSuccessTips',
  'abort',
  'beforeAvatarUpload',
  'beforeRemove',
  'handleAvatarSuccess',
  'handleExceed',
  'errorEvent',
  'progressEvent',
  'closeErrorTips',
  'uploadSubmit',
  'showDialog',
  'closeDialog',
  'fileUploadChange',
  'deleteFile'
]

const initState = ({ reactive, props, computed, api }) =>
  reactive({
    errorTips: [],
    uploadList: [],
    successTips: [],
    limit: props.limit,
    isShowDialog: false,
    accept: props.accept,
    action: props.action,
    headers: props.headers,
    disabled: props.disabled,
    multiple: props.multiple,
    uploadFileType: props.uploadFileType,
    withCredentials: props.withCredentials,
    maxUploadFileSize: props.maxUploadFileSize,
    tipsTitle: [undefined, undefined, undefined],
    fileSize: computed(() => api.computedFileSize()),
    fileName: computed(() => api.computedFileName()),
    fileStatus: computed(() => api.computedFileStatus()),
    cancelButtonText: computed(() => api.computedCancel()),
    submitButtonText: computed(() => api.computedconfirm()),
    errorNumTips: computed(() => api.computedErrorNumTips()),
    dialogTitle: computed(() => api.computedSetDialogTitle()),
    errorSizeTips: computed(() => api.computedErrorSizeTips()),
    tipsTitleText: computed(() => api.computedTipsTitleText()),
    limitTypeTips: computed(() => api.computedLimitTypeTips()),
    uploadErrorTips: computed(() => api.computedUploadError()),
    errorTypeTips: computed(() => api.computedErrorTypeTips()),
    limitSizeTips: computed(() => api.computedLimitSizeTips()),
    limitCountTips: computed(() => api.computedLimitCountTips()),
    uploadSuccessTips: computed(() => api.computedUploadSuccess()),
    uploadButtonText: computed(() => api.computedUploadButtonText()),
    uploadsButtonText: computed(() => api.computedUploadsButtonText())
  })

const initApi = ({ api, state, refs, emit, props, constants, t }) => {
  Object.assign(api, {
    state,
    abort: abort(refs),
    showDialog: showDialog(state),
    watchLimit: watchLimit(state),
    watchAction: watchAction(state),
    uploadSubmit: uploadSubmit(refs),
    watchAccept: watchAccept(state),
    progressEvent: progressEvent(emit),
    watchHeaders: watchHeaders(state),
    watchMultiple: watchMultiple(state),
    watchDisabled: watchDisabled(state),
    closeErrorTips: closeErrorTips(state),
    deleteFile: deleteFile({ emit, state, props }),
    errorEvent: errorEvent({ emit, state }),
    closeSuccessTips: closeSuccessTips(state),
    fileUploadChange: fileUploadChange(state),
    closeDialog: closeDialog({ refs, state }),
    handleExceed: handleExceed({ emit, state }),
    watchUploaFileType: watchUploaFileType(state),
    beforeAvatarUpload: beforeAvatarUpload({ props, state }),
    watchWithCredentials: watchWithCredentials(state),
    computedFileName: computedFileName({ constants, t }),
    computedFileSize: computedFileSize({ constants, t }),
    computedCancel: computedCancel({ constants, props, t }),
    computedFileStatus: computedFileStatus({ constants, t }),
    computedconfirm: computedconfirm({ constants, props, t }),
    computedUploadError: computedUploadError({ constants, t }),
    computedErrorNumTips: computedErrorNumTips({ constants, t }),
    handleAvatarSuccess: handleAvatarSuccess({ api, emit, state }),
    computedErrorTypeTips: computedErrorTypeTips({ constants, t }),
    computedErrorSizeTips: computedErrorSizeTips({ constants, t }),
    computedLimitSizeTips: computedLimitSizeTips({ constants, t }),
    computedLimitTypeTips: computedLimitTypeTips({ constants, t }),
    computedTipsTitleText: computedTipsTitleText({ constants, t }),
    computedUploadSuccess: computedUploadSuccess({ constants, t }),
    computedLimitCountTips: computedLimitCountTips({ constants, t }),
    watchMaxUploadFileSize: watchMaxUploadFileSize({ constants, state }),
    computedUploadsButtonText: computedUploadsButtonText({ constants, t }),
    computedSetDialogTitle: computedSetDialogTitle({ constants, props, t }),
    computedUploadButtonText: computedUploadButtonText({ constants, props, t })
  })
}

const initWatch = ({ watch, props, api }) => {
  watch(() => props.withCredentials, api.watchWithCredentials, { immediate: true })

  watch(() => props.uploadFileType, api.watchUploaFileType, { immediate: true })

  watch(() => props.maxUploadFileSize, api.watchMaxUploadFileSize, { immediate: true })

  watch(() => props.accept, api.watchAccept, { immediate: true })

  watch(() => props.disabled, api.watchDisabled, { immediate: true })

  watch(() => props.multiple, api.watchMultiple, { immediate: true })

  watch(() => props.action, api.watchAction, { immediate: true })

  watch(() => props.headers, api.watchHeaders, { immediate: true })

  watch(() => props.limit, api.watchLimit, { immediate: true })
}

export const renderless = (props, { computed, reactive, watch }, { t, constants, emit, refs }) => {
  const api = {}
  const state = initState({ reactive, props, computed, api })

  initApi({ api, state, refs, emit, props, constants, t })
  initWatch({ watch, props, api })

  return api
}
