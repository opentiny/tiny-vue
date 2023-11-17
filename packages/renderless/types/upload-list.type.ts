import type { ExtractPropTypes } from 'vue'
import { uploadListProps } from '@/upload-list/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { IFileUploadFile, IFileUploadConstants } from './file-upload.type'
import type {
  getDeleteData,
  parsePercentage,
  downloadFile,
  picturefilePreview,
  handleClick,
  play,
  pause,
  handleLoadedmetadata,
  handleTimeupdate,
  destroyed,
  showOperatePanel,
  getFileType,
  getFileIcon,
  mounted,
  calcUploadListLiWidth,
  reUpload,
  remove,
  handleTriggerClick,
  chooseFile,
  calcVisible,
  getNotSuccessFiles
} from '../src/upload-list'
import type { getApi } from '../src/file-upload/vue'

export interface IUploadListState {
  focusing: boolean
  shows: boolean
  progressType: string
  progressWidth: number
  progressStrokeWidth: number
  tooltipDisabled: boolean
  closeComponent: string
  preViewComponent: string
  failUploadFileCount: number
  startPostion: number
  screenType: boolean
  showPanel: boolean
  showTriggerPanel: boolean
  triggerClickType: string
  showAudioPanel: boolean
  files: object[]
  currentFile: null | IFileUploadFile
}

export interface IUploadListApi {
  state: IUploadListState
  getApi: typeof getApi
  getDeleteData: ReturnType<typeof getDeleteData>
  parsePercentage: ReturnType<typeof parsePercentage>
  downloadFile: ReturnType<typeof downloadFile>
  picturefilePreview: ReturnType<typeof picturefilePreview>
  handleClick: ReturnType<typeof handleClick>
  play: ReturnType<typeof play>
  pause: ReturnType<typeof pause>
  handleLoadedmetadata: ReturnType<typeof handleLoadedmetadata>
  handleTimeupdate: ReturnType<typeof handleTimeupdate>
  destroyed: ReturnType<typeof destroyed>
  showOperatePanel: ReturnType<typeof showOperatePanel>
  getFileType: ReturnType<typeof getFileType>
  getFileIcon: ReturnType<typeof getFileIcon>
  mounted: ReturnType<typeof mounted>
  calcUploadListLiWidth: ReturnType<typeof calcUploadListLiWidth>
  reUpload: ReturnType<typeof reUpload>
  remove: ReturnType<typeof remove>
  handleTriggerClick: ReturnType<typeof handleTriggerClick>
  chooseFile: ReturnType<typeof chooseFile>
  calcVisible: ReturnType<typeof calcVisible>
  getNotSuccessFiles: ReturnType<typeof getNotSuccessFiles>
}

export type IUploadListProps = ExtractPropTypes<typeof uploadListProps> & {
  files: { status: 'fail' | 'uploading' | 'success' | 'downloading' }[]
}

export type IUploadListRenderlessParamUtils = ISharedRenderlessParamUtils<IFileUploadConstants>

export type IUploadListRenderlessParams = ISharedRenderlessFunctionParams<IFileUploadConstants> & {
  state: IUploadListState
  props: IUploadListProps
  api: IUploadListApi
}

export interface IUploadListVideoParam {
  type: 'ended'
  el: HTMLVideoElement
}
