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

import { KEY_CODE } from '../common'
import { emitEvent } from '../common/event'
import { on, off, hasClass } from '../common/deps/dom'
import { toNumber } from '../common/string'

export const bindEvent = (api) => () => {
  on(window, 'resize', api.bindResize)
  api.bindResize()
}

export const unBindEvent = (api) => () => off(window, 'resize', api.bindResize)

export const bindResize =
  ({ parent, props, state }) =>
  () => {
    const handleEl = (parent.$el as HTMLElement).querySelector('div[role=tiny-slider]')

    state.sliderSize = handleEl['client' + (props.vertical ? 'Height' : 'Width')]
    state.sliderOffset = handleEl.getBoundingClientRect()
  }

export const bindKeyDown =
  ({ api, props, state }) =>
  (event) => {
    if (state.disabled || state.activeIndex < 0) {
      return
    }

    let currentValue = 0

    switch (event.keyCode) {
      case KEY_CODE.Home:
        currentValue = props.min
        break
      case KEY_CODE.End:
        currentValue = props.max
        break
      case KEY_CODE.PageUp:
        currentValue = state.activeValue + Math.ceil(state.rangeDiff / props.numPages)
        break
      case KEY_CODE.PageDown:
        currentValue = state.activeValue - Math.ceil(state.rangeDiff / props.numPages)
        break
      case KEY_CODE.ArrowUp:
      case KEY_CODE.ArrowRight:
        currentValue = state.activeValue + props.step
        break
      case KEY_CODE.ArrowDown:
      case KEY_CODE.ArrowLeft:
        currentValue = state.activeValue - props.step
        break
      default:
        currentValue = state.activeValue
        break
    }

    api.setActiveButtonValue(currentValue)
    api.setButtonStyle()
    api.setBarStyle()
  }

export const bindMouseDown =
  ({ api, constants, mode, emit, state }) =>
  (event) => {
    if (event.button !== 0 && event.detail !== 0) {
      state.activeIndex = -1
      return
    }

    if (!emitEvent(emit, 'start', api.getActiveButtonValue())) {
      state.activeIndex = -1
      return
    }

    const handleEl = event.target
    const isClickBar = hasClass(handleEl, constants.sliderCls(mode)) || hasClass(handleEl, constants.rangeCls(mode))
    const isClickBtn =
      hasClass(handleEl, constants.buttonCls(mode)) ||
      hasClass(handleEl, constants.leftSvgCls(mode)) ||
      hasClass(handleEl, constants.rightSvgCls(mode))
    if (state.disabled || (!isClickBtn && !isClickBar)) {
      state.activeIndex = -1
      return
    }

    on(window, 'mouseup', api.bindMouseUp)
    on(window, 'mousemove', api.bindMouseMove)
    on(window, 'touchend', api.bindMouseUp)
    on(window, 'touchmove', api.bindMouseMove)

    state.isDrag = isClickBtn
    isClickBtn && (state.activeIndex = api.getActiveButtonIndex(event))

    if (isClickBar) {
      const currentValue = api.calculateValue(event)
      if (state.isDouble) {
        if (Math.abs(currentValue - state.leftBtnValue) > Math.abs(state.rightBtnValue - currentValue)) {
          api.changeActiveValue(state.rightBtnValue < state.leftBtnValue)
        } else {
          api.changeActiveValue(state.rightBtnValue > state.leftBtnValue)
        }
      }
      api.setActiveButtonValue(currentValue)
      api.setButtonStyle()
      api.setBarStyle()

      emit('stop', api.getActiveButtonValue())
    }
  }

export const bindMouseMove =
  ({ api, nextTick, state }) =>
  (event) => {
    if (state.disabled || !state.isDrag) {
      return
    }

    api.setActiveButtonValue(api.calculateValue(event))
    api.setButtonStyle()
    api.setBarStyle()

    nextTick(() => {
      api.setTipStyle()
    })
  }

export const bindMouseUp =
  ({ api, emit, state }) =>
  () => {
    if (state.disabled || !state.isDrag) {
      return
    }

    state.showTip = false
    state.isDrag = false

    off(window, 'mouseup', api.bindMouseUp)
    off(window, 'mousemove', api.bindMouseMove)
    off(window, 'touchend', api.bindMouseUp)
    off(window, 'touchmove', api.bindMouseMove)

    emit('stop', api.getActiveButtonValue())
  }

export const displayTip =
  ({ api, nextTick, state }) =>
  (event) => {
    if (!state.showTip) {
      state.showTip = true
      api.changeActiveValue(api.getActiveButtonIndex(event) === 0)

      nextTick(() => {
        api.setTipStyle()
      })
    }
  }

export const hideTip = (state) => () => !state.isDrag && (state.showTip = false)

export const setTipStyle =
  ({ constants, mode, parent, props, state }) =>
  () => {
    if (!props.showTip) {
      return
    }

    const tipStyle = { top: 0, left: 0 }
    const tipEl = parent.$el.querySelector('.' + constants.tipCls(mode))
    const moveSize = ((state.activeValue - props.min) / state.rangeDiff) * state.sliderSize

    if (props.vertical) {
      tipStyle.top =
        state.sliderSize - moveSize - constants.BUTTON_SIZE - constants.TIP_HEIGHT / 2 + constants.HALF_BAR_HEIGHT
      tipStyle.left = -tipEl.clientWidth / 2 + constants.HALF_BAR_HEIGHT
    } else {
      tipStyle.top = -constants.TIP_HEIGHT - constants.BUTTON_SIZE / 2 + constants.HALF_BAR_HEIGHT
      tipStyle.left = moveSize - constants.HALF_BAR_HEIGHT - tipEl.clientWidth / 2
    }

    state.tipStyle = {
      top: tipStyle.top + 'px',
      left: tipStyle.left + 'px'
    }
  }

const getActiveButtonIndexFlag = ({ state, event, constants, mode }) => {
  const cls = constants.buttonCls(mode)
  const { previousElementSibling } = event.target

  return (
    state.isDouble &&
    (hasClass(previousElementSibling, cls) || event.target.className.baseVal === 'tiny-slider-right-svg')
  )
}

export const getActiveButtonIndex =
  ({ constants, mode, state }) =>
  (event) => {
    const flag = getActiveButtonIndexFlag({ state, event, constants, mode })
    return flag ? 1 : 0
  }

const calcCurrentValue = ({ currentValue, props, state }) => {
  if (currentValue <= props.min) {
    currentValue = props.min
  } else if (currentValue >= props.max) {
    currentValue = props.max
  } else {
    const step = props.step > 0 ? props.step : 1
    // step的精度
    let stepPrecision = 0
    if (step - parseInt(step) > 0) {
      stepPrecision = step.toString().split('.')[1].length
    }
    const stepValue = (currentValue - props.min) % step

    if (stepValue) {
      currentValue -= stepValue
      currentValue += stepValue * 2 > step ? Number(step) : 0
      if (stepPrecision) {
        // step为小数时，currentValue也保持相同的精度
        currentValue = currentValue.toFixed(stepPrecision)
      }
    }

    if (state.isDouble) {
      if (state.activeIndex === 0 && currentValue >= state.rightBtnValue) {
        currentValue = state.rightBtnValue
      } else if (state.activeIndex === 1 && currentValue <= state.leftBtnValue) {
        currentValue = state.leftBtnValue
      }
    }
  }

  return currentValue
}

export const setActiveButtonValue =
  ({ api, emit, props, state }) =>
  (value) => {
    let currentValue = value
    currentValue = calcCurrentValue({ currentValue, props, state })
    if (!state.isDouble) {
      state.leftBtnValue = currentValue
    } else {
      if (state.activeIndex === 0) {
        state.leftBtnValue = currentValue
      } else {
        state.rightBtnValue = currentValue
      }
    }

    state.activeValue = currentValue
    state.innerTrigger = true // 防止触发 watch

    emit('update:modelValue', api.getActiveButtonValue()) // 添加了一个emit触发input事件，实现双向绑定
  }

export const setButtonStyle =
  ({ props, state }) =>
  () => {
    const percent = ((state.activeValue - props.min) / state.rangeDiff) * 100
    const style = (props.vertical ? 'bottom' : 'left') + ':' + percent + '%'

    if (!state.isDouble || state.activeIndex === 0) {
      state.leftBtnPercent = percent
      state.leftBtnStyle = style
    } else {
      state.rightBtnPercent = percent
      state.rightBtnStyle = style
    }
  }

export const setBarStyle =
  ({ props, state }) =>
  () => {
    const minSize = Math.abs(state.leftBtnPercent - state.rightBtnPercent)
    const maxSize = Math.max(state.leftBtnPercent, state.rightBtnPercent)

    if (props.vertical) {
      state.barStyle = {
        bottom: maxSize - minSize + '%',
        height: minSize + '%'
      }
    } else {
      state.barStyle = {
        left: maxSize - minSize + '%',
        width: minSize + '%'
      }
    }
  }

export const initSlider =
  ({ api, props, state }) =>
  (value) => {
    state.isDouble = Array.isArray(value)

    const sliders = state.isDouble ? value : [value]

    sliders.length > 2 && (sliders.length = 2)
    sliders.forEach((item, index) => {
      if (index === 0) {
        state.leftBtnValue = Math.max(Number(item), props.min)
      } else {
        state.rightBtnValue = Math.min(Number(item), props.max)
        state.rightBtnShow = true
      }

      if (state.isInit) {
        api.changeActiveValue(index === 0)
      }

      api.setButtonStyle()
    })
    state.isInit = false
    api.setBarStyle()
  }

export const calculateValue =
  ({ props, state }) =>
  (event) => {
    let currentValue = 0
    const offset = state.sliderOffset

    if (event.type === 'touchmove' || event.type === 'touchstart' || event.type === 'touchend') {
      if (props.vertical) {
        currentValue = props.max - ((event.touches[0].pageY - offset.top) / state.sliderSize) * state.rangeDiff
      } else {
        currentValue = props.min + ((event.touches[0].pageX - offset.left) / state.sliderSize) * state.rangeDiff
      }
    } else {
      if (props.vertical) {
        currentValue = props.max - ((event.pageY - offset.top) / state.sliderSize) * state.rangeDiff
      } else {
        currentValue = props.min + ((event.pageX - offset.left) / state.sliderSize) * state.rangeDiff
      }
    }
    return currentValue
  }

export const changeActiveValue = (state) => (isLeft) => {
  state.activeIndex = isLeft ? 0 : 1
  state.activeValue = isLeft ? state.leftBtnValue : state.rightBtnValue
}

export const formatTipValue = (props) => (value) =>
  props.formatTooltip instanceof Function ? props.formatTooltip(value) : value

export const getActiveButtonValue = (state) => () =>
  state.isDouble ? [state.leftBtnValue, state.rightBtnValue] : state.leftBtnValue

export const autoSlider = (api) => (value) => {
  api.setActiveButtonValue(value)
  api.setButtonStyle()
  api.setBarStyle()
}

export const customBeforeAppearHook = (props) => (el) => {
  if (props.vertical) {
    el.style.bottom = 0 + '%'
    el.style.height = 0 + '%'
  } else {
    el.style.left = 0 + '%'
    el.style.width = 0 + '%'
  }
}

export const customAfterAppearHook =
  ({ state, props }) =>
  (el) => {
    const minSize = Math.abs(state.leftBtnPercent - state.rightBtnPercent)
    const maxSize = Math.max(state.leftBtnPercent, state.rightBtnPercent)

    if (props.vertical) {
      el.style.bottom = maxSize - minSize + '%'
      el.style.height = minSize + '%'
    } else {
      if (state.isDouble) {
        el.style.left = maxSize - minSize + '%'
        el.style.width = minSize + '%'
      } else {
        el.style.width = minSize + '%'
      }
    }
  }

export const watchActiveValue =
  ({ api, emit, props, state }) =>
  (newValue, oldValue) => {
    const nNewValue = toNumber(newValue) || 0
    const nOldValue = toNumber(oldValue) || 0

    if (nNewValue !== nOldValue) {
      api.autoSlider(nNewValue)

      if (nNewValue <= props.max && nNewValue >= props.min) {
        const value = api.getActiveButtonValue()

        if (state.lastValue && state.lastValue.toString() !== value.toString()) {
          emit('change', value)
        }

        state.lastValue = value
      }
    } else {
      state.activeValue = nNewValue || 0
    }
  }

export const watchModelValue =
  ({ api, state }) =>
  (value) => {
    // 防止多触点下，触发双向绑定导致渲染异常
    if (!state.innerTrigger) {
      api.initSlider(value)
      api.setActiveButtonValue(value)
    } else {
      state.innerTrigger = false

      if (!state.isDouble) {
        api.initSlider(value)
        api.setActiveButtonValue(value)
      }
    }
  }

export const getPoints =
  ({ props, state }) =>
  () => {
    if (props.showSteps && props.step > 0) {
      state.points = []
      const num = parseInt(props.max / props.step)
      for (let i = 1; i < num; i++) {
        const point = {
          position: (i / num) * 100 + '%',
          value: (i / num) * props.max
        }
        state.points.push(point)
      }
    }
  }

export const getLabels =
  ({ props, state }) =>
  () => {
    if (props.showLabel) {
      state.labels = []

      const isFunction = props.formatLabel instanceof Function
      const num = parseInt(props.max / props.step)
      for (let i = 0; i <= num; i++) {
        const val = (i / num) * props.max
        const label = {
          position: (i / num) * 100 + '%',
          label: isFunction ? props.formatLabel(val, i) : val,
          value: val
        }
        state.labels.push(label)
      }
    }
  }

export const inputValueChange =
  ({ props, state, api }) =>
  ($event, pos) => {
    if (props.disabled || !state.isDouble) return

    if (!/^\d+$/.test($event.target.value)) {
      if (pos === 'left') {
        state.inputValue.splice(0, 1, state.leftBtnValue)
      } else {
        state.inputValue.splice(1, 1, state.rightBtnValue)
      }
      return
    }
    api.initSlider([Math.min(...state.inputValue), Math.max(...state.inputValue)])
  }
