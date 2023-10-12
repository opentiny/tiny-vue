import type { ExtractPropTypes } from 'vue'
import { UploadDraggerProps } from '@/upload-dragger/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { onDragOver, onDrop, watchDragover } from '../src/upload-dragger'
import type { IFileUploadVm, IFileUploadConstants } from './file-upload.type'

export interface IUploadDraggerState {
  dragover: boolean
  uploader: IFileUploadVm
}

export interface IUploadDraggerApi {
  state: IUploadDraggerState
  onDragOver: ReturnType<typeof onDragOver>
  onDrop: ReturnType<typeof onDrop>
  watchDragover: ReturnType<typeof watchDragover>
}

export type IUploadDraggerProps = ExtractPropTypes<typeof UploadDraggerProps>

export type IUploadDraggerRenderlessParamUtils = ISharedRenderlessParamUtils<IFileUploadConstants>

export type IUploadDraggerRenderlessParams = ISharedRenderlessFunctionParams<IFileUploadConstants> & {
  state: IUploadDraggerState
  props: IUploadDraggerProps
  api: IUploadDraggerApi
}
