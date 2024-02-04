import { off, on } from '../common/deps/dom'

export const getClientWidth =
  ({ state, vm }) =>
  () => {
    if (vm.$refs.floatingButton) {
      state.centerSpace = (document.documentElement.clientWidth - vm.$refs.floatingButton.clientWidth) / 2
    }
  }

export const handleClick =
  ({ props, state, emit }) =>
  (event, index) => {
    if (state.disabled) return

    if (props.resetTime > 0) {
      state.disabled = true

      state.initTimer = setTimeout(() => {
        state.disabled = false
      }, props.resetTime)
    }

    if (state.isExpand) {
      state.isExpand = !state.isExpand
    } else if (props.isExpand) {
      state.isExpand = true
    }

    emit('click', event, index)
  }

export const clearTimer =
  ({ state, api }) =>
  () => {
    clearTimeout(state.initTimer)

    off(window, 'resize', api.getClientWidth)
    off(window, 'scroll', api.onScroll)
    off(window, 'scroll', api.getScrollListener)
  }

export const getScrollListener =
  ({ vm, props, state }) =>
  () => {
    const scrollElement = props.elementSelector ? state.scrollElement : window
    const screenHeight = props.elementSelector ? state.elementHeight : state.screenHeight

    clearTimeout(state.stayTime)

    const scrollTop = props.elementSelector
      ? scrollElement.scrollTop
      : document.documentElement.scrollTop || document.body.scrollTop

    if (vm.$refs.floatingButton) {
      if (props.animated && scrollTop > screenHeight / 2) {
        state.commHiddenSpace = vm.$refs.floatingButton.clientWidth * 0.7
        state.centerSpace = -state.commHiddenSpace
        state.specialHiddenSpace = -vm.$refs.floatingButton.clientWidth * 0.7

        state.stayTime = setTimeout(function () {
          if (scrollTop === state.lastScrollTop) {
            state.centerSpace = (document.documentElement.clientWidth - vm.$refs.floatingButton.clientWidth) / 2
            state.commHiddenSpace = ''
            state.specialHiddenSpace = ''
          }
        }, 1000)
        state.lastScrollTop = scrollTop
      } else {
        state.centerSpace = (document.documentElement.clientWidth - vm.$refs.floatingButton.clientWidth) / 2
        state.commHiddenSpace = ''
        state.specialHiddenSpace = ''
      }
    }
  }

export const useTouchEvent =
  ({ state, props, nextTick, api }) =>
  () => {
    state.scrolling = false

    if (props.elementSelector) {
      nextTick(() => {
        state.scrollElement = document.querySelector(props.elementSelector)

        state.elementHeight = state.scrollElement.scrollHeight

        state.scrollElement.addEventListener('scroll', api.getScrollListener)
      })
    } else {
      state.screenHeight = window.innerHeight

      window.addEventListener('scroll', api.getScrollListener)
    }
  }

export const onScroll =
  ({ state, api }) =>
  () => {
    if (state.scrolling) {
      return
    }
    state.scrolling = true
    requestAnimationFrame(api.useTouchEvent)
  }

export const computedStyle =
  ({ props, state }) =>
  () => {
    const styleObj = {}

    props.position === 'center' && (styleObj.right = state.centerSpace + 'px')
    props.position !== 'left' && (styleObj.left = '')

    if (props.animated) {
      styleObj.transition = 'right 0.5s,left 0.5s'

      if (props.position !== 'center' && state.commHiddenSpace) {
        styleObj.right = -state.commHiddenSpace + 'px'
      }

      if (props.position === 'left') {
        styleObj.left = state.specialHiddenSpace && state.specialHiddenSpace + 'px'
      }
    }

    return styleObj
  }

export const getExpandList =
  ({ props, state }) =>
  () => {
    if (props.expandList && props.expandList.length > 0) {
      const expandList = props.expandList.map((item) => {
        item.title = item.title.slice(0, 4)
        return item
      })
      if (props.expandList.length > 3) {
        state.expandList = expandList.slice(0, 3)
      } else {
        state.expandList = expandList
      }
    }
  }

export const mounted = (api) => () => {
  api.getClientWidth()
  api.onScroll()
  api.getExpandList()
  on(window, 'resize', api.getClientWidth)
}
