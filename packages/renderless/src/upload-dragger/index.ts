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
import type { IUploadDraggerRenderlessParams } from '@/types'

export const onDragOver =
  ({ props, state }: Pick<IUploadDraggerRenderlessParams, 'props' | 'state'>) =>
  (): boolean =>
    !props.disabled && (state.dragover = true)

export const onDrop =
  ({ emit, props, state }: Pick<IUploadDraggerRenderlessParams, 'emit' | 'props' | 'state'>) =>
  async (event) => {
    if (props.disabled || !state.uploader) {
      return
    }

    const accept = state.uploader.accept
    let files = event.dataTransfer.files
    const isDirectory = event.dataTransfer.items && event.dataTransfer.items[0].webkitGetAsEntry().isDirectory

    state.uploadFiles = []
    state.dragover = false

    if (isDirectory) {
      const fileItems = event.dataTransfer.items[0].webkitGetAsEntry()

      await readFiles(fileItems, state)
      files = state.uploadFiles
    }

    if (!accept) {
      emit('file', files)
      return
    }

    const notAcceptedFiles = []

    ;[].slice.call(files).filter((file) => {
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

    emit('file', files)
  }

export const watchDragover =
  ({ state, constants }: Pick<IUploadDraggerRenderlessParams, 'state' | 'constants'>) =>
  () => {
    state.uploader.$refs[constants.FILE_UPLOAD_INNER_TEMPLATE].$emit('drag-over', state.dragover)
  }

async function readFiles(directory, state) {
  const reader = directory.createReader()

  // 读取文件夹中的所有条目
  const entries = await new Promise((resolve) => {
    reader.readEntries((entries) => {
      resolve(entries)
    })
  })

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]

    // 如果条目是文件，则将文件的信息添加到数组中
    if (entry.isFile) {
      await new Promise((resolve) => {
        entry.file((file) => {
          state.uploadFiles.push(file)
          resolve(void 0)
        })
      })
    }
    // 如果条目是文件夹，则递归调用readFiles函数，继续读取文件夹中的文件
    else if (entry.isDirectory) {
      await readFiles(entry, state)
    }
  }
}
