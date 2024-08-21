export const processIndex = ({ activeIndex, index, length }) => {
  if (activeIndex === 0 && index === length - 1) {
    return -1
  } else if (activeIndex === length - 1 && index === 0) {
    return length
  } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
    return length + 1
  } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
    return -2
  }

  return index
}

export const calculateTranslate =
  ({ CARD_SCALE, state }) =>
  ({ activeIndex, index, parentWidth }) => {
    if (state.inStage) {
      return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
    } else if (index < activeIndex) {
      return (-(1 + CARD_SCALE) * parentWidth) / 4
    }

    return ((3 + CARD_SCALE) * parentWidth) / 4
  }

export const translateItem =
  ({ api, CARD_SCALE, parent, state, carouselParent }) =>
  ({ activeIndex, index, oldIndex }) => {
    const parentHeight = carouselParent.$el.offsetHeight
    const parentWidth = carouselParent.$el.offsetWidth
    const vnode = carouselParent
    const length = vnode.state.items.length
    const { TYPE_CARD, TYPE_VERTICAL } = parent.$constants

    if (vnode.type !== TYPE_CARD && oldIndex !== undefined) {
      state.animating = index === activeIndex || index === oldIndex
    }

    state.animatingMf = ![activeIndex, oldIndex].includes(index)

    if (index !== activeIndex && length > 2 && vnode.loop) {
      index = api.processIndex({ index, activeIndex, length })
    }

    if (vnode.type === TYPE_CARD) {
      state.inStage = Math.round(Math.abs(index - activeIndex)) <= 1
      state.active = index === activeIndex

      state.translate = api.calculateTranslate({
        index,
        activeIndex,
        parentWidth
      })

      state.scale = state.active ? 1 : CARD_SCALE
    } else {
      state.active = index === activeIndex

      if (length === 2 && !state.active) {
        state.translate = vnode.type === TYPE_VERTICAL ? parentHeight : parentWidth
      } else {
        state.translate =
          vnode.type === TYPE_VERTICAL ? parentHeight * (index - activeIndex) : parentWidth * (index - activeIndex)
      }
    }

    state.ready = true
  }

export const handleItemClick =
  ({ state, parent, carouselParent }) =>
  () => {
    const vnode = carouselParent

    if (vnode && vnode.type === parent.$constants.TYPE_CARD) {
      const index = vnode.state.items.findIndex((item) => item.state.translate === state.translate)
      vnode.setActiveItem(index)
    }
  }

export const computedTransform =
  ({ carouselParent, TYPE_VERTICAL, mode, state }) =>
  () => {
    const TRANSLATE =
      carouselParent.type === TYPE_VERTICAL
        ? `translateY(${state.translate + state.delta}px) scale(${state.scale})`
        : `translateX(${state.translate + state.delta}px) scale(${state.scale})`
    const style = mode === 'mobile-first' ? { width: '100%', height: '100%' } : {}

    moveItemBack(carouselParent, state, TYPE_VERTICAL)

    return {
      msTransform: TRANSLATE,
      webkitTransform: TRANSLATE,
      transform: TRANSLATE,
      ...style
    }
  }
// 幻灯片切换完后将第一张的位置移动到当前显示的幻灯片的后面，修复幻灯片数量为2时滚动方向不一致的问题
const moveItemBack = (parent, state, TYPE_VERTICAL) => {
  if (!parent || !parent.$el) return

  const length = parent.state.items.length

  setTimeout(() => {
    if (length === 2 && !state.active) {
      state.translate = parent.type === TYPE_VERTICAL ? parent.$el.offsetHeight : parent.$el.offsetWidth
    }
  }, 300) // 300是幻灯片动画时间
}
export const resetAnimatingMf = (state) => () => {
  state.animatingMf = false
}

export const setDelta =
  ({ state }) =>
  (val) => {
    state.delta = val
  }
