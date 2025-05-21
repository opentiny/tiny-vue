export const handleRefEvent =
  ({ props, api }) =>
  (type: string) => {
    if (props.manual) return

    if (type === 'mouseenter') {
      api.cancelDelayHide()
      api.delayShow()
    } else if (type === 'mouseleave') {
      api.cancelDelayShow()
      api.delayHide()
    }
  }

export const handlePopEvent =
  ({ props, api }) =>
  (type: string) => {
    if (props.manual) return

    if (type === 'mouseenter') {
      api.cancelDelayHide()
    }
  }

export const toggleShow =
  ({ state, props, emit }) =>
  (isShow: boolean) => {
    state.showPopper = isShow
    if (props.manual) {
      emit('update:show', isShow)
    }
  }
