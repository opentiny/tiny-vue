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

import {
  watchImageSrc,
  shortcutKeys,
  watchVisible,
  clear,
  replace,
  // computedCropImages,
  watchAlt,
  getCroppedCanvas,
  setCanvasData,
  setDragMode,
  setAspectRatio,
  getImageData,
  getCanvasData,
  scale,
  scaleY,
  getContainerData,
  scaleX,
  destroy,
  disable,
  enable,
  closeCropArea,
  closeCrop,
  createCrop,
  setImage,
  cropImage,
  getCropBoxData,
  getData,
  move,
  reset,
  rotate,
  setCropBoxData,
  setData,
  showFileChooser,
  zoom
} from './index'

export const api = [
  'state',
  'clear',
  'replace',
  'getCroppedCanvas',
  'setCanvasData',
  'setDragMode',
  'setAspectRatio',
  'getCanvasData',
  'getImageData',
  'getContainerData',
  'scaleY',
  'scale',
  'scaleX',
  'destroy',
  'enable',
  'closeCropArea',
  'disable',
  'closeCrop',
  'getCropBoxData',
  'getData',
  'move',
  'reset',
  'rotate',
  'setCropBoxData',
  'setData',
  'showFileChooser',
  'setImage',
  'cropImage',
  'zoom'
]

const initRenderIcon = (api, t) => {
  const renderIcon = [
    {
      method: () => api.showFileChooser(),
      icon: 'IconNew',
      title: t('ui.crop.choose')
    },
    { split: true },

    {
      method: () => api.zoom(-0.1),
      icon: 'IconZoomOut',
      title: t('ui.crop.zoomOut')
    },
    {
      method: () => api.zoom(0.1),
      icon: 'IconZoomIn',
      title: t('ui.crop.zoomIn')
    },
    {
      method: () => api.rotate(-45),
      icon: 'IconRepeat',
      title: t('ui.crop.rotate_45')
    },
    {
      method: () => api.rotate(45),
      icon: 'IconRefres',
      title: t('ui.crop.rotate45')
    },
    { split: true },
    {
      method: () => api.closeCropArea(),
      icon: 'IconCrop',
      title: t('ui.crop.closeCropArea')
    },
    {
      method: () => api.reset(),
      icon: 'IconConmentRefresh',
      title: t('ui.crop.reset')
    },
    { split: true },
    {
      method: () => api.closeCrop(),
      icon: 'IconClose',
      title: t('ui.crop.closeCrop')
    },
    {
      method: () => api.cropImage(),
      icon: 'IconYes',
      title: t('ui.crop.cropImage')
    }
  ]

  return renderIcon
}

const initState = ({ reactive, props, api, t }) => {
  const state = reactive({
    src: props.src,
    cropper: '',
    alt: props.alt,
    data: null,
    cropvisible: props.cropvisible,
    renderIcon: initRenderIcon(api, t)
  })

  return state
}

const initApi = ({ api, state, emit, refs, props }) => {
  Object.assign(api, {
    state,
    zoom: zoom(state),
    move: move(state),
    clear: clear(state),
    reset: reset(state),
    scale: scale(state),
    rotate: rotate(state),
    enable: enable(state),
    scaleX: scaleX(state),
    scaleY: scaleY(state),
    replace: replace(state),
    setData: setData(state),
    getData: getData(state),
    disable: disable(state),
    destroy: destroy(state),
    watchAlt: watchAlt(state),
    setDragMode: setDragMode(state),
    getImageData: getImageData(state),
    watchImageSrc: watchImageSrc(state),
    setCanvasData: setCanvasData(state),
    getCanvasData: getCanvasData(state),
    closeCrop: closeCrop({ emit, state }),
    setCropBoxData: setCropBoxData(state),
    setAspectRatio: setAspectRatio(state),
    getCropBoxData: getCropBoxData(state),
    showFileChooser: showFileChooser(refs),
    getCroppedCanvas: getCroppedCanvas(state),
    getContainerData: getContainerData(state),
    createCrop: createCrop({ emit, props, refs, state }),
    // computedCropImages: computedCropImages({ constants, t }),
    shortcutKeys: shortcutKeys(api),
    closeCropArea: closeCropArea(api),
    setImage: setImage({ api, state, props }),
    cropImage: cropImage({ api, emit, props, state }),
    watchVisible: watchVisible({ api, state })
  })
}

const initWatch = ({ watch, props, api }) => {
  watch(() => props.cropvisible, api.watchVisible)

  watch(() => props.src, api.watchImageSrc, { immediate: true })

  watch(() => props.alt, api.watchAlt, { immediate: true })
}

export const renderless = (props, { onMounted, reactive, watch }, { emit, refs, t }) => {
  const api = {}
  const state = initState({ reactive, props, api, t })

  initApi({ api, state, emit, refs, props })

  onMounted(api.createCrop)

  initWatch({ watch, props, api })

  return api
}
