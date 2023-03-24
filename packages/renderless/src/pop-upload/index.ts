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

export const computedSetDialogTitle = ({ constants, props, t }) => () => props.dialogTitle || t(constants.DIALOG_TITLE)

export const computedUploadSuccess = ({ constants, t }) => () => t(constants.UPLOAD_SUCCESS)

export const computedCancel = ({ constants, props, t }) => () => props.cancelButtonText || t(constants.CANCEL_BUTTTON_TEXT)

export const computedconfirm = ({ constants, props, t }) => () => props.submitButtonText || t(constants.SAVE_BUTTON_TEXT)

export const computedFileName = ({ constants, t }) => () => t(constants.FILE_NAME)

export const computedUploadError = ({ constants, t }) => () => t(constants.UPLOAD_ERROR)

export const computedFileStatus = ({ constants, t }) => () => t(constants.FILE_STATUS)

export const computedFileSize = ({ constants, t }) => () => t(constants.FILE_SIZE)

export const computedErrorSizeTips = ({ constants, t }) => () => t(constants.ERROR_SIZE_TIPS)

export const computedErrorNumTips = ({ constants, t }) => () => t(constants.ERROR_NUM_TIPS)

export const computedErrorTypeTips = ({ constants, t }) => () => t(constants.ERROR_TYPE_TIPS)

export const computedUploadButtonText = ({ constants, props, t }) => () => props.uploadButtonText || t(constants.UPLOAD_BUTTON_TEXT)

export const computedUploadsButtonText = ({ constants, t }) => () => t(constants.UPLOADS_BUTTON_TEXT)

export const computedTipsTitleText = ({ constants, t }) => () => t(constants.TIPS_TITLE_TEXT)

export const computedLimitSizeTips = ({ constants, t }) => () => t(constants.LIMIT_UPLOAD_FILE_SIZE)

export const computedLimitTypeTips = ({ constants, t }) => () => t(constants.LIMIT_UPLOAD_FILE_TYPE)

export const computedLimitCountTips = ({ constants, t }) => () => t(constants.LIMIT_UPLOAD_FILE_NUMBER)

export const fileUploadChange = (state) => (file, fileList) => (state.uploadList = fileList || [])

export const deleteFile = ({ emit, state, props }) => (file) => {
  let doRemove = () => {
    state.uploadList.splice(state.uploadList.indexOf(file), 1)

    emit('remove', file, state.uploadList)
  }

  if (!props.beforeRemove) {
    doRemove()
  } else if (typeof props.beforeRemove === 'function') {
    const before = props.beforeRemove(file)

    if (before && before.then) {
      before.then(doRemove, (e) => e)
    } else if (before !== false) {
      doRemove()
    }
  }
}

export const watchWithCredentials = (state) => (value) => (state.withCredentials = value)

export const uploadSubmit = (refs) => () => refs.upload.submit()

export const abort = (refs) => () => refs.upload.abort()

export const watchHeaders = (state) => (value) => (state.headers = value)

export const watchAction = (state) => (value) => (state.action = value)

export const watchMultiple = (state) => (value) => (state.multiple = value)

export const watchDisabled = (state) => (value) => (state.disabled = value)

export const watchAccept = (state) => (value) => (state.accept = value)

export const closeErrorTips = (state) => () => (state.errorTips = [])

export const closeSuccessTips = (state) => () => (state.successTips = [])

export const watchFilters = (state) => (value) => (state.filters = value)

export const watchLimit = (state) => (value) => {
  state.limit = value

  if (value != undefined && value > 0) {
    state.tipsTitle[0] = {
      count: value
    }
  } else {
    state.tipsTitle[0] = undefined
  }
}

export const watchUploaFileType = (state) => (value) => {
  if (!Array.isArray(value)) {
    state.tipsTitle[1] = undefined
    return
  }

  state.uploadFileType = value

  state.tipsTitle[1] = {
    type: value.join(',')
  }
}

export const watchMaxUploadFileSize = ({ constants, state }) => (value) => {
  state.maxUploadFileSize = value

  if (value != undefined && value != 0) {
    state.tipsTitle[2] = {
      size: Math.floor(value / 1024) + constants.KB
    }
  } else {
    state.tipsTitle[2] = undefined
  }
}

export const showDialog = (state) => () => {
  state.isShowDialog = true
  state.uploadList = []
}

export const closeDialog = ({ refs, state }) => () => {
  state.isShowDialog = false
  state.errorTips = []
  state.successTips = []
  refs.upload.clearFiles()
}

export const progressEvent = (emit) => (file) => {
  emit('progress', file)
}

export const errorEvent = ({ emit, state }) => (file) => {
  state.errorTips.push({ error: file })
  emit('error', file)
}

export const handleExceed = ({ emit, state }) => (files, fileList) => {
  state.errorTips.push({ num: files })
  emit('exceed', files, fileList)
}

export const handleAvatarSuccess = ({ api, emit, state }) => (res, file) => {
  api.deleteFile(file)
  state.successTips.push(file.name)

  emit('success', res, file)
}

export const beforeAvatarUpload = ({ props, state }) => (file) => {
  if (typeof props.beforeUpload === 'function') {
    return props.beforeUpload(file)
  }

  let filepath = file.name
  let isnext = false
  let isSize = false

  if (state.uploadFileType && state.uploadFileType.length != 0) {
    let arr = filepath.split('.')
    let fileend = '.' + arr[arr.length - 1]

    isnext = !~state.uploadFileType.indexOf(fileend)

    if (isnext) {
      state.errorTips.push({ type: file.name })
    }
  }

  if (state.maxUploadFileSize && state.maxUploadFileSize != 0) {
    if (file.size > state.maxUploadFileSize) {
      state.errorTips.push({ size: file.name })
      isSize = true
    }
  }

  return !isnext && !isSize
}
