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
  (event: DragEvent): null | boolean | undefined => {
    if (props.disabled || !state.uploader) {
      return
    }

    const accept = state.uploader.accept

    state.dragover = false

    const files = event.dataTransfer?.files

    if (!accept) {
      emit('file', files)
      return
    }

    const notAcceptedFiles = [] as File[]

    // 这里用来判断拖拽的文件是否要抛出drop-error事件，并非用来判断accept过滤非法文件，在beforeUpload中处理accept过滤
    if (files) {
      Array.from(files).filter((file: File) => {
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
    }

    emit('file', files)
  }

export const watchDragover =
  ({ state, constants }: Pick<IUploadDraggerRenderlessParams, 'state' | 'constants'>) =>
  () => {
    state.uploader.$refs[constants.FILE_UPLOAD_INNER_TEMPLATE].$emit('drag-over', state.dragover)
  }
