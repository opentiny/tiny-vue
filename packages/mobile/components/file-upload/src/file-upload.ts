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
import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from '@mobile-root/shared.type'
import type {
  sliceChunk,
  getFormData,
  abort,
  handleClick,
  getFile,
  clearFiles,
  watchFileList,
  watchListType,
  onBeforeDestroy,
  computedUploadDisabled,
  computedUploadingSize,
  getFileUploadUrl,
  getToken,
  getDialogConfigObj,
  computeDocChunkSize,
  updateFile,
  getPreviewUrlSync,
  clearUploadingFiles,
  calcUploadingFilesInfo,
  properFileSize,
  mounted,
  previewFileSingle,
  previewFileBatch,
  previewImageSingle,
  previewImageBatch,
  abortDownload,
  createDownloadCancelToken,
  computedSourcetype,
  getFileSourceType,
  segmentUploadInit,
  segmentUpload,
  addFileToList,
  downloadFile,
  downloadFileSingleInner,
  previewImage,
  previewFile,
  getNewTabPreviewUrl,
  submit,
  handleStart,
  batchSegmentUpload,
  largeDocumentUpload,
  handleProgress,
  handleSuccess,
  handleError,
  handleRemove,
  updateUrl,
  startUpload,
  beforeUpload,
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
  validateDownloadStatus,
  handleChange,
  handleClickFileList,
  handleTriggerClick,
  noopFnCreator,
  getCalcProgress,
  getHandleSuccess,
  handleReUpload,
  handleReUploadTotal
} from './renderless'
import type { downloadFile as ordinaryDownload } from '../../upload-list/src/upload-list'
import type { IUploadFormData } from '../../upload/src/upload'
import { $props } from '@mobile-root/common'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  FILE_UPLOAD_INNER_TEMPLATE: 'file-upload-inner-template',
  UPLOAD_INNER: 'upload-inner',
  UPLOAD_INNER_TEMPLATE: 'upload-inner-template',
  UPLOAD_LIST_INNER: 'upload-list-inner',
  UPLOAD_LIST_INNER_TEMPLATE: 'upload-list-inner-template',
  ONLY_SUPPORT: 'ui.fileUpload.onlySupport',
  COMMA: 'ui.base.comma',
  FILE_NOT_LESS_THAN: 'ui.fileUpload.fileNotLessThan',
  FILE_NOT_MORE_THAN: 'ui.fileUpload.fileNotMoreThan',
  NUMBER_LIMIT: 'ui.fileUpload.numberLimit',
  FILE_STATUS: {
    READY: 'ready',
    SUCESS: 'success',
    UPLOADING: 'uploading',
    FAIL: 'fail',
    DOWNLOADING: 'downloading'
  },
  LIST_TYPE: {
    TEXT: 'text',
    PICTURE_CARD: 'picture-card',
    PICTURE: 'picture',
    THUMB: 'thumb',
    PICTURE_SINGLE: 'picture-single',
    DRAG_SINGLE: 'drag-single',
    SAAS: 'saas'
  },
  EDM: {
    CHUNKINIT: 'chunkInit',
    FILESIZE: 'fileSize',
    CHUNKS: 'chunks',
    FILENAME: 'fileName',
    ISCHECKCODE: 'isCheckCode',
    CHECKCODE: 'checkCode',
    MULTIPART: 'multipartFile',
    DOCID: 'docId',
    CHUNK: 'chunk',
    SINGLEUPLOAD: 'uploadFile',
    LOWERNAME: 'filename',
    FOLDERKEY: 'ui.fileUpload.folder',
    FORMAT: 'docFormat=wm&',
    WATER: 'usageScenes=water&wmType=wm&',
    SOURCE: 'usageScenes=source&',
    URLCONTS: '&type=doc&pageNum=1&docVersion=',
    EDMTOKEN: 'EDM-Authorization',
    TRACEID: 'x-trace-id',
    TEXT: 'edm-text',
    JSLIB: './jslib/',
    I18NKEY: 'ui.fileUpload.token',
    LARGEFILEKEY: 'ui.fileUpload.largefile',
    EXCEED: 'ui.fileUpload.exceed',
    SIZE: 'ui.fileUpload.fileSize',
    SIZE_17G: 17 * 1024 * 1024,
    SIZE_2G: 2 * 1024 * 1024, // 单位（KB）
    SIZE_64M: 64 * 1024,
    SIZE_32M: 32 * 1024,
    SIZE_20M: 20 * 1024,
    SIZE_16M: 16 * 1024,
    SIZE_8M: 8 * 1024,
    SIZE_4M: 4 * 1024,
    SIZE_2M: 2 * 1024,
    SIZE_0M: 0 * 1024,
    FILEEMPTY: 'ui.fileUpload.empty',
    KIASCANTIP: 'ui.fileUpload.kiaScanTip',
    FILENAMEEXCEEDS: 'ui.fileUpload.fileNameExceeds',
    THEFILENAME: 'ui.fileUpload.fileName',
    CALCHASH: 'ui.fileUpload.calcHash',
    KIASTATUS: 12079,
    NumberExceed: 'ui.fileUpload.numberExceed',
    notSupport: 'ui.fileUpload.notSupport',
    NOT_SUPPORT_NO_SUFFIX: 'ui.fileUpload.notSupportNoSuffix',
    STATUS_SPECIAL_CHARACTERS: 11005,
    NOT_SUPPORT_SPECIAL_CHARACTERS: 'ui.fileUpload.notSupportSpecialCharacters',
    DOC_PREVIEW: 'ui.fileUpload.docPreview'
  },
  IMAGE_TYPE: 'image/*',
  FILE_TYPE: {
    EXCEL: 'xls/xlsx',
    FILE: 'file',
    PDF: 'pdf',
    PICTURE: 'png/jpg/jpeg/gif/svg/webp/bmp/tif/pjp/apng/xbm/jxl/svgz/ico/tiff/jfif/pjpeg/avif',
    PPT: 'ppt/pptx',
    TEXT: 'txt',
    WORD: 'doc/docx',
    ZIP: 'zip/rar/arj/z/jar/lzh',
    VIDEO: 'mp4/m4v/3gp/mpg/flv/f4v/swf/avi/wmv/rmvb/mov/mts/m2t/ogg/webm/mkv',
    AUDIO: 'mp3/aac/ape/flac/wav/wma/amr/mid/pcm'
  },
  SOURCE_TYPE: {
    SOURCE_VIDEO: 'video',
    SOURCE_AUDIO: 'audio',
    SOURCE_PICTURE: 'picture'
  },
  MODE: {
    BUBBLE: 'bubble'
  }
}

export const fileUploadProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  accept: String,
  action: String,
  autoUpload: {
    type: Boolean,
    default: () => true
  },
  beforeRemove: Function,
  beforeUpload: Function,
  data: Object,
  disabled: Boolean,
  display: {
    type: Boolean,
    default: () => true
  },
  drag: Boolean,
  dragger: Boolean,
  edm: {
    type: Object,
    default: () => ({})
  },
  fileIconList: {
    type: Array,
    default: () => []
  },
  fileList: {
    type: Array,
    default: () => []
  },
  fileSize: {
    type: [Number, Array],
    validator(value) {
      return Array.isArray(value) ? value[0] < value[1] : typeof value === 'number'
    }
  },
  fileTitle: {
    type: String,
    default: () => '附件'
  },
  headerShow: {
    type: Boolean,
    default: () => true
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  httpRequest: Function,
  limit: Number,
  listType: {
    type: String,
    default: () => 'text',
    validator: (value: string) => !!$constants.LIST_TYPE[value.toUpperCase().replace('-', '_')]
  },
  mergeService: {
    type: Boolean,
    default: () => false
  },
  multiple: Boolean,
  name: {
    type: String,
    default: () => 'file'
  },
  openDownloadFile: {
    type: Boolean,
    default: () => false
  },
  showFileList: {
    type: Boolean,
    default: () => true
  },
  size: String,
  successStatistics: {
    type: Boolean,
    default: () => true
  },
  thumbOption: {
    type: Object,
    default: () => ({
      popperClass: '',
      width: 270,
      showDownload: false,
      downloadFile: Function,
      showDel: false,
      icon: 'icon-attachment',
      showTooltip: false
    })
  },
  type: {
    type: String,
    default: () => 'select'
  },
  uploadIcon: {
    type: Boolean,
    default: () => true
  },
  withCredentials: {
    type: Boolean,
    default: () => true
  },
  isFolderTitle: {
    type: Boolean,
    default: false
  },
  listOption: {
    type: Object,
    default: () => ({
      showUpdate: true,
      showDel: true
    })
  },
  maxNameLength: {
    type: Number,
    default: 20
  },
  scale: {
    type: [Number, String],
    default: 1
  },
  showName: {
    type: Boolean,
    default: false
  },
  sourceType: {
    type: String,
    default: 'picture',
    validator(val) {
      return val.split('/').every((type) => ['picture', 'video', 'audio'].includes(type))
    }
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array],
  hwh5: Object,
  mode: {
    type: String,
    default: '',
    validator(val) {
      return ['', 'bubble'].includes(val)
    }
  },
  cacheToken: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  beforeAddFile: Function,
  encryptConfig: {
    type: Object,
    default: () => ({
      enabled: false,
      encrypt: false,
      watermark: ''
    })
  },
  isHidden: {
    type: Boolean,
    default: false
  },
  pasteUpload: {
    type: Boolean,
    default: false
  },
  reUploadable: Boolean,
  reUploadTip: Function
}

export interface IFileUploadState {
  url: string
  updateId: string
  currentDownloadFiles: string
  tempIndex: number
  draging: boolean
  uploadFiles: IFileUploadFile[]
  dragOver: boolean
  httpRequest: () => void
  form: ITinyVm<unknown>
  listeners: object
  docSize: number
  chunkSize: number
  chunkBatchLimit: number
  downloadChunkLimit: number
  batchQueue: object
  batchQueueListen: object
  batchCancelToken: object
  replayAtoms: object
  chunkUploadUrl: string
  largeFileInfo: object
  headers: object
  accept: string | undefined
  edmToken: object
  isSuccess: boolean
  singleMaxSize: number
  formData: object
  showPreview: boolean
  iframeUrl: string
  fileWater: boolean
  tabUrl: string
  cacheDocuments: object
  isEdm: boolean
  uploadDisabled: boolean
  dialogConfigObj: object
  uploadingFiles: IFileUploadFile[]
  currentUploadingFileUids: number[]
  uploadingSize: number
  isEntireCheckCode: boolean
  downloadBatchQueue: object
  downloadBatchQueueListen: object
  downloadChunkFile: object
  downloadReplayAtoms: object
  errorStatusCodes: number[]
  hasFileInfoInterface: string
  currentDownloadFile: string
  isDragover: boolean
  downloadCancelToken: object
  downloadCancelData: object
  isHwh5: boolean
  selected: null | object
  types: string
  triggerClickType: string
  visible: boolean
  downloadParamsWhitelist: string[]
}

export interface IFileUploadApi {
  state: IFileUploadState
  sliceChunk: ReturnType<typeof sliceChunk>
  getFormData: ReturnType<typeof getFormData>
  abort: ReturnType<typeof abort>
  handleClick: ReturnType<typeof handleClick>
  getFile: ReturnType<typeof getFile>
  clearFiles: ReturnType<typeof clearFiles>
  watchFileList: ReturnType<typeof watchFileList>
  watchListType: ReturnType<typeof watchListType>
  onBeforeDestroy: ReturnType<typeof onBeforeDestroy>
  computedUploadDisabled: ReturnType<typeof computedUploadDisabled>
  computedUploadingSize: ReturnType<typeof computedUploadingSize>
  getFileUploadUrl: ReturnType<typeof getFileUploadUrl>
  getToken: ReturnType<typeof getToken>
  getDialogConfigObj: ReturnType<typeof getDialogConfigObj>
  computeDocChunkSize: ReturnType<typeof computeDocChunkSize>
  updateFile: ReturnType<typeof updateFile>
  getPreviewUrlSync: ReturnType<typeof getPreviewUrlSync>
  ordinaryDownload: ReturnType<typeof ordinaryDownload>
  clearUploadingFiles: ReturnType<typeof clearUploadingFiles>
  calcUploadingFilesInfo: ReturnType<typeof calcUploadingFilesInfo>
  properFileSize: ReturnType<typeof properFileSize>
  mounted: ReturnType<typeof mounted>
  previewFileSingle: ReturnType<typeof previewFileSingle>
  previewFileBatch: ReturnType<typeof previewFileBatch>
  previewImageSingle: ReturnType<typeof previewImageSingle>
  previewImageBatch: ReturnType<typeof previewImageBatch>
  abortDownload: ReturnType<typeof abortDownload>
  createDownloadCancelToken: ReturnType<typeof createDownloadCancelToken>
  computedSourcetype: ReturnType<typeof computedSourcetype>
  getFileSourceType: ReturnType<typeof getFileSourceType>
  segmentUploadInit: ReturnType<typeof segmentUploadInit>
  segmentUpload: ReturnType<typeof segmentUpload>
  addFileToList: ReturnType<typeof addFileToList>
  downloadFile: ReturnType<typeof downloadFile>
  downloadFileSingleInner: ReturnType<typeof downloadFileSingleInner>
  previewImage: ReturnType<typeof previewImage>
  previewFile: ReturnType<typeof previewFile>
  getNewTabPreviewUrl: ReturnType<typeof getNewTabPreviewUrl>
  submit: ReturnType<typeof submit>
  handleStart: ReturnType<typeof handleStart>
  batchSegmentUpload: ReturnType<typeof batchSegmentUpload>
  largeDocumentUpload: ReturnType<typeof largeDocumentUpload>
  handleProgress: ReturnType<typeof handleProgress>
  handleSuccess: ReturnType<typeof handleSuccess>
  handleError: ReturnType<typeof handleError>
  handleRemove: ReturnType<typeof handleRemove>
  updateUrl: ReturnType<typeof updateUrl>
  startUpload: ReturnType<typeof startUpload>
  beforeUpload: ReturnType<typeof beforeUpload>
  getDownloadFileInfo: ReturnType<typeof getDownloadFileInfo>
  largeDocumentDownload: ReturnType<typeof largeDocumentDownload>
  sliceDownloadChunk: ReturnType<typeof sliceDownloadChunk>
  batchSegmentDownload: ReturnType<typeof batchSegmentDownload>
  downloadFileInner: ReturnType<typeof downloadFileInner>
  setWriterFile: ReturnType<typeof setWriterFile>
  afterDownload: ReturnType<typeof afterDownload>
  getFileHash: ReturnType<typeof getFileHash>
  modifyServiceUrlSingle: ReturnType<typeof modifyServiceUrlSingle>
  getKiaScanTip: ReturnType<typeof getKiaScanTip>
  downloadFileSingle: ReturnType<typeof downloadFileSingle>
  downloadFileBatch: ReturnType<typeof downloadFileBatch>
  downloadFileSingleHwh5: ReturnType<typeof downloadFileSingleHwh5>
  validateDownloadStatus: ReturnType<typeof validateDownloadStatus>
  handleChange: ReturnType<typeof handleChange>
  handleClickFileList: ReturnType<typeof handleClickFileList>
  handleTriggerClick: ReturnType<typeof handleTriggerClick>
  handleReUpload: ReturnType<typeof handleReUpload>
  handleReUploadTotal: ReturnType<typeof handleReUploadTotal>
}

type IFileUploadNoopFnCreator = ReturnType<typeof noopFnCreator>

export interface IFileUploadService {
  get: IFileUploadNoopFnCreator
  post: IFileUploadNoopFnCreator
  request: IFileUploadNoopFnCreator
  all: IFileUploadNoopFnCreator
  spread: IFileUploadNoopFnCreator
  cancelToken: IFileUploadNoopFnCreator
  getSingleUploadUrl: IFileUploadNoopFnCreator
  getFileUploadUrl: IFileUploadNoopFnCreator
  getFileDownloadUrl: IFileUploadNoopFnCreator
  getSingleDownloadUrl: IFileUploadNoopFnCreator
  getPackageDownloadUrl: IFileUploadNoopFnCreator
  getLargeFileInitUrl: IFileUploadNoopFnCreator
  getChunkUploadUrl: IFileUploadNoopFnCreator
  getPreviewUrl: IFileUploadNoopFnCreator
  getDocumentInfoUrl: IFileUploadNoopFnCreator
  getPreviewUrlBatch: IFileUploadNoopFnCreator
  httpRequest: IFileUploadNoopFnCreator
}

export type IFileUploadProps = ExtractPropTypes<typeof fileUploadProps>

export type IFileUploadConstants = typeof $constants

export type IFileUploadRenderlessParamUtils = ISharedRenderlessParamUtils<IFileUploadConstants>

export type IFileUploadRenderlessParams = ISharedRenderlessFunctionParams<IFileUploadConstants> & {
  state: IFileUploadState
  props: IFileUploadProps
  api: IFileUploadApi
}

export type IFileUploadVm = ITinyVm<IFileUploadConstants> & IFileUploadProps

export interface IFileUploadModalVm {
  Modal: ITinyVm<unknown>
}

export type IFileUploadFile = File & { [propName: string]: any } // 允许添加多余未知属性

export interface IFileUploadEdmDownload {
  token: string
  packageToken: string
  loading: Function
  fail: Function
  paramsWhitelist: any[]
}

export interface IFileUploadDownloadFileSingleInner {
  file: IFileUploadFile
  isBatch: boolean
}

export interface IFileUploadLargeDocumentDownload extends IFileUploadDownloadFileSingleInner {
  isLessThan17G?: boolean
}

export interface IFileUploadDownloadFileInner extends IFileUploadLargeDocumentDownload {
  batchIndex?: number
  range?: {
    index: number
  }
  isChunk?: boolean
}

export interface IFileUploadDownloadFileSingle extends IFileUploadDownloadFileInner {
  calcProgress: ReturnType<typeof getCalcProgress>
  isFinished: boolean
  handleSuccess: ReturnType<typeof getHandleSuccess>
  downloadOps: IFileUploadEdmDownload
}

export interface IFileUploadBatchSegmentUpload {
  docId: string
  batchIndex: number
  batches: Promise<any>[][]
  progress: {
    file: IFileUploadFile
  }
}

export interface IFileUploadSegmentUploadInner {
  batchIndex: number
  file: IFileUploadFile
  progress: {
    file: IFileUploadFile
  }
}

export interface IFileUploadGetFormData {
  formData: IUploadFormData
  file: IFileUploadFile
  type: string
}

export interface IFileUploadSetWriterFile {
  data: any
  index: number
  isLessThan17G: boolean
  file: IFileUploadFile
}

export interface IFileUploadAfterDownload extends IFileUploadDownloadFileSingle {
  data: any
}

export interface IFileUploadBatchSegmentDownload {
  batchIndex: number
  batches: IFileUploadSliceDownloadChunk[][]
  docId: string
  isBatch: boolean
  isLessThan17G: boolean
}

export interface IFileUploadSliceDownloadChunk {
  startRange: number
  endRange: number
  index: number
}

export interface IFileUploadStreamsaver {
  createWriteStream: Function
}
