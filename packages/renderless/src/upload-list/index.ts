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
import type { IUploadListRenderlessParams, IFileUploadFile, IUploadListVideoParam } from '@/types'

import { xss } from '../common/xss'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'

export const parsePercentage =
  () =>
  (val: string): number =>
    parseInt(val, 10)

export const handleClick =
  ({ props, api, parent }: Pick<IUploadListRenderlessParams, 'props' | 'api' | 'parent'>) =>
  (e: Event, file: IFileUploadFile): Function => {
    e.preventDefault()
    if (parent.state.isEdm) {
      const { downloadFile } = api.getApi()
      props.openDownloadFile && downloadFile && downloadFile(file)
    } else {
      props.openDownloadFile && api.downloadFile(file)
    }

    return props.handlePreview && props.handlePreview(file)
  }

export const downloadFile = (service: IUploadListRenderlessParams['service']) => (file: IFileUploadFile) => {
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

export const picturefilePreview = (state: IUploadListRenderlessParams['state']) => (index: number) => {
  state.startPostion = index
  state.shows = true
}

export const getDeleteData = (emit: IUploadListRenderlessParams['emit']) => (data: string[]) => {
  emit('remove', data)
}

export const showOperatePanel =
  ({ state }: Pick<IUploadListRenderlessParams, 'state'>) =>
  (file: IFileUploadFile) => {
    state.currentFile = file
    state.showPanel = true
  }

export const reUpload =
  ({ emit, props, parent }: Pick<IUploadListRenderlessParams, 'emit' | 'props' | 'parent'>) =>
  (file: IFileUploadFile) => {
    parent.state.isEdm
      ? emit('start', [file && file.raw], '', true)
      : props.handleReUpload && props.handleReUpload(file)
  }

const addPlayEventListener = ({ type, el }: IUploadListVideoParam, fn: Function) => el && el.addEventListener(type, fn)

const removePlayEventListener = ({ type, el }: IUploadListVideoParam, fn: Function) =>
  el && el.removeEventListener(type, fn)

export const play =
  ({ vm, api, props }: Pick<IUploadListRenderlessParams, 'vm' | 'api' | 'props'>) =>
  ({ file, index, type }: { file: IFileUploadFile; index: number; type: string }) => {
    if (props.isHwh5) {
      return props.triggerPlay(file, type, 'play')
    }
    const videoOrAudioEle = vm.$refs[type + (file.uid || index)] && vm.$refs[type + (file.uid || index)][0]
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

export const pause =
  ({ vm, props }: Pick<IUploadListRenderlessParams, 'vm' | 'props'>) =>
  ({ file, index, type }: { file: IFileUploadFile; index: number; type: string }) => {
    if (props.isHwh5) {
      return props.triggerPlay(file, type, 'pause')
    }
    const videoOrAudioEle = vm.$refs[type + (file.uid || index)] && vm.$refs[type + (file.uid || index)][0]
    if (videoOrAudioEle && videoOrAudioEle.pause) {
      removePlayEventListener({ type: 'ended', el: videoOrAudioEle }, file.playEvent)
      file.isPlay = false
      videoOrAudioEle.pause()
    }
  }

export const handleLoadedmetadata =
  ({ vm }: Pick<IUploadListRenderlessParams, 'vm'>) =>
  ({ e, file }: { e: Event; file: IFileUploadFile }) => {
    vm.$set(file, 'totalSecond', parseInt(e.target?.duration))
    vm.$set(file, 'currentSecond', parseInt(e.target?.currentTime))
  }

export const handleTimeupdate =
  () =>
  ({ e, file }: { e: Event; file: IFileUploadFile }) => {
    file.currentSecond = parseInt(e.target?.currentTime)
  }

export const getFileType =
  () =>
  ({ file }: { file: IFileUploadFile }): string =>
    file.name && file.name.split('.')[file.name.split('.').length - 1].toLowerCase()

export const getFileIcon =
  ({ constants }: Pick<IUploadListRenderlessParams, 'constants'>) =>
  ({ type }: { type: string }): { name: string; color: string } => {
    const { EXCEL, FILE, PDF, PICTURE, PPT, TEXT, WORD, ZIP, VIDEO, AUDIO } = constants.FILE_TYPE
    let iconTypes = {
      [EXCEL]: {
        name: 'icon-excel-type',
        color: '#00A2B5'
      },
      [FILE]: {
        name: 'icon-file-type',
        color: '#71C14C'
      },
      [PDF]: {
        name: 'icon-pdf-type',
        color: '#FC916E'
      },
      [PICTURE]: {
        name: 'icon-picture-type',
        color: '#2E94FF'
      },
      [PPT]: {
        name: 'icon-ppt-type',
        color: '#F46087'
      },
      [TEXT]: {
        name: 'icon-text-type',
        color: '#9185F0'
      },
      [WORD]: {
        name: 'icon-word-type',
        color: '#2070F3'
      },
      [ZIP]: {
        name: 'icon-zip-type',
        color: '#FDC000'
      },
      [VIDEO]: {
        name: 'icon-video-type',
        color: '#2E94FF'
      },
      [AUDIO]: {
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

    return iconTypes[type] || iconTypes.default
  }

export const remove =
  ({ emit }: Pick<IUploadListRenderlessParams, 'emit'>) =>
  ({ file }: { file: IFileUploadFile }) =>
    emit('remove', file)

export const calcUploadListLiWidth =
  ({ vm, nextTick, props, constants }: Pick<IUploadListRenderlessParams, 'vm' | 'nextTick' | 'props' | 'constants'>) =>
  () => {
    const { listType } = props
    const { LIST_TYPE } = constants
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

export const calcVisible =
  ({ props, constants, emit }: Pick<IUploadListRenderlessParams, 'props' | 'constants' | 'emit'>) =>
  () => {
    const { SUCESS } = constants.FILE_STATUS
    const isAllSuccess = props.files.every(({ status }) => status === SUCESS || !status)
    emit('update:visible', !isAllSuccess)
  }

export const getNotSuccessFiles =
  ({ props, constants }: Pick<IUploadListRenderlessParams, 'props' | 'constants'>) =>
  (): object[] => {
    const { SUCESS } = constants.FILE_STATUS
    let files = props.files

    if (props.mode === constants.MODE.BUBBLE && props.listType === constants.LIST_TYPE.TEXT) {
      files = props.files.filter(({ status }) => status !== SUCESS)
    }

    return files
  }

export const chooseFile =
  ({ state, constants }: Pick<IUploadListRenderlessParams, 'state' | 'constants'>) =>
  (type: string) => {
    const { SOURCE_AUDIO } = constants.SOURCE_TYPE
    if (type === SOURCE_AUDIO) {
      state.showAudioPanel = true
    } else {
      state.showTriggerPanel = true
    }
    state.triggerClickType = type
  }

export const handleTriggerClick =
  ({ state, props }: Pick<IUploadListRenderlessParams, 'state' | 'props'>) =>
  ($event: Event, type: string) => {
    return new Promise((resolve) => {
      let res = props.triggerClick($event, state.triggerClickType, type)
      if (res && res.then) {
        res
          .then(() => {
            state.showTriggerPanel = false
            resolve()
          })
          .catch(() => {
            state.showTriggerPanel = false
            state.showAudioPanel = false
          })
      } else {
        state.showTriggerPanel = false
        resolve()
      }
    })
  }

export const mounted =
  ({ api, vm }: Pick<IUploadListRenderlessParams, 'api' | 'vm'>) =>
  () => {
    const el = vm.$refs['upload-list']
    el && addResizeListener(el, api.calcUploadListLiWidth)
  }

export const destroyed =
  ({ api, props, vm }: Pick<IUploadListRenderlessParams, 'api' | 'props' | 'vm'>) =>
  () => {
    removeResizeListener(vm.$refs['upload-list'], api.calcUploadListLiWidth)

    props.files.forEach((file) => {
      removePlayEventListener({ type: 'ended', el: file.el }, file.playEvent)
      delete file.playEvent
      delete file.isPlay
      delete file.el
    })
  }
