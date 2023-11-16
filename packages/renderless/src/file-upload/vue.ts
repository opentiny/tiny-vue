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
  IFileUploadState,
  IFileUploadApi,
  IFileUploadProps,
  ISharedRenderlessParamHooks,
  IFileUploadRenderlessParamUtils,
  IFileUploadModalVm,
  IFileUploadService,
  IFileUploadStreamsaver
} from '@/types'

import { downloadFile as ordinaryDownload } from '../upload-list'
import { formatFileSize } from '../common/string'

import {
  initService,
  getNewTabPreviewUrl,
  previewFile,
  getToken,
  downloadFile,
  downloadFileSingleInner,
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
  handleReUpload,
  handleReUploadTotal,
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
  afterDownload,
  getFileHash,
  modifyServiceUrlSingle,
  getKiaScanTip,
  downloadFileSingle,
  downloadFileBatch,
  downloadFileSingleHwh5,
  downloadAsyncPackage,
  validateDownloadStatus,
  mounted,
  handleChange,
  previewFileSingle,
  previewFileBatch,
  previewImageSingle,
  previewImageBatch,
  abortDownload,
  createDownloadCancelToken,
  handleClickFileList,
  computedSourcetype,
  getFileSourceType,
  encryptDialogConfirm,
  handleTriggerClick
} from './index'
import { isEmptyObject } from '../common/type'

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
  'handleReUpload',
  'handleReUploadTotal',
  'submit',
  'handleClick',
  'getFileUploadUrl',
  'updateUrl',
  'previewImage',
  'updateFile',
  'handleChange',
  'abortDownload',
  'handleClickFileList',
  'handleTriggerClick',
  'encryptDialogConfirm',
  'formatFileSize'
]

const initState = ({ api, reactive, computed, inject, ref, vm, props, httpRequest, service }): IFileUploadState => {
  const state = reactive({
    url: '',
    updateId: '',
    currentDownloadFiles: '',
    tempIndex: 1,
    draging: false,
    uploadFiles: [],
    dragOver: false,
    httpRequest,
    form: inject('form', ref({ default: '' })),
    listeners: vm.$listeners,
    docSize: 0, // unit(B)
    chunkSize: 0,
    chunkBatchLimit: 5,
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
    downloadChunkFile: {},
    downloadReplayAtoms: {},
    errorStatusCodes: [0, 401, 429], // 0：上传异常 401：没权限（token过期）429：超限
    hasFileInfoInterface: computed(() => service.setting.services.EDM && service.setting.services.EDM.DocumentInfoUrl),
    currentDownloadFile: '',
    isDragover: false,
    downloadCancelToken: {}, // 取消下载token
    downloadCancelData: {}, // 取消下载时需要清空的缓存数据
    isHwh5: computed(() => !isEmptyObject(props.hwh5)),
    selected: null,
    types: computed(() => api.computedSourcetype()),
    triggerClickType: '',
    visible: false,
    downloadParamsWhitelist: ['docId', 'wmType', 'docVersion'],
    encryptDialogConfig: {
      show: false,
      selectFileMethod: null
    }
  })

  return state
}

const initApi = ({ api, state, props, constants, vm, $service, t, Modal }) => {
  Object.assign(api, {
    state,
    sliceChunk: sliceChunk({ state }),
    getFormData: getFormData({ constants, props, state }),
    abort: abort({ constants, vm, state }),
    handleClick: handleClick({ constants, vm }),
    getFile: getFile(state),
    clearFiles: clearFiles(state),
    watchFileList: watchFileList({ constants, state, props, api }),
    watchListType: watchListType({ constants, state, api }),
    onBeforeDestroy: onBeforeDestroy(state),
    computedUploadDisabled: computedUploadDisabled({ props, state }),
    computedUploadingSize: computedUploadingSize({ state, constants }),
    getFileUploadUrl: getFileUploadUrl($service),
    getToken: getToken({ constants, props, state, t, Modal }),
    getDialogConfigObj: getDialogConfigObj({ props, state }),
    computeDocChunkSize: computeDocChunkSize({ props, state, constants }),
    updateFile: updateFile({ constants, vm }),
    getPreviewUrlSync: getPreviewUrlSync({ constants, props, state }),
    ordinaryDownload: ordinaryDownload($service),
    clearUploadingFiles: clearUploadingFiles({ constants, state }),
    calcUploadingFilesInfo: calcUploadingFilesInfo({ state, constants }),
    properFileSize: properFileSize({ props, state, api, constants, Modal, t }),
    mounted: mounted({ vm, state }),
    previewFileSingle: previewFileSingle({ api, state, props, constants, service: $service }),
    previewFileBatch: previewFileBatch({ service: $service, props, state, api }),
    previewImageSingle: previewImageSingle({ state, props, service: $service }),
    previewImageBatch: previewImageBatch({ service: $service, api }),
    abortDownload: abortDownload({ state }),
    createDownloadCancelToken: createDownloadCancelToken({ state, service: $service }),
    computedSourcetype: computedSourcetype({ props, constants }),
    getFileSourceType: getFileSourceType({ state, props, constants }),
    encryptDialogConfirm: encryptDialogConfirm({ state }),
    formatFileSize
  })
}

const mergeApi = ({ api, props, $service, state, constants, emit, mode, Modal, t, vm, CryptoJS, Streamsaver }) => {
  Object.assign(api, {
    segmentUploadInit: segmentUploadInit({ api, props, service: $service, state, constants }),
    segmentUpload: segmentUpload({ api, props, service: $service, state, emit, constants, CryptoJS }),
    addFileToList: addFileToList({ api, constants, emit, props, state, mode }),
    downloadFile: downloadFile({ api, state }),
    downloadFileSingleInner: downloadFileSingleInner({ props, state, api, constants }),
    previewImage: previewImage({ api, props, service: $service }),
    previewFile: previewFile({ api, props }),
    getNewTabPreviewUrl: getNewTabPreviewUrl({ api }),
    submit: submit({ api, constants, vm, props, state }),
    handleStart: handleStart({ api, constants, props, state, vm }),
    batchSegmentUpload: batchSegmentUpload({ api, constants, props, vm, state }),
    largeDocumentUpload: largeDocumentUpload({ api, Modal, state, emit, constants, t }),
    handleProgress: handleProgress({ api, constants, emit, state }),
    handleSuccess: handleSuccess({ api, constants, emit, Modal, props, state, t }),
    handleError: handleError({ api, constants, emit, state, props }),
    handleRemove: handleRemove({ api, emit, props, state, constants }),
    handleReUpload: handleReUpload({ vm, constants }),
    handleReUploadTotal: handleReUploadTotal(api),
    updateUrl: updateUrl({ api, props, state }),
    startUpload: startUpload({ api, state, constants, vm, Modal, t }),
    beforeUpload: beforeUpload({ api, props, Modal, constants, t, state }),
    getDownloadFileInfo: getDownloadFileInfo({ api, props, state, service: $service }),
    largeDocumentDownload: largeDocumentDownload({ api, state }),
    sliceDownloadChunk: sliceDownloadChunk({ state }),
    batchSegmentDownload: batchSegmentDownload({ state, api }),
    downloadFileInner: downloadFileInner({ api, props, state }),
    setWriterFile: setWriterFile({ state, emit, Streamsaver }),
    afterDownload: afterDownload({ api, state }),
    getFileHash: getFileHash({ emit, Modal, constants, t, CryptoJS, state }),
    modifyServiceUrlSingle: modifyServiceUrlSingle({ state, props, constants }),
    getKiaScanTip: getKiaScanTip({ Modal, constants, t }),
    downloadFileSingle: downloadFileSingle({ service: $service, constants, props, state, api, emit }),
    downloadFileBatch: downloadFileBatch({ api, service: $service, props, state, emit }),
    downloadFileSingleHwh5: downloadFileSingleHwh5({ state, props, emit, constants }),
    downloadAsyncPackage: downloadAsyncPackage({ state, props, api, constants, service: $service }),
    validateDownloadStatus: validateDownloadStatus({ state, Modal }),
    handleChange: handleChange({ vm, constants }),
    handleClickFileList: handleClickFileList({ state, emit }),
    handleTriggerClick: handleTriggerClick({ vm, state, constants, props, emit })
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

export let getApi = () => ({}) as { downloadFile: Function }

export const renderless = (
  props: IFileUploadProps,
  { computed, inject, onBeforeUnmount, provide, reactive, ref, watch, onMounted }: ISharedRenderlessParamHooks,
  { t, vm, parent, emit, service, mode, constants }: IFileUploadRenderlessParamUtils,
  { Modal, CryptoJS, Streamsaver }: IFileUploadModalVm & { CryptoJS: object; Streamsaver: IFileUploadStreamsaver }
): IFileUploadApi => {
  let api = {} as IFileUploadApi
  const $service: IFileUploadService = initService({ props, service })
  const httpRequest: Function = $service.httpRequest
  const state: IFileUploadState = initState({ reactive, computed, api, inject, ref, vm, props, httpRequest, service })

  initApi({ api, state, props, constants, vm, $service, t, Modal })
  mergeApi({ api, props, $service, state, constants, emit, mode, Modal, t, vm, CryptoJS, Streamsaver })
  getApi = () => api

  provide('uploader', parent)

  onMounted(api.mounted)

  // 注册生命周期函数必须要在（watch）异步函数/组件之前，否则会 Vue3 警告
  onBeforeUnmount(() => {
    api.onBeforeDestroy()
    api = {} as IFileUploadApi
  })

  initWatch({ watch, state, api, props, $service })

  return api
}
