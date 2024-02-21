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

import { on, off } from '../common/deps/dom'
import { toFileSize } from '../common/string'

export const computedCropImages =
  ({ constants, t }) =>
  () =>
    t(constants.CROP_IMAGE)

export const watchImageSrc = (state) => (value) => (state.src = value)

export const watchAlt = (state) => (value) => (state.alt = value || 'image')

export const watchVisible =
  ({ api, state }) =>
  (value) => {
    if (value) {
      on(document.body, 'keydown', api.shortcutKeys)
    } else {
      off(document.body, 'keydown', api.shortcutKeys)
    }

    state.cropvisible = value
  }

export const shortcutKeys = (api) => (e) => {
  if (e.keyCode == 187 && e.ctrlKey) {
    e.preventDefault()
    api.zoom(0.1)
  }

  if (e.keyCode == 189 && e.ctrlKey) {
    e.preventDefault()
    api.zoom(-0.1)
  }

  if (e.keyCode == 38 && e.ctrlKey) {
    e.preventDefault()
    api.move(0, 1)
  }

  if (e.keyCode == 40 && e.ctrlKey) {
    e.preventDefault()
    api.move(0, -1)
  }

  if (e.keyCode == 37 && e.ctrlKey) {
    e.preventDefault()
    api.move(1, 0)
  }

  if (e.keyCode == 39 && e.ctrlKey) {
    e.preventDefault()
    api.move(-1, 0)
  }
}

export const closeCrop =
  ({ emit, state }) =>
  () => {
    emit('update:cropvisible', false)
    emit('update:visible', false)

    state.cropImg = ''
  }

export const createCrop =
  ({ emit, props, refs, state }) =>
  () => {
    const Cropper = props.plugin
    const cropImage = refs.cropImage

    state.cropper = new Cropper(cropImage, {
      modal: props.modal,
      guides: props.guides,
      center: props.center,
      movable: props.movable,
      restore: props.restore,
      viewMode: props.viewMode,
      zoomable: props.zoomable,
      autoCrop: props.autoCrop,
      dragMode: props.dragMode,
      rotatable: props.rotatable,
      responsive: props.responsive,
      background: props.background,
      aspectRatio: props.aspectRatio,
      zoomOnWheel: props.zoomOnWheel,
      autoCropArea: props.autoCropArea,
      wheelZoomRatio: props.wheelZoomRatio,
      minCropBoxWidth: props.minCropBoxWidth,
      minCropBoxHeight: props.minCropBoxHeight,
      minContainerWidth: props.minContainerWidth,
      minContainerHeight: props.minContainerHeight,
      preview: document.querySelectorAll('.croppreview'),
      ready() {
        emit('ready')
      },
      cropstart(e) {
        emit('cropstart', e)
      },
      cropmove(e) {
        emit('cropmove', e)
      },
      cropend(e) {
        emit('cropend', e)
      },
      crop(e) {
        emit('crop', e)
      }
    })
  }

export const closeCropArea = (api) => () => api.clear()

export const clear = (state) => () => state.cropper.clear()

export const cropImage =
  ({ api, emit, props, state }) =>
  () => {
    state.cropImg = api.getCroppedCanvas().toDataURL('image/jpeg', props.quality)

    if (props.cropType.toLowerCase() === 'base64') {
      emit('cropdata', api.getCroppedCanvas().toDataURL('image/jpeg', props.quality))
    } else if (props.cropType.toLowerCase() === 'blob') {
      let canvas = api.getCroppedCanvas()

      canvas.toBlob(
        (blobObj) => {
          emit('cropdata', blobObj)
        },
        'image/jpeg',
        props.quality
      )
    }
  }

export const getCroppedCanvas = (state) => () => state.cropper.getCroppedCanvas()

export const getCropBoxData = (state) => () => state.cropper.getCropBoxData()

export const getData = (state) => (rounded) => state.cropper.getData(!!rounded)

export const move = (state) => (offsetX, offsetY) => state.cropper.move(offsetX, offsetY)

export const reset = (state) => () => state.cropper.reset()

export const setCropBoxData =
  (state) =>
  ({ left, top, width, height }) =>
    state.cropper.setCropBoxData({ left, top, width, height })

export const setData = (state) => (data) => data !== null && typeof data === 'object' && state.cropper.setData(data)

export const disable = (state) => () => state.cropper.disable()

export const enable = (state) => () => state.cropper.enable()

export const destroy = (state) => () => state.cropper.destroy()

export const scale = (state) => (scaleX, scaleY) => state.cropper.scale(scaleX, scaleY)

export const scaleX = (state) => (x) => state.cropper.scaleX(x)

export const scaleY = (state) => (x) => state.cropper.scaleY(x)

export const getContainerData = (state) => () => state.cropper.getContainerData()

export const getImageData = (state) => () => state.cropper.getImageData()

export const getCanvasData = (state) => () => state.cropper.getCanvasData()

export const setAspectRatio = (state) => (s) => state.cropper.setAspectRatio(s)

export const setDragMode = (state) => (s) => state.cropper.setDragMode(s)

export const setCanvasData =
  (state) =>
  ({ width, height, left, top }) =>
    state.cropper.setCanvasData({ width, height, left, top })

export const rotate = (state) => (deg) => state.cropper.rotate(deg)

export const setImage =
  ({ api, state, props }) =>
  (e) => {
    const file = e.target.files[0]
    let unit = props.maxSize.match(/[a-zA-Z]+/gi)

    unit = unit && (unit[0].length > 1 ? unit[0] : unit[0] + 'B')

    const size = toFileSize(Number(props.maxSize.match(/[0-9]+/gi)[0]), 'B', unit || 'B')

    if (file === undefined || !file.type.includes('image/') || Number(file.size) > Number(size.split('B')[0])) {
      return
    }

    const reader = new FileReader()

    reader.onload = (event) => {
      state.src = event.target.result
      api.replace(event.target.result)
    }

    reader.readAsDataURL(file)
  }

export const replace = (state) => (url) => state.cropper.replace(url)

export const showFileChooser = (refs) => () => refs.cropInput.click()

export const zoom = (state) => (percent) => state.cropper.zoom(percent)
