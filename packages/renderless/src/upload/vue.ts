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
import type {
  IUploadState,
  IUploadApi,
  IUploadProps,
  ISharedRenderlessParamHooks,
  IUploadRenderlessParamUtils,
  IFileUploadModalVm,
  IFileUploadVm
} from '@/types'

import {
  getFormData,
  isImage,
  handleChange,
  uploadFiles,
  handlePaste,
  upload,
  abort,
  post,
  handleClick,
  handleKeydown,
  handleUpdate,
  mounted,
  onBeforeDestroy
} from './index'

export const api = [
  'state',
  'isImage',
  'handleChange',
  'handlePaste',
  'uploadFiles',
  'upload',
  'abort',
  'post',
  'handleClick',
  'handleKeydown',
  'handleUpdate'
]

export const renderless = (
  props: IUploadProps,
  { computed, inject, reactive, onMounted, onBeforeUnmount }: ISharedRenderlessParamHooks,
  { refs, service, t, useBreakpoint }: IUploadRenderlessParamUtils,
  { Modal }: IFileUploadModalVm & { CryptoJS: object; Streamsaver: object }
): IUploadApi => {
  const api = {} as IUploadApi
  const uploader = inject('uploader') as IFileUploadVm
  const constants = uploader.$constants
  const { current } = useBreakpoint()
  const state: IUploadState = reactive({
    currentBreakpoint: current,
    mouseover: false,
    reqs: {},
    uploader,
    accecpt: '',
    uploadInner: computed(() => state.uploader.$refs[constants.FILE_UPLOAD_INNER_TEMPLATE]),
    isEdm: computed(() => state.uploadInner.state.isEdm),
    openEdmDownload: computed(() => state.uploadInner.edm.download),

    headers: computed(() => {
      if (state.isEdm) {
        return {
          [constants.EDM.EDMTOKEN]: props.edmToken.edmToken || '',
          [constants.EDM.TRACEID]: props.edmToken.traceId || ''
        }
      }
    }),

    formData: {},
    cancelToken: {},
    updateId: '',
    updateInput: null,
    isStopPropagation: false
  })

  Object.assign(api, {
    state,
    isImage,
    abort: abort({ state, props, constants }),
    getFormData: getFormData({ state, constants, props }),
    handleClick: handleClick({ props, refs, state }),
    onBeforeDestroy: onBeforeDestroy(state),
    handleUpdate: handleUpdate({ state, props }),
    uploadFiles: uploadFiles({ constants, Modal, props, state, t }),
    post: post({ api, constants, props, state, service }),
    handleChange: handleChange(api),
    handlePaste: handlePaste({ api, props }),
    handleKeydown: handleKeydown(api),
    upload: upload({ api, props, refs }),
    mounted: mounted({ state, props, api })
  })

  onMounted(api.mounted)
  onBeforeUnmount(api.onBeforeDestroy)

  return api
}
