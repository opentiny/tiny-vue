export const computedRootStyle =
  ({ props, state }) =>
  () => {
    return {
      height: state.isFixed ? `${state.rootHeight}px` : '',
      width: state.isFixed ? `${state.rootWidth}px` : ''
    }
  }

export const computedStickyStyle =
  ({ props, state }) =>
  () => {
    if (!state.isFixed) return {}

    const offset = props.offset ? (typeof props.offset === 'number' ? props.offset + 'px' : props.offset) : 0

    return {
      height: `${state.rootHeight}px`,
      width: `${state.rootWidth}px`,
      top: props.position === 'top' ? offset : '',
      bottom: props.position === 'bottom' ? offset : '',
      transform: state.transform ? `translateY(${state.transform}px)` : '',
      zIndex: props.zIndex
    }
  }

export const updateRoot =
  ({ props, state, emit, api }) =>
  () => {
    if (!state.scrollParent || !state.target) return

    api.getRootRect()

    state.scrollTop =
      state.scrollParent instanceof Window ? document.documentElement.scrollTop : state.scrollParent.scrollTop || 0

    if (props.target) {
      state.targetRect = api.useRect(state.target)
    }

    if (props.position === 'top') {
      if (props.target) {
        const difference = state.targetRect.bottom - state.offset - state.rootHeight
        state.isFixed = state.offset > state.rootTop && state.targetRect.bottom > 0
        state.transform = difference < 0 ? difference : 0
      } else {
        state.isFixed = state.offset > state.rootTop
      }
    } else if (props.target) {
      const difference = state.windowHeight - state.targetRect.top - state.offset - state.rootHeight
      state.isFixed = state.windowHeight - state.offset < state.rootBottom && state.windowHeight > state.targetRect.top
      state.transform = difference < 0 ? -difference : 0
    } else {
      state.isFixed = state.windowHeight - state.offset < state.rootBottom
    }
    emit('scroll', { scrollTop: state.scrollTop, isFixed: state.isFixed })
  }

export const getRootRect =
  ({ state, vm, api }) =>
  () => {
    const rootRect = api.useRect(vm.$refs.root)

    state.rootHeight = rootRect.height
    state.rootWidth = rootRect.width
    state.rootTop = rootRect.top
    state.rootBottom = rootRect.bottom
  }

export const getTarget =
  ({ state, props, api }) =>
  () => {
    if (props.target) {
      state.target = document.querySelector<HTMLElement>(props.target) ?? undefined
      if (state.target) {
        state.targetRect = api.useRect(state.target)
      } else {
        throw new Error(`[AUI Error][aui-sticky] Target does not exist: ${props.target}`)
      }
    } else {
      state.target = document.documentElement
    }
  }

export const unitToPx = () => (value) => {
  if (typeof value === 'number') {
    return value
  }

  if (value.endsWith('rem')) {
    const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize)
    return parseFloat(value) * rootFontSize
  }

  if (value.endsWith('vh')) {
    return (parseFloat(value) / 100) * window.innerHeight
  }

  if (value.endsWith('vw')) {
    return (parseFloat(value) / 100) * window.innerWidth
  }

  return parseFloat(value)
}
