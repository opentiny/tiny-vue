import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type { IFileUploadFile, IFileUploadConstants, IFileUploadModalVm } from '../../file-upload/src/file-upload'
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
} from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export type { IFileUploadConstants, IFileUploadModalVm, IFileUploadFile, downloadFile }

export const uploadListProps = {
  disabled: {
    type: Boolean,
    default: () => false
  },
  display: {
    type: Boolean,
    default: () => true
  },
  files: {
    type: Array,
    default: () => []
  },
  filesIcon: {
    type: Array,
    default: () => []
  },
  handlePreview: Function,
  isEdm: {
    type: Boolean,
    default: () => false
  },
  isFolder: {
    type: Boolean,
    default: () => false
  },
  listType: String,
  openDownloadFile: {
    type: Boolean,
    default: () => false
  },
  srcList: {
    type: Array,
    default: () => []
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
  types: Array,
  displayOnly: {
    type: Boolean,
    default: false
  },
  handleDownloadFile: Function,
  handleReUpload: Function,
  isDragover: Boolean,
  selected: Object,
  triggerClick: {
    type: Function,
    default: () => {}
  },
  isHwh5: {
    type: Boolean,
    default: false
  },
  triggerPlay: {
    type: Function,
    default: () => {}
  },
  mode: String,
  lockScroll: {
    type: Boolean,
    default: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  reUploadable: Boolean
}

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
  getApi: () => void
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
