export const getClientWidth =
  ({ state, vm }) =>
  () => {
    if (vm.$el) {
      state.centerSpace = (document.documentElement.clientWidth - vm.$el.clientWidth) / 2
    }
  }

export const handleClick =
  ({ props, state, emit }) =>
  (event) => {
    if (state.disabled) return

    if (props.resetTime > 0) {
      state.disabled = true

      state.initTimer = setTimeout(() => {
        state.disabled = false
      }, props.resetTime)
    }
    emit('touchstart', event)
  }

export const clearTimer = (state) => () => clearTimeout(state.initTimer)

export const useTouchEvent =
  ({ state, vm, props }) =>
  () => {
    const screenHeight = window.innerHeight

    state.scrolling = false

    window.addEventListener('scroll', function () {
      clearTimeout(state.stayTime)
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

      if (props.animated && scrollTop > screenHeight / 2) {
        state.commHiddenSpace = vm.$el.clientWidth * 0.7
        state.centerSpace = -state.commHiddenSpace

        state.specialHiddenSpace = window.innerWidth - vm.$el.clientWidth * 0.3

        state.stayTime = setTimeout(function () {
          if (scrollTop === state.lastScrollTop) {
            state.centerSpace = (document.documentElement.clientWidth - vm.$el.clientWidth) / 2
            state.commHiddenSpace = ''
            state.specialHiddenSpace = ''
          }
        }, 1000)
        state.lastScrollTop = scrollTop
      } else {
        state.centerSpace = (document.documentElement.clientWidth - vm.$el.clientWidth) / 2
        state.commHiddenSpace = ''
        state.specialHiddenSpace = ''
      }
    })
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
