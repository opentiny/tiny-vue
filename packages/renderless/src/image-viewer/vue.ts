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
  computedIsSingle,
  watchVisible,
  computedIsFirst,
  computedIsLast,
  computedCurrentImg,
  computedImgStyle,
  hide,
  deviceSupportInstall,
  deviceSupportUninstall,
  handleImgLoad,
  handleImgError,
  handleMouseDown,
  reset,
  toggleMode,
  prev,
  next,
  handleActions,
  handleVisible,
  getImageWidth,
  swipeLeft,
  swipeRight,
  handleDelete,
  touchstart,
  touchmove,
  touchend,
  computeZIndex
} from './index'

export const api = [
  'state',
  'zIndex',
  'touchstart',
  'touchmove',
  'touchend',
  'urlList',
  'hide',
  'prev',
  'next',
  'handleActions',
  'toggleMode',
  'handleImgLoad',
  'handleImgError',
  'handleMouseDown',
  'handleVisible',
  'swipeLeft',
  'swipeRight',
  'handleDelete'
]

const initState = ({ reactive, computed, api, mode, props, constants }) => {
  const state = reactive({
    index: mode == 'pc' ? 0 : props.startPosition,
    isShow: false,
    infinite: true,
    loading: false,
    transform: { scale: 1, deg: 0, offsetX: 0, offsetY: 0, objfit: 'contain', enableTransition: false },
    urlList: props.urlList,
    mode: constants.MODE.CONTAIN,
    previewVisible: props.previewVisible,
    fullScreen: props.imageFullCurrent,
    hammer: null,
    imageItemWidth: 0,
    imageAllWidth: 0,
    imageTransform: 0,
    imageTransformSize: 0,
    imageTransition: 300,
    imageList: null,
    arrowStyle: null,
    delete: false,
    isLast: computed(() => api.computedIsLast()),
    isFirst: computed(() => api.computedIsFirst()),
    isSingle: computed(() => api.computedIsSingle()),
    imgStyle: computed(() => api.computedImgStyle()),
    currentImg: computed(() => api.computedCurrentImg()),
    zIndex: computed(() => api.computeZIndex())
  })

  return state
}

const initApi = ({ api, state, props, parent, nextTick, emit, t, constants }) => {
  Object.assign(api, {
    state,
    touchstart: touchstart(state),
    touchmove: touchmove(state),
    touchend: touchend(state),
    reset: reset(state),
    prev: prev({ state, props }),
    next: next({ state, props }),
    getImageWidth: getImageWidth({ state, parent, props, nextTick }),
    handleVisible: handleVisible({ state, emit, props }),
    handleActions: handleActions(state),
    handleImgLoad: handleImgLoad(state),
    handleMouseDown: handleMouseDown(state),
    computedIsFirst: computedIsFirst(state),
    computedIsSingle: computedIsSingle(props),
    handleImgError: handleImgError({ state, t }),
    computedIsLast: computedIsLast({ state, props }),
    watchVisible: watchVisible(state),
    deviceSupportUninstall: deviceSupportUninstall(state),
    computedCurrentImg: computedCurrentImg({ state, props }),
    computedImgStyle: computedImgStyle({ state, constants }),
    computeZIndex: computeZIndex({ constants, props }),
    hide: hide({ props, api }),
    deviceSupportInstall: deviceSupportInstall({ state, api }),
    toggleMode: toggleMode({ state, constants, api }),
    swipeRight: swipeRight({ api, state, emit }),
    swipeLeft: swipeLeft({ api, state, emit }),
    handleDelete: handleDelete({ api, state, emit })
  })
}

const initWatch = ({ watch, state, api, props, nextTick, vm }) => {
  watch(
    () => state.index,
    (value) => {
      api.reset()
      props.onSwitch(value)
    },
    { immediate: true }
  )

  watch(
    () => props.previewVisible,
    (value) => {
      api.watchVisible(value)

      if (props.previewVisible) {
        nextTick(() => {
          state.urlList = props.urlList
          api.getImageWidth()
        })
      }
    },
    { immediate: true }
  )

  watch(
    () => state.currentImg,
    (value) => {
      nextTick(() => {
        const index = state.urlList.indexOf(value)

        let imageIns = vm.$refs[`img_${index}`]
        if (Array.isArray(imageIns)) {
          imageIns = imageIns[0]
        }

        if (imageIns) {
          state.loading = !imageIns.complete
        }
      })
    },
    { immediate: true }
  )
}

export const renderless = (props, { computed, onMounted, onUpdated, reactive, watch }, { t, parent, nextTick, emit, constants, vm, mode }) => {
  const api = {}
  const state = initState({ reactive, computed, api, mode, props, constants })

  initApi({ api, state, props, parent, nextTick, emit, t, constants })

  initWatch({ watch, state, api, props, nextTick, vm })

  onMounted(api.deviceSupportInstall)

  onUpdated(() => {
    if (props.asyncClose) {
      setTimeout(() => {
        state.previewVisible = false
        emit('update:preview-visible', false)
      }, 3000)
    }
  })

  return api
}
