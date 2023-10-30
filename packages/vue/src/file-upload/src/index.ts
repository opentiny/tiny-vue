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
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile|mobile-first'

export const $constants = {
  FILE_UPLOAD_INNER_TEMPLATE: 'file-upload-inner-template',
  UPLOAD_INNER: 'upload-inner',
  UPLOAD_INNER_TEMPLATE: 'upload-inner-template',
  UPLOAD_LIST_INNER: 'upload-list-inner',
  UPLOAD_LIST_INNER_TEMPLATE: 'upload-list-inner-template',
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
    DRAG_SINGLE: 'drag-single'
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
    NOT_SUPPORT_SPECIAL_CHARACTERS: 'ui.fileUpload.notSupportSpecialCharacters'
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

export default defineComponent({
  name: $prefix + 'FileUpload',
  props: fileUploadProps,
  setup(props, context) {
    return $setup({ props, context, template, extend: { ref: 'file-upload-inner-template' } })
  }
})
