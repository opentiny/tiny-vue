import type { ExtractPropTypes, Ref, ComponentPublicInstance } from 'vue'
import { fileUploadProps, $constants } from '@/file-upload/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from './shared.type'
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
} from '../src/file-upload'
import type { downloadFile as ordinaryDownload } from '../src/upload-list'
import type { IUploadFormData } from './upload.type'

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

export type IFileUploadModalVm = { Modal: ITinyVm<unknown> }

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
