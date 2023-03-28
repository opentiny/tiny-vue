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
  getFormData,
  isImage,
  handleChange,
  uploadFiles,
  upload,
  abort,
  post,
  handleClick,
  handleKeydown,
  handleUpdate,
  mounted,
  onBeforeDestroy
} from './index'

export const api = ['state', 'isImage', 'handleChange', 'uploadFiles', 'upload', 'abort', 'post', 'handleClick', 'handleKeydown', 'handleUpdate']

export const renderless = (props, { computed, inject, reactive, onMounted, onBeforeUnmount }, { refs, service, parent, t }, { Modal }) => {
  const api = {}
  const constants = parent.$parent.$constants
  const state = reactive({
    mouseover: false,
    reqs: {},
    uploader: inject('uploader'),
    accecpt: '',
    isEdm: computed(() => parent.state.isEdm),
    openEdmDownload: computed(() => parent.edm.download),

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
    updateInput: null
  })

  Object.assign(api, {
    state,
    isImage,
    abort: abort({ state, props }),
    getFormData: getFormData({ state, constants, parent, props }),
    handleClick: handleClick({ props, refs }),
    onBeforeDestroy: onBeforeDestroy(state),
    handleUpdate: handleUpdate({ state, props }),
    uploadFiles: uploadFiles({ api, constants, Modal, props, state, t }),
    post: post({ api, constants, parent, props, state, service }),
    handleChange: handleChange(api),
    handleKeydown: handleKeydown(api),
    upload: upload({ api, props, refs }),
    mounted: mounted({ state, props, api })
  })

  onMounted(api.mounted)
  onBeforeUnmount(api.onBeforeDestroy)

  return api
}
