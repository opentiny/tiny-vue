import { isDisplayNone } from '../common/deps/dom'

export const clickList =
  ({ emit, props }) =>
  () => {
    const list = {
      id: props.id,
      content: props.content,
      subtext: props.subText,
      contentdes: props.contentDes
    }

    emit('click', list)
  }

export const check =
  ({ api, emit, props, state, vm }) =>
  () => {
    if (
      state.loading ||
      props.finished ||
      props.disabled ||
      props.error ||
      // skip check when inside an inactive tab
      state.tabStatus === false
    ) {
      return
    }

    const offset = +props.offset
    const scrollParentRect = api.useRect(state.scroller)

    if (!scrollParentRect.height || isDisplayNone(vm.$el)) {
      return
    }

    let isReachEdge = false
    const placeholderRect = api.useRect(vm.$refs.placeholder)

    if (props.direction === 'up') {
      isReachEdge = scrollParentRect.top - placeholderRect.top <= offset
    } else {
      isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset
    }

    if (isReachEdge) {
      state.loading = true
      emit('update:loading', true)
      emit('load')
    }
  }

export const clickErrorText =
  ({ api, emit }) =>
  () => {
    emit('update:error', false)
    api.check()
  }
