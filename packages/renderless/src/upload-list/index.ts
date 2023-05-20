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

import { xss } from '../common/xss'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'

export const parsePercentage = () => (val) => parseInt(val, 10)

export const handleClick = ({ props, api, parent }) => (file) => {
  if (parent.state.isEdm) {
    const { downloadFile } = api.getApi()
    props.openDownloadFile && downloadFile && downloadFile(file)
  } else {
    props.openDownloadFile && api.downloadFile(file)
  }

  return props.handlePreview && props.handlePreview(file)
}

export const downloadFile = (service) => (file) => {
  const data = file && file.response && file.response.data

  let responseFile
  if (Array.isArray(data)) {
    responseFile = data[0]
  } else if (data && typeof data === 'object') {
    for (let key in data) {
      responseFile = data[key]
      break
    }
  }

  if (responseFile) {
    service.getFileDownloadUrl().then((url) => {
      window.open(xss.filterUrl(url + '&id=' + responseFile.attachmentId + '&type=AttachmentDemo')).opener = null
    })
  } else if (file.url) {
    window.open(xss.filterUrl(file.url)).opener = null
  } else {
    throw new Error('[TINY Error][FileUpload]file.url must not be empty')
  }
}

export const picturefilePreview = (state) => (index) => {
  state.startPostion = index
  state.shows = true
}

export const getDeleteData = (emit) => (data) => {
  emit('remove', data)
}

export const showOperatePanel = ({ state }) => ({ file }) => {
  state.currentFile = file
  state.showPanel = true
}

export const reUpload = ({ emit, props, parent }) => (file) => {
  parent.state.isEdm ? emit('start', [file && file.raw], '', true) : props.handleReUpload && props.handleReUpload(file)
}

const addPlayEventListener = ({ type, el }, fn) => el && el.addEventListener(type, fn)

const removePlayEventListener = ({ type, el }, fn) => el && el.removeEventListener(type, fn)

export const play = ({ vm, api }) => ({ file, index, type }) => {
  const videoOrAudioEle = vm.$refs[type + (file.uid || index)] && vm.$refs[type + (file.uid || index)][index]
  if (file.isPlay) return api.pause({ file, index, type })
  if (videoOrAudioEle && videoOrAudioEle.play) {
    file.playEvent = () => {
      if (file) {
        file.isPlay = false
        removePlayEventListener({ type: 'ended', el: videoOrAudioEle }, file.playEvent)
      }
    }
    file.el = videoOrAudioEle
    removePlayEventListener({ type: 'ended', el: videoOrAudioEle }, file.playEvent)
    addPlayEventListener({ type: 'ended', el: videoOrAudioEle }, file.playEvent)
    vm.$set(file, 'isPlay', true)
    videoOrAudioEle.play()
  }
}

export const pause = ({ vm }) => ({ file, index, type }) => {
  const videoOrAudioEle = vm.$refs[type + (file.uid || index)] && vm.$refs[type + (file.uid || index)][index]
  if (videoOrAudioEle && videoOrAudioEle.pause) {
    removePlayEventListener({ type: 'ended', el: videoOrAudioEle }, file.playEvent)
    file.isPlay = false
    videoOrAudioEle.pause()
  }
}

export const handleLoadedmetadata = ({ vm }) => ({ e, file }) => {
  vm.$set(file, 'totalSecond', parseInt(e.target.duration))
  vm.$set(file, 'currentSecond', parseInt(e.target.currentTime))
}

export const handleTimeupdate = () => ({ e, file }) => {
  file.currentSecond = parseInt(e.target.currentTime)
}

export const getFileType = () => ({ file }) =>
  file.name && file.name.split('.')[file.name.split('.').length - 1].toLowerCase()

export const getFileIcon = () => ({ type }) => {
  let iconTypes = {
    'xls/xlsx': {
      name: 'icon-excel-type',
      color: '#00A2B5'
    },
    file: {
      name: 'icon-file-type',
      color: '#71C14C'
    },
    pdf: {
      name: 'icon-pdf-type',
      color: '#FC916E'
    },
    'png/jpg/jpeg/gif/svg/webp/bmp/tif/pjp/apng/xbm/jxl/svgz/ico/tiff/jfif/pjpeg/avif': {
      name: 'icon-picture-type',
      color: '#2E94FF'
    },
    'ppt/pptx': {
      name: 'icon-ppt-type',
      color: '#F46087'
    },
    txt: {
      name: 'icon-text-type',
      color: '#9185F0'
    },
    'doc/docx': {
      name: 'icon-word-type',
      color: '#2070F3'
    },
    'zip/rar/arj/z/jar/lzh': {
      name: 'icon-zip-type',
      color: '#FDC000'
    },
    'mp4/ogg/webm': {
      name: 'icon-video-type',
      color: '#2E94FF'
    },
    'mp3/ogg/wav': {
      name: 'icon-audio',
      color: '#2E94FF'
    },
    default: {
      name: 'icon-other-type',
      color: '#9185F0'
    }
  }

  for (const typeName in iconTypes) {
    if (Object.hasOwnProperty.call(iconTypes, typeName)) {
      const typeValue = iconTypes[typeName]
      delete iconTypes[typeName]
      typeName.split('/').forEach((type) => (iconTypes[type] = typeValue))
    }
  }

  return iconTypes[type] || iconTypes['default']
}

export const remove = ({ emit }) => ({ file }) => emit('remove', file)

export const calcUploadListLiWidth = ({ vm, nextTick, props, constants }) => () => {
  const { listType } = props,
    { LIST_TYPE } = constants
  nextTick(() => {
    const uploadListEle = vm.$refs['upload-list']
    const uploadListLiEle = vm.$refs['upload-list-li']

    if (!uploadListEle || !(uploadListLiEle && uploadListLiEle[0])) return

    if (listType === LIST_TYPE.TEXT) {
      const { minWidth } = window.getComputedStyle(uploadListLiEle && uploadListLiEle[0])
      const marginRight = 8

      const num = Math.floor(uploadListEle.offsetWidth / (parseFloat(minWidth) + marginRight))

      Array.from(uploadListLiEle).forEach((li, index) => {
        if (!((index + 1) % num) || num === 1) {
          li.style.marginRight = 0
          li.style.width = `${100 / num}%`
        } else {
          li.style.marginRight = `${marginRight}px`
          li.style.width = `calc(${100 / num}% - ${marginRight}px)`
        }
      })
    }
  })
}

export const mounted = ({ api, vm }) => () => {
  const el = vm.$refs['upload-list']
  el && addResizeListener(el, api.calcUploadListLiWidth)
}

export const destroyed = ({ api, props, vm }) => () => {
  removeResizeListener(vm.$refs['upload-list'], api.calcUploadListLiWidth)

  props.files.forEach((file) => {
    removePlayEventListener({ type: 'ended', el: file.el }, file.playEvent)
    delete file.playEvent
    delete file.isPlay
    delete file.el
  })
}
