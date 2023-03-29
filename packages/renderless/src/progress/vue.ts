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
  computedBarStyle,
  computedRelativeStrokeWidth,
  computedRadius,
  computedTrackPath,
  computedPerimeter,
  computedRate,
  computedStrokeDashoffset,
  computedTrailPathStyle,
  computedCirclePathStyle,
  computedStroke,
  computedIconClass,
  computedProgressTextSize,
  computedContent,
  getCurrentColor,
  getLevelColor,
  getColorArray,
  customBeforeAppearHook,
  customAppearHook,
  customAfterAppearHook
} from './index'

export const api = ['state', 'getCurrentColor', 'getLevelColor', 'getColorArray', 'customBeforeAppearHook', 'customAppearHook', 'customAfterAppearHook']

export const renderless = (props, { computed, reactive }, { constants }) => {
  const api = {}
  const state = reactive({
    rate: computed(() => api.computedRate()),
    radius: computed(() => api.computedRadius()),
    stroke: computed(() => api.computedStroke()),
    content: computed(() => api.computedContent()),
    barStyle: computed(() => api.computedBarStyle()),
    trackPath: computed(() => api.computedTrackPath()),
    perimeter: computed(() => api.computedPerimeter()),
    iconClass: computed(() => api.computedIconClass()),
    trailPathStyle: computed(() => api.computedTrailPathStyle()),
    circlePathStyle: computed(() => api.computedCirclePathStyle()),
    progressTextSize: computed(() => api.computedProgressTextSize()),
    strokeDashoffset: computed(() => api.computedStrokeDashoffset()),
    relativeStrokeWidth: computed(() => api.computedRelativeStrokeWidth())
  })

  Object.assign(api, {
    state,
    customAppearHook,
    computedContent: computedContent({ props }),
    getColorArray: getColorArray(props),
    computedRate: computedRate({ constants, props }),
    computedPerimeter: computedPerimeter({ state }),
    computedRadius: computedRadius({ constants, props, state }),
    computedTrackPath: computedTrackPath({ constants, props, state }),
    computedIconClass: computedIconClass({ constants, props }),
    computedCirclePathStyle: computedCirclePathStyle({ props, state }),
    computedStrokeDashoffset: computedStrokeDashoffset({ state }),
    computedTrailPathStyle: computedTrailPathStyle({ state }),
    computedRelativeStrokeWidth: computedRelativeStrokeWidth({ props }),
    computedProgressTextSize: computedProgressTextSize({ constants, props }),
    customAfterAppearHook: customAfterAppearHook({ state, props }),
    customBeforeAppearHook: customBeforeAppearHook({ props, state }),
    getLevelColor: getLevelColor(api),
    computedBarStyle: computedBarStyle({ api, props }),
    getCurrentColor: getCurrentColor({ api, props }),
    computedStroke: computedStroke({ api, constants, props })
  })

  return api
}
