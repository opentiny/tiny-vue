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

export const onDragOver =
  ({ props, state }) =>
  () =>
    !props.disabled && (state.dragover = true)

export const onDrop =
  ({ emit, props, state }) =>
  (event) => {
    if (props.disabled || !state.uploader) {
      return
    }

    const accept = state.uploader.accept

    state.dragover = false

    const files = event.dataTransfer.files

    if (!accept) {
      emit('file', files)
      return
    }

    const notAcceptedFiles = []

    const filteredFile = [].slice.call(files).filter((file) => {
      const { type, name } = file
      const extension = name.includes('.') ? `.${name.split('.').pop()}` : ''
      const baseType = type.replace(/\/.*$/, '')

      let isValid = accept
        .split(',')
        .map((type) => type.trim())
        .filter((type) => type)
        .some((type) => {
          if (/\..+$/.test(type)) {
            return extension === type
          }

          if (/\/\*$/.test(type)) {
            return baseType === type.replace(/\/\*$/, '')
          }

          if (/^[^/]+\/[^/]+$/.test(type)) {
            return true
          }

          return false
        })

      !isValid && notAcceptedFiles.push(file)

      return isValid
    })

    notAcceptedFiles.length && state.uploader.$emit('drop-error', notAcceptedFiles)

    emit('file', filteredFile)
  }

export const watchDragover =
  ({ state, constants }) =>
  () => {
    state.uploader.$refs[constants.FILE_UPLOAD_INNER_TEMPLATE].$emit('drag-over', state.dragover)
  }
