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
  computedGetImageStyle,
  computedGetAlignCenter,
  computedGetPreview,
  loadImage,
  handleLoad,
  handleError,
  handleLazyLoad,
  addLazyLoadListener,
  removeLazyLoadListener,
  getImageStyle,
  clickHandler,
  closeViewer,
  mounted,
  deleteHander
} from './index'

export const api = [
  'state',
  'src',
  'zIndex',
  'previewSrcList',
  'loadImage',
  'clickHandler',
  'closeViewer',
  'handleLoad',
  'handleError',
  'deleteHander'
]

const initState = ({ reactive, computed, api, props, images }) => {
  const state = reactive({
    mfPreviewVisible: props.previewVisible,
    images,
    error: false,
    loading: true,
    imageWidth: 0,
    imageHeight: 0,
    show: !props.lazy,
    showViewer: false,
    getPreview: computed(() => api.computedGetPreview()),
    getImageStyle: computed(() => api.computedGetImageStyle()),
    getAlignCenter: computed(() => api.computedGetAlignCenter())
  })

  return state
}

const initApi = ({ api, state, emit, props, vm, constants, nextTick, attrs }) => {
  Object.assign(api, {
    state,
    closeViewer: closeViewer(state),
    clickHandler: clickHandler(state),
    handleLoad: handleLoad({ state, emit }),
    handleError: handleError({ state, emit }),
    computedGetPreview: computedGetPreview(props),
    removeLazyLoadListener: removeLazyLoadListener(state),
    getImageStyle: getImageStyle({ state, vm, constants }),
    computedGetAlignCenter: computedGetAlignCenter({ props, constants }),
    mounted: mounted({ api, props }),
    handleLazyLoad: handleLazyLoad({ api, state, vm, nextTick }),
    loadImage: loadImage({ api, state, props, attrs }),
    computedGetImageStyle: computedGetImageStyle({ api, props }),
    addLazyLoadListener: addLazyLoadListener({ api, props, state, vm }),
    deleteHander: deleteHander(emit)
  })
}

const initWatch = ({ watch, state, api, props }) => {
  watch(
    () => props.src,
    (value, oldValue) => value !== oldValue && state.show && api.loadImage()
  )

  watch(
    () => state.show,
    (value) => value && api.loadImage()
  )
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, reactive, watch, provide },
  { vm, emit, constants, nextTick, attrs },
  { images }
) => {
  const api = {}
  const state = initState({ reactive, computed, api, props, images })

  initApi({ api, state, emit, props, vm, constants, nextTick, attrs })

  initWatch({ watch, state, api, props })

  onMounted(api.mounted)
  onBeforeUnmount(() => props.lazy && api.removeLazyLoadListener())

  provide('mfPreviewVisible', state.mfPreviewVisible)

  provide('urlList', props.previewSrcList)

  return api
}
