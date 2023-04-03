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
import template from 'virtual-template?pc|mobile'
import streamSaver from 'streamsaver'

const $constants = {
  UPLOAD_INNER: 'upload-inner',
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
    THUMB: 'thumb'
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
    SIZE_2G: 2 * 1024 * 1024, // 单位（KB）
    SIZE_20M: 20 * 1024,
    SIZE_8M: 8 * 1024,
    FILEEMPTY: 'ui.fileUpload.empty',
    KIASCANTIP: 'ui.fileUpload.kiaScanTip',
    FILENAMEEXCEEDS: 'ui.fileUpload.fileNameExceeds',
    THEFILENAME: 'ui.fileUpload.fileName'
  }
}

export default defineComponent({
  name: $prefix + 'FileUpload',
  props: {
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
    plugin: {
      type: [Object, Function],
      default: () => streamSaver
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
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
