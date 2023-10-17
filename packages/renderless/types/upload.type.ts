import type { ExtractPropTypes } from 'vue'
import { uploadProps } from '@/upload/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from './shared.type'
import type {
  isImage,
  abort,
  getFormData,
  handleClick,
  onBeforeDestroy,
  handleUpdate,
  handlePaste,
  uploadFiles,
  post,
  handleChange,
  handleKeydown,
  upload,
  mounted
} from '../src/upload'
import type { IFileUploadVm, IFileUploadConstants, IFileUploadFile } from './file-upload.type'

export type IUploadStateHeader = { [propName: string]: string } | undefined

export interface IUploadState {
  mouseover: boolean
  reqs: {
    uid?: string
  }
  uploader: IFileUploadVm
  accecpt: string
  isEdm: boolean
  openEdmDownload: boolean
  headers: IUploadStateHeader
  formData: object
  cancelToken: object
  updateId: string
  updateInput: null | HTMLInputElement
}

export interface IUploadApi {
  state: IUploadState
  isImage: typeof isImage
  abort: ReturnType<typeof abort>
  getFormData: ReturnType<typeof getFormData>
  handleClick: ReturnType<typeof handleClick>
  onBeforeDestroy: ReturnType<typeof onBeforeDestroy>
  handleUpdate: ReturnType<typeof handleUpdate>
  handlePaste: ReturnType<typeof handlePaste>
  uploadFiles: ReturnType<typeof uploadFiles>
  post: ReturnType<typeof post>
  handleChange: ReturnType<typeof handleChange>
  handleKeydown: ReturnType<typeof handleKeydown>
  upload: ReturnType<typeof upload>
  mounted: ReturnType<typeof mounted>
}

export type IUploadProps = ExtractPropTypes<typeof uploadProps>

export type IUploadRenderlessParamUtils = ISharedRenderlessParamUtils<IFileUploadConstants>

export type IUploadRenderlessParams = ISharedRenderlessFunctionParams<IFileUploadConstants> & {
  state: IUploadState
  props: IUploadProps
  api: IUploadApi
}

export interface IUploadRenderlessOtherParams {
  rawFile: IFileUploadFile
  uploaderInner: ITinyVm<IFileUploadConstants>
  uid: string
}

export interface IUploadFormData extends FormData {
  append(name: string, value: boolean | string | number | Blob, fileName?: string): void
}

export interface IUploadOptionsOfPost {
  headers: object
  withCredentials: boolean
  file: File
  data: IUploadFormData | undefined | Record<string, any>
  filename: string
  action?: string // 涉及到删除，所以为可选；底下同理
  onSuccess: (res: object) => void
  onProgress?: (event: Event) => void
  onError: (error: object) => void
  [x: string]: any // 允许动态添加属性
}

export interface IUploadOptionsOfHwh5 {
  edmAuth: {
    edmToken: string
    appId: string
  }
  filePath: string
  progress: number
  onProgress: (data: object) => void
  onSuccess: (res: object) => void
  onError: (error: object) => void
}
