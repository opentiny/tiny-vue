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
  computedCanvasStyle,
  computedChartColor,
  dataHandler,
  nextTickResize,
  resize,
  echartsResize,
  optionsHandler,
  judgeWidthHandler,
  resizeableHandler,
  init,
  addResizeListener,
  removeResizeListener,
  addWatchToProps,
  createEventProxy,
  themeChange,
  clean,
  mounted,
  changeHandler,
  resizeHandler,
  computedInitColor,
  getDefaultThemeColors
} from './index'
import { camelToKebab } from './deps/utils'

export const api = [
  'state',
  'camelToKebab',
  'dataHandler',
  'nextTickResize',
  'resize',
  'echartsResize',
  'optionsHandler',
  'judgeWidthHandler',
  'resizeableHandler',
  'init',
  'addResizeListener',
  'removeResizeListener',
  'addWatchToProps',
  'createEventProxy',
  'themeChange',
  'clean',
  'mounted',
  'changeHandler',
  'resizeHandler',
  'getDefaultThemeColors'
]

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, reactive, watch, markRaw },
  { t, vm, emit, nextTick },
  { echartsLib }
) => {
  const state = reactive({
    chartColor: computed(() => api.computedInitColor()),
    canvasStyle: computed(() => api.computedCanvasStyle())
  })

  const api = {
    state,
    camelToKebab,
    computedChartColor: computedChartColor(props),
    computedCanvasStyle: computedCanvasStyle(props),
    computedInitColor: computedInitColor(props)
  }

  onMounted(() => api.mounted())
  onBeforeUnmount(() => api.clean())

  return Object.assign(api, {
    resize: resize({ props, vm, api }),
    echartsResize: echartsResize(state),
    clean: clean({ props, state, api }),
    themeChange: themeChange({ api, state }),
    changeHandler: changeHandler({ api, props }),
    resizeHandler: resizeHandler({ api, props }),
    nextTickResize: nextTickResize({ api, nextTick }),
    init: init({ state, props, api, vm, echartsLib, markRaw }),
    createEventProxy: createEventProxy({ api, props, state }),
    addResizeListener: addResizeListener({ state, api }),
    resizeableHandler: resizeableHandler({ api, state }),
    mounted: mounted({ api, state, vm, props, watch, t }),
    removeResizeListener: removeResizeListener({ state, api }),
    addWatchToProps: addWatchToProps({ vm, props, watch, api }),
    dataHandler: dataHandler({ api, props, state, echartsLib, t, vm }),
    judgeWidthHandler: judgeWidthHandler({ props, api, vm, nextTick }),
    getDefaultThemeColors: getDefaultThemeColors(),

    optionsHandler: optionsHandler({
      props,
      state,
      emit,
      echartsLib,
      api,
      vm
    })
  })
}
