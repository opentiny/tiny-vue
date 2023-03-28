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

import { downloadFile as ordinaryDownload } from '@opentiny/vue-renderless/upload-list'

import {
  initService,
  getNewTabPreviewUrl,
  previewFile,
  getToken,
  downloadFile,
  batchSegmentUpload,
  segmentUpload,
  sliceChunk,
  segmentUploadInit,
  largeDocumentUpload,
  getFormData,
  abort,
  clearFiles,
  computedUploadDisabled,
  getFile,
  handleStart,
  handleProgress,
  handleSuccess,
  handleError,
  handleRemove,
  onBeforeDestroy,
  submit,
  watchListType,
  watchFileList,
  handleClick,
  getFileUploadUrl,
  updateUrl,
  previewImage,
  startUpload,
  getDialogConfigObj,
  computeDocChunkSize,
  updateFile,
  getPreviewUrlSync,
  beforeUpload,
  computedUploadingSize,
  clearUploadingFiles,
  calcUploadingFilesInfo,
  properFileSize,
  addFileToList,
  getDownloadFileInfo,
  largeDocumentDownload,
  sliceDownloadChunk,
  batchSegmentDownload,
  downloadFileInner,
  setWriterFile,
  afterDownload
} from './index'
import { isEmptyObject } from '@opentiny/vue-renderless/common/type'

export const api = [
  'state',
  'getNewTabPreviewUrl',
  'previewFile',
  'downloadFile',
  'abort',
  'clearFiles',
  'getFile',
  'handleStart',
  'handleProgress',
  'handleSuccess',
  'handleError',
  'handleRemove',
  'submit',
  'handleClick',
  'getFileUploadUrl',
  'updateUrl',
  'previewImage',
  'updateFile'
]

const initState = ({ api, reactive, computed, inject, ref, vm, props, httpRequest }) => {
  const state = reactive({
    url: '',
    tempIndex: 1,
    draging: false,
    uploadFiles: [],
    dragOver: false,
    httpRequest,
    form: inject('form', ref({ default: '' })),
    listeners: vm.$listeners,
    docSize: 0, // unit(B)
    chunkSize: 0,
    chunkBatchLimit: 20,
    downloadChunkLimit: 5,
    batchQueue: {},
    batchQueueListen: {},
    batchCancelToken: {},
    replayAtoms: {},
    chunkUploadUrl: '',
    largeFileInfo: {},
    headers: {},
    accept: '',
    edmToken: {},
    isSuccess: false,
    singleMaxSize: 200,
    formData: {},
    showPreview: false,
    iframeUrl: '',
    fileWater: false,
    tabUrl: '',
    cacheDocuments: {},
    isEdm: computed(() => !isEmptyObject(props.edm)),
    uploadDisabled: computed(() => api.computedUploadDisabled()),
    dialogConfigObj: computed(() => api.getDialogConfigObj()),
    uploadingFiles: [],
    currentUploadingFileUids: [],
    uploadingSize: computed(() => api.computedUploadingSize()),
    isEntireCheckCode: computed(() => !('isEntireCheckCode' in props.edm && props.edm.isEntireCheckCode !== true)),
    downloadBatchQueue: {},
    downloadBatchQueueListen: {},
    dowuloadChunkFile: new Map(),
    downloadReplayAtoms: {}
  })

  return state
}

const initApi = ({ api, state, props, constants, refs, $service, t, Modal }) => {
  const { SIZE_2G, SIZE_20M, SIZE_8M } = constants.EDM

  Object.assign(api, {
    state,
    sliceChunk: sliceChunk({ state, props }),
    getFormData: getFormData({ constants, props, state }),
    abort: abort({ constants, refs }),
    handleClick: handleClick({ constants, refs }),
    getFile: getFile(state),
    clearFiles: clearFiles(state),
    watchFileList: watchFileList({ constants, state }),
    watchListType: watchListType({ constants, state }),
    onBeforeDestroy: onBeforeDestroy(state),
    computedUploadDisabled: computedUploadDisabled({ props, state }),
    computedUploadingSize: computedUploadingSize(state),
    getFileUploadUrl: getFileUploadUrl($service),
    getToken: getToken({ constants, props, state, t, Modal }),
    getDialogConfigObj: getDialogConfigObj({ props, state }),
    computeDocChunkSize: computeDocChunkSize({ props, state, SIZE_2G, SIZE_20M, SIZE_8M }),
    updateFile: updateFile({ constants, refs }),
    getPreviewUrlSync: getPreviewUrlSync({ constants, props, state }),
    ordinaryDownload: ordinaryDownload($service),
    clearUploadingFiles: clearUploadingFiles({ constants, state }),
    calcUploadingFilesInfo: calcUploadingFilesInfo({ state }),
    properFileSize: properFileSize({ props, state, constants, Modal, t })
  })
}

const mergeApi = ({ api, props, $service, state, constants, emit, mode, Modal, t, refs }) => {
  Object.assign(api, {
    segmentUploadInit: segmentUploadInit({ api, props, service: $service, state, constants }),
    segmentUpload: segmentUpload({ api, props, service: $service, state, emit, constants }),
    addFileToList: addFileToList({ api, constants, emit, props, state, mode }),
    downloadFile: downloadFile({ api, state, props }),
    previewImage: previewImage({ api, props, service: $service, state }),
    previewFile: previewFile({ api, constants, Modal, props, service: $service, state, t }),
    getNewTabPreviewUrl: getNewTabPreviewUrl({ api, props }),
    submit: submit({ api, constants, Modal, refs, props, state, t }),
    handleStart: handleStart({ api, constants, props, state, refs }),
    batchSegmentUpload: batchSegmentUpload({ api, constants, props, refs, state }),
    largeDocumentUpload: largeDocumentUpload({ api, Modal, state, emit, constants, t }),
    handleProgress: handleProgress({ api, constants, emit, state }),
    handleSuccess: handleSuccess({ api, constants, emit, Modal, props, state }),
    handleError: handleError({ api, constants, emit, state }),
    handleRemove: handleRemove({ api, emit, props, state }),
    updateUrl: updateUrl({ api, props, service: $service, state }),
    startUpload: startUpload({ api, state, constants, refs, Modal, t }),
    beforeUpload: beforeUpload({ api, props, Modal, constants, t, state }),
    getDownloadFileInfo: getDownloadFileInfo({ api, props, state, service: $service }),
    largeDocumentDownload: largeDocumentDownload({ api, state }),
    sliceDownloadChunk: sliceDownloadChunk({ api, state }),
    batchSegmentDownload: batchSegmentDownload({ state, api }),
    downloadFileInner: downloadFileInner({ api, props, service: $service, state, emit, constants, t, Modal }),
    setWriterFile: setWriterFile({ state, emit, props }),
    afterDownload: afterDownload({ api, state })
  })
}

const initWatch = ({ watch, state, api, props, $service }) => {
  watch(
    () => props.edm.upload,
    (value) => value && api.getToken({ token: value.token, isinit: true }),
    { immediate: true, deep: true }
  )

  watch(() => props.listType, api.watchListType)

  watch(
    () => props.fileList,
    (value) => api.watchFileList(value),
    { immediate: true, deep: true }
  )

  watch(
    () => props.action,
    () => {
      if (!props.httpRequest && !state.isEdm) {
        api.updateUrl()
      }
    },
    { immediate: true }
  )

  watch(
    () => state.isSuccess,
    (value) => value && $service.getSingleUploadUrl().then((url) => (state.url = url)),
    { immediate: true }
  )

  watch(() => props.edm, api.computeDocChunkSize, { deep: true, immediate: true })
}

export const renderless = (
  props,
  { computed, inject, onBeforeUnmount, provide, reactive, ref, watch },
  { t, vm, refs, parent, emit, service, mode, constants },
  { Modal }
) => {
  const api = {}
  const $service = initService({ props, service })
  const httpRequest = $service.httpRequest
  const state = initState({ reactive, computed, api, inject, ref, vm, props, httpRequest })

  initApi({ api, state, props, constants, refs, $service, t, Modal })
  mergeApi({ api, props, $service, state, constants, emit, mode, Modal, t, refs })

  provide('uploader', parent)

  // 注册生命周期函数必须要在（watch）异步函数/组件之前，否则会 Vue3 警告
  onBeforeUnmount(api.onBeforeDestroy)

  initWatch({ watch, state, api, props, $service })

  return api
}
