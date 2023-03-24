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

export const computedBarStyle = ({ api, props }) => () => ({
  width: props.percentage + '%',
  backgroundColor: api.getCurrentColor(props.percentage)
})

export const computedRelativeStrokeWidth = ({ props }) => () => ((props.strokeWidth / props.width) * 100).toFixed(1)

export const computedRadius = ({ constants, props, state }) => () =>
  props.type === constants.PROGRESS_TYPE.CIRCLE || props.type === constants.PROGRESS_TYPE.DASHBOARD
    ? parseInt(50 - parseFloat(state.relativeStrokeWidth) / 2, 10)
    : 0

export const computedTrackPath = ({ constants, props, state }) => () => {
  const radiusValue = state.radius
  const isDashboardType = props.type === constants.PROGRESS_TYPE.DASHBOARD

  return `
    M 50 50
    m 0 ${isDashboardType ? '' : '-'}${radiusValue}
    a ${radiusValue} ${radiusValue} 0 1 1 0 ${isDashboardType ? '-' : ''}${radiusValue * 2}
    a ${radiusValue} ${radiusValue} 0 1 1 0 ${isDashboardType ? '' : '-'}${radiusValue * 2}
    `
}

export const computedPerimeter = ({ state }) => () => 2 * Math.PI * state.radius

export const computedRate = ({ constants, props }) => () => (props.type === constants.PROGRESS_TYPE.DASHBOARD ? 0.75 : 1)

export const computedStrokeDashoffset = ({ state }) => () => `${(-1 * state.perimeter * (1 - state.rate)) / 2}px`

export const computedTrailPathStyle = ({ state }) => () => ({
  strokeDasharray: `${state.perimeter * state.rate}px, ${state.perimeter}px`,
  strokeDashoffset: state.strokeDashoffset
})

export const computedCirclePathStyle = ({ props, state }) => () => ({
  strokeDasharray: `${state.perimeter * state.rate * (props.percentage / 100)}px, ${state.perimeter}px`,
  strokeDashoffset: state.strokeDashoffset,
  transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
})

export const computedStroke = ({ api, constants, props }) => () =>
  (props.color && api.getCurrentColor(props.percentage)) || constants.STATUS_TO_COLOR[props.status] || constants.STATUS_DEFAULT_COLOR

export const computedIconClass = ({ constants, props }) => () => {
  if (props.status === constants.PROGRESS_STATUS.SUCCESS) {
    return props.type === constants.PROGRESS_TYPE.LINE ? constants.ICON_SUCCESS : constants.ICON_CIRCLE_SUCCESS
  } else if (props.status === constants.PROGRESS_STATUS.WARNING) {
    return props.type === constants.PROGRESS_TYPE.LINE ? constants.ICON_WARNING : constants.ICON_CIRCLE_WARNING
  } else if (props.status === constants.PROGRESS_STATUS.EXCEPTION) {
    return props.type === constants.PROGRESS_TYPE.LINE ? constants.ICON_EXCEPTION : constants.ICON_CIRCLE_EXCEPTION
  }
}

export const computedProgressTextSize = ({ constants, props }) => () =>
  props.type === constants.PROGRESS_TYPE.LINE ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2

export const computedContent = ({ props }) => () => (typeof props.format === 'function' ? props.format(props.percentage) || '' : `${props.percentage}%`)

export const getCurrentColor = ({ api, props }) => (percentage) => {
  if (typeof props.color === 'function') {
    return props.color(percentage)
  } else if (typeof props.color === 'string') {
    return props.color
  } else {
    return api.getLevelColor(percentage)
  }
}

export const getLevelColor = (api) => (percentage) => {
  const colorArray = api.getColorArray().sort((a, b) => a.percentage - b.percentage)

  for (let i = 0; i < colorArray.length; i++) {
    if (colorArray[i].percentage > percentage) {
      return colorArray[i].color
    }
  }

  return colorArray[colorArray.length - 1].color
}

export const getColorArray = (props) => () => {
  const color = props.color
  const span = 100 / color.length

  return color.map((seriesColor, index) => {
    if (typeof seriesColor === 'string') {
      return {
        color: seriesColor,
        progress: (index + 1) * span
      }
    }

    return seriesColor
  })
}

export const customBeforeAppearHook = ({ props, state }) => (el) => {
  if (props.type === 'line') {
    el.style.width = 0
  } else if (props.type === 'circle') {
    el.style.strokeDasharray = state.perimeter * state.content
    el.style.strokeDashoffset = state.perimeter
  }
}

export const customAppearHook = (el) => {
  el.style.transition = 'all 0.5s'
}

export const customAfterAppearHook = ({ state, props }) => (el) => {
  if (props.type === 'line') {
    el.style.width = state.barStyle.width
  } else if (props.type === 'circle') {
    el.style.strokeDashoffset = 0
  }
}
