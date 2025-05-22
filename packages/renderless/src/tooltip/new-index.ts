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
    if (!props.enterable) return

    if (type === 'mouseenter') {
      api.cancelDelayHide()
    } else if (type === 'mouseleave') {
      api.delayHide()
    }
  }

export const toggleShow =
  ({ state, props, emit, api }) =>
  (isShow: boolean) => {
    // 智能识别模式
    if (props.visible === 'auto' && state.referenceElm?.firstElementChild) {
      const { clientWidth, scrollWidth } = state.referenceElm.firstElementChild
      if (scrollWidth <= clientWidth) {
        return
      }
    }

    state.showPopper = isShow
    if (props.manual) {
      emit('update:modelValue', isShow)
    }

    // 自动隐藏: 如果显示，且要自动隐藏，则延时后关闭
    if (!props.manual && props.hideAfter && isShow) {
      api.delayHideAfter()
    }
  }
