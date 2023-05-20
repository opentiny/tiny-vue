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

export const toggle = ({ state, api }) => (value) => {
  if (value === undefined) {
    // 如果已经是全屏状态，则退出
    if (state.isFullscreen) {
      api.exit()
    } else {
      api.request()
    }
  } else {
    value ? api.request() : api.exit()
  }
}

export const request = ({ props, state, vm, sf, api }) => () => {
  const change = () => {
    if (state.isPageOnly) {
      state.isFullscreen = true

      api.onChangeFullscreen()
      off(document, 'keyup', api.keypressCallback)
      on(document, 'keyup', api.keypressCallback)
    } else {
      sf.off('change', api.fullScreenCallback)
      sf.on('change', api.fullScreenCallback)
      sf.request(props.teleport ? document.body : vm.$el)
    }
    if (props.teleport) {
      // teleport：将目标元素挪到body下，并在原地留一个标记用于还原
      if (vm.$el.parentNode === document.body) {
        return
      }

      state.__parentNode = vm.$el.parentNode
      state.__token = document.createComment('fullscreen-token')
      state.__parentNode.insertBefore(state.__token, vm.$el)

      document.body.appendChild(vm.$el)
    }
  }

  props.beforeChange ? props.beforeChange(change) : change()
}

export const exit = ({ state, api, sf, props }) => () => {
  const change = () => {
    if (!state.isFullscreen) {
      return
    }

    if (state.isPageOnly) {
      state.isFullscreen = false

      api.onChangeFullscreen()
      off(document, 'keyup', api.keypressCallback)
    } else {
      sf.exit()
    }
  }

  props.beforeChange ? props.beforeChange(change) : change()
}

export const shadeClick = ({ props, vm, api }) => (e) => {
  if (e.target === vm.$el) {
    if (props.exitOnClickWrapper) {
      api.exit()
    }
  }
}

// 全屏api事件回调
export const fullScreenCallback = ({ state, sf, api }) => () => {
  if (!sf.isFullscreen) {
    sf.off('change', api.fullScreenCallback)
  }

  state.isFullscreen = sf.isFullscreen

  api.onChangeFullscreen()
}

// 按键回调
export const keypressCallback = (api) => (e) => {
  if (e.key === 'Escape') {
    api.exit()
  }
}

// isFullscreen变化时，上报事件
export const onChangeFullscreen = ({ props, state, vm, emit }) => () => {
  if (!state.isFullscreen) {
    if (props.teleport && state.__parentNode) {
      // 还原位置
      state.__parentNode.insertBefore(vm.$el, state.__token)
      state.__parentNode.removeChild(state.__token)
    }
  }

  emit('change', state.isFullscreen)
  emit('update:fullscreen', state.isFullscreen)
}

export const enter = (api) => () => {
  api.request()
}

export const getState = (state) => () => state.isFullscreen

export const computeWrapperStyle = ({ props, state }) => () => {
  let style = {}

  if ((state.isPageOnly || props.teleport) && state.isFullscreen) {
    Object.assign(style, {
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%'
    })
  }

  if (style && props.zIndex) {
    style.zIndex = props.zIndex
  }

  return style
}
