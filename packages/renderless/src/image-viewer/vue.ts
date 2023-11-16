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
  computeZIndex,
  activeItems,
  imagePreview,
  initPage,
  beforeDestroy,
  itemClick,
  selectOption,
  langClick,
  getLastPrev,
  getDefaultPrev
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
  'handleDelete',
  'activeItems',
  'imagePreview',
  'itemClick',
  'selectOption',
  'langClick'
]

const initState = ({ reactive, computed, api, mode, props, constants, inject }) => {
  const state = reactive({
    originScale: '',
    moveable: false,
    pageX: '',
    pageY: '',
    pageY2: '',
    pageX2: '',
    mfPreviewVisible: inject('mfPreviewVisible', null),
    scale: 1,
    time: null,
    index: mode == 'pc' || mode == 'mobile-first' ? 0 : props.startPosition,
    imageName: '',
    isShow: false,
    infinite: true,
    loading: false,
    transform: { scale: 1, deg: 0, offsetX: 0, offsetY: 0, objfit: 'contain', enableTransition: false },
    urlList: props.urlList || inject('urlList', null),
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
    zIndex: computed(() => api.computeZIndex()),
    currentIndex: 0,
    mobileCurrentIndex: -1,
    isImagePreview: false,
    hiddenThumbnail: false,
    firstX: 0,
    endX: 0,
    showImageViewer: true,
    isThumbnail: props.isThumbnail,
    isMenuView: props.isMenuView,
    showFlag: 0,
    boxVisibility: false,
    fileName: '',
    scrollTop: 0,
    thumbnailTop: constants.THUMBNAILTOP,
    menuTop: constants.MENUTOP
  })

  return state
}

const initApi = ({ api, state, props, parent, nextTick, emit, t, constants, vm, mode }) => {
  Object.assign(api, {
    state,
    touchstart: touchstart({ state, mode, api }),
    touchmove: touchmove(state),
    touchend: touchend(state),
    reset: reset(state),
    prev: prev({ state, api, vm }),
    next: next({ state, api, vm }),
    getImageWidth: getImageWidth({ state, parent, props, nextTick, vm, mode }),
    handleVisible: handleVisible({ state, emit, props }),
    handleActions: handleActions(state, props, emit),
    handleImgLoad: handleImgLoad(state),
    handleMouseDown: handleMouseDown(state),
    computedIsFirst: computedIsFirst(state),
    computedIsSingle: computedIsSingle(props),
    handleImgError: handleImgError({ state, t }),
    computedIsLast: computedIsLast({ state, props }),
    watchVisible: watchVisible(state),
    deviceSupportUninstall: deviceSupportUninstall({ state, mode }),
    computedCurrentImg: computedCurrentImg(state),
    computedImgStyle: computedImgStyle({ state, constants }),
    computeZIndex: computeZIndex({ constants, props }),
    hide: hide({ props, api, state }),
    deviceSupportInstall: deviceSupportInstall({ state, api, mode }),
    toggleMode: toggleMode({ state, constants, api }),
    swipeRight: swipeRight({ api, state, emit }),
    swipeLeft: swipeLeft({ api, state, emit }),
    handleDelete: handleDelete({ api, state, emit }),
    activeItems: activeItems(state),
    imagePreview: imagePreview(state),
    initPage: initPage({ state, nextTick, api }),
    beforeDestroy: beforeDestroy({ api, state }),
    itemClick: itemClick({ state, vm, nextTick }),
    selectOption: selectOption({ state, api }),
    langClick: langClick(state),
    getLastPrev: getLastPrev({ state, vm }),
    getDefaultPrev: getDefaultPrev({ state, vm })
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

      if (props.previewVisible || state.mfPreviewVisible) {
        nextTick(() => {
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

  watch(
    () => state.isImagePreview,
    () =>
      nextTick(() => {
        api.getImageWidth()
      })
  )
}

export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, onUpdated, reactive, watch, inject, provide },
  { t, parent, nextTick, emit, constants, vm, mode }
) => {
  const api = {}
  const state = initState({ reactive, computed, api, mode, props, constants, inject })

  initApi({ api, state, props, parent, nextTick, emit, t, constants, vm, mode })

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

  onBeforeUnmount(api.beforeDestroy)

  provide('change-size', true)

  return api
}
