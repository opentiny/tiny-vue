import { getScrollContainer } from '../common/deps/infinite-scroll'
import { isNull } from '../common/type'

let supportsPassive = false

if (typeof window !== 'undefined') {
  supportsPassive = false

  try {
    const opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get() {
        supportsPassive = true
      }
    })

    window.addEventListener('test', null, opts)
  } catch (e) {
    // empty
  }
}

export const handleVisibilityChange =
  ({ api, emit, state }) =>
  (isVisible, entry) => {
    if (state.ready) {
      if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
        emit('visible')
        requestAnimationFrame(() => {
          api.updateVisibleItems(false)
        })
      } else {
        emit('hidden')
      }
    }
  }

export const updateVisibleItems =
  ({ api, emit, props, state, vm }) =>
  (checkItem, checkPositionDiff = false) => {
    const itemSize = props.itemSize
    const gridItems = props.gridItems || 1
    const itemSecondarySize = props.itemSecondarySize || itemSize
    const minItemSize = state.temporary.computedMinItemSize
    const typeField = props.typeField
    const keyField = state.simpleArray ? null : props.keyField
    const items = props.items
    const count = items.length
    const sizes = state.sizes
    const views = state.temporary.views
    const unusedViews = state.temporary.unusedViews
    const pool = state.pool
    const itemIndexByKey = state.itemIndexByKey
    let startIndex, endIndex, visibleStartIndex, visibleEndIndex, totalSize

    if (!count) {
      startIndex = endIndex = visibleStartIndex = visibleEndIndex = totalSize = 0
    } else if (state.temporary.prerender) {
      startIndex = visibleStartIndex = 0
      visibleEndIndex = endIndex = Math.min(props.prerender, items.length)
      totalSize = null
    } else {
      const scroll = api.getScroll()

      if (doCheckPositionDiff({ checkPositionDiff, scroll, state, itemSize, minItemSize })) {
        return { continuous: true }
      }

      state.temporary.lastUpdateScrollPosition = scroll.start

      const args = { props, scroll, vm, itemSize, count, sizes, startIndex, totalSize }

      Object.assign(args, { endIndex, items, visibleStartIndex, visibleEndIndex, gridItems })

      const ret = computeRange(args)

      startIndex = ret.startIndex
      endIndex = ret.endIndex
      visibleStartIndex = ret.visibleStartIndex
      visibleEndIndex = ret.visibleEndIndex
      totalSize = ret.totalSize
    }

    if (endIndex - startIndex > props.itemsLimit) {
      throw new Error('[TINY Error][RecycleScroller] Rendered items limit reached')
    }

    state.totalSize = totalSize

    const continuous = startIndex <= state.temporary.endIndex && endIndex >= state.temporary.startIndex
    const args = { continuous, pool, checkItem, itemIndexByKey, keyField, startIndex }

    Object.assign(args, { endIndex, api, items, views, itemSize, sizes, typeField, unusedViews })
    Object.assign(args, { emit, gridItems, itemSecondarySize })

    computePool(args)

    state.temporary.startIndex = startIndex
    state.temporary.endIndex = endIndex

    if (props.emitUpdate) {
      emit('update', startIndex, endIndex, visibleStartIndex, visibleEndIndex)
    }

    clearTimeout(state.temporary.sortTimer)

    state.temporary.sortTimer = setTimeout(api.sortViews, props.updateInterval + 300)

    return { continuous }
  }

export const computedSizes =
  ({ props, state }) =>
  () => {
    if (props.itemSize === null) {
      const sizes = { '-1': { accumulator: 0 } }
      const items = props.items
      const field = props.sizeField
      const minItemSize = props.minItemSize
      let computedMinSize = 10000
      let accumulator = 0
      let current

      for (let i = 0, l = items.length; i < l; i++) {
        current = items[i][field] || minItemSize

        if (current < computedMinSize) {
          computedMinSize = current
        }

        accumulator += current
        sizes[i] = { accumulator, size: current }
      }

      state.temporary.computedMinItemSize = computedMinSize

      return sizes
    }

    return []
  }

export const computedItemIndexByKey = (props) => () => {
  const { keyField, items } = props
  const result = {}

  for (let i = 0, l = items.length; i < l; i++) {
    result[items[i][keyField]] = i
  }

  return result
}

export const getScroll =
  ({ props, vm }) =>
  () => {
    const { $el: el } = vm
    const direction = props.direction
    const isVertical = direction === 'vertical'
    let scrollRange

    if (props.pageMode) {
      const bounds = el.getBoundingClientRect()
      const boundsSize = isVertical ? bounds.height : bounds.width
      let size = isVertical ? window.innerHeight : window.innerWidth
      let start = -(isVertical ? bounds.top : bounds.left)

      if (start < 0) {
        size += start
        start = 0
      }

      if (start + size > boundsSize) {
        size = boundsSize - start
      }

      scrollRange = { start, end: start + size }
    } else if (isVertical) {
      scrollRange = { start: el.scrollTop, end: el.scrollTop + el.clientHeight }
    } else {
      scrollRange = { start: el.scrollLeft, end: el.scrollLeft + el.clientWidth }
    }

    return scrollRange
  }

export const unuseView =
  (state) =>
  (view, fake = false) => {
    const unusedViews = state.temporary.unusedViews
    const type = view.nr.type
    let unusedPool = unusedViews.get(type)

    if (!unusedPool) {
      unusedPool = []
      unusedViews.set(type, unusedPool)
    }

    unusedPool.push(view)

    if (!fake) {
      view.nr.used = false
      view.position = -9999
    }
  }

let uid = 0

export const addView =
  ({ markRaw, shallowReactive }) =>
  (pool, index, item, key, type) => {
    const nr = markRaw({ id: uid++, index, used: true, key, type })
    const view = shallowReactive({ item, position: 0, nr })

    pool.push(view)

    return view
  }

export const sortViews = (state) => () => {
  state.pool.sort((viewA, viewB) => viewA.nr.index - viewB.nr.index)
}

export const handleScroll =
  ({ api, props, state }) =>
  () => {
    if (!state.temporary.scrollDirty) {
      state.temporary.scrollDirty = true

      if (state.temporary.updateTimeout) return

      const requestUpdate = () =>
        requestAnimationFrame(() => {
          state.temporary.scrollDirty = false

          const { continuous } = api.updateVisibleItems(false, true)

          if (!continuous) {
            cancelAnimationFrame(state.temporary.refreshTimeout)

            state.temporary.refreshTimeout = requestAnimationFrame(() => api.updateVisibleItems(false))
          }
        })

      requestUpdate()

      if (props.updateInterval) {
        state.temporary.updateTimeout = setTimeout(() => {
          state.temporary.updateTimeout = 0

          if (state.temporary.scrollDirty) requestUpdate()
        }, props.updateInterval)
      }
    }
  }

export const handleResize =
  ({ api, emit, state }) =>
  () => {
    emit('resize')
    if (state.ready) api.updateVisibleItems(false)
  }

export const applyPageMode =
  ({ api, props }) =>
  () => {
    if (props.pageMode) {
      api.addListeners()
    } else {
      api.removeListeners()
    }
  }

export const addListeners =
  ({ api, state }) =>
  () => {
    state.listenerTarget = api.getListenerTarget()

    const options = supportsPassive ? { passive: true } : false

    state.listenerTarget.addEventListener('scroll', api.handleScroll, options)
    state.listenerTarget.addEventListener('resize', api.handleResize)
  }

export const removeListeners =
  ({ api, state }) =>
  () => {
    if (!state.listenerTarget) {
      return
    }

    state.listenerTarget.removeEventListener('scroll', api.handleScroll)
    state.listenerTarget.removeEventListener('resize', api.handleResize)

    state.listenerTarget = null
  }

export const getListenerTarget =
  ({ props, vm }) =>
  () => {
    let target = getScrollContainer(vm.$el.parentNode, props.direction === 'vertical')

    if (window.document && (target === window.document.documentElement || target === window.document.body)) {
      target = window
    }

    return target
  }

export const scrollToPosition =
  ({ props, vm }) =>
  (position) => {
    const direction =
      props.direction === 'vertical' ? { scroll: 'scrollTop', start: 'top' } : { scroll: 'scrollLeft', start: 'left' }
    let viewport, scrollDirection, scrollDistance

    if (props.pageMode) {
      const viewportEl = getScrollContainer(vm.$el.parentNode, props.direction === 'vertical')
      const scrollTop = viewportEl.tagName === 'HTML' ? 0 : viewportEl[direction.scroll]
      const bounds = viewportEl.getBoundingClientRect()
      const scroller = vm.$el.getBoundingClientRect()
      const scrollerPosition = scroller[direction.start] - bounds[direction.start]

      viewport = viewportEl
      scrollDirection = direction.scroll
      scrollDistance = position + scrollTop + scrollerPosition
    } else {
      viewport = vm.$el
      scrollDirection = direction.scroll
      scrollDistance = position
    }

    viewport[scrollDirection] = scrollDistance
  }

export const scrollToItem =
  ({ api, props, state }) =>
  (index) => {
    const gridItems = props.gridItems || 1
    let scroll

    if (props.itemSize === null) {
      scroll = index > 0 ? state.sizes[index - 1].accumulator : 0
    } else {
      scroll = Math.floor(index / gridItems) * props.itemSize
    }

    api.scrollToPosition(scroll)
  }

const doCheckPositionDiff = ({ checkPositionDiff, scroll, state, itemSize, minItemSize }) => {
  if (checkPositionDiff) {
    let positionDiff = scroll.start - state.temporary.lastUpdateScrollPosition

    if (positionDiff < 0) positionDiff = -positionDiff

    if ((itemSize === null && positionDiff < minItemSize) || positionDiff < itemSize) {
      return true
    }
  }
}

const computeRange = (args) => {
  let { props, scroll, vm, itemSize, count, sizes, startIndex, totalSize } = args
  let { endIndex, items, visibleStartIndex, visibleEndIndex, gridItems } = args
  const buffer = props.buffer
  let beforeSize = 0

  scroll.start -= buffer
  scroll.end += buffer

  if (vm.$refs.before) {
    beforeSize = vm.$refs.before.scrollHeight
    scroll.start -= beforeSize
  }

  if (vm.$refs.after) {
    const afterSize = vm.$refs.after.scrollHeight
    scroll.end += afterSize
  }

  if (itemSize === null) {
    let args = { count, sizes, scroll, startIndex, totalSize, endIndex }

    Object.assign(args, { items, visibleStartIndex, beforeSize, visibleEndIndex })

    const ret = computeRangeVariableSizeMode(args)

    startIndex = ret.startIndex
    endIndex = ret.endIndex
    visibleStartIndex = ret.visibleStartIndex
    visibleEndIndex = ret.visibleEndIndex
    totalSize = ret.totalSize
  } else {
    startIndex = ~~((scroll.start / itemSize) * gridItems)

    const remainer = startIndex % gridItems

    startIndex -= remainer
    endIndex = Math.ceil((scroll.end / itemSize) * gridItems)
    visibleStartIndex = Math.max(0, Math.floor(((scroll.start - beforeSize) / itemSize) * gridItems))
    visibleEndIndex = Math.floor(((scroll.end - beforeSize) / itemSize) * gridItems)

    startIndex < 0 && (startIndex = 0)
    endIndex > count && (endIndex = count)
    visibleStartIndex < 0 && (visibleStartIndex = 0)
    visibleEndIndex > count && (visibleEndIndex = count)
    totalSize = Math.ceil(count / gridItems) * itemSize
  }

  return { startIndex, endIndex, visibleStartIndex, visibleEndIndex, totalSize }
}

const computeRangeVariableSizeMode = (args) => {
  let { count, sizes, scroll, startIndex, totalSize, endIndex } = args
  let { items, visibleStartIndex, beforeSize, visibleEndIndex } = args
  let h, a, b, i, oldI

  a = 0
  b = count - 1
  i = ~~(count / 2)

  do {
    oldI = i
    h = sizes[i].accumulator

    if (h < scroll.start) {
      a = i
    } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
      b = i
    }

    i = ~~((a + b) / 2)
  } while (i !== oldI)

  i < 0 && (i = 0)

  startIndex = i

  totalSize = sizes[count - 1].accumulator

  for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++) {
    // empty
  }

  if (endIndex === -1) {
    endIndex = items.length - 1
  } else {
    endIndex++
    endIndex > count && (endIndex = count)
  }

  for (
    visibleStartIndex = startIndex;
    visibleStartIndex < count && beforeSize + sizes[visibleStartIndex].accumulator < scroll.start;
    visibleStartIndex++
  ) {
    // empty
  }

  for (
    visibleEndIndex = visibleStartIndex;
    visibleEndIndex < count && beforeSize + sizes[visibleEndIndex].accumulator < scroll.end;
    visibleEndIndex++
  ) {
    // empty
  }

  return { startIndex, totalSize, endIndex, visibleStartIndex, visibleEndIndex }
}

const computePool = (args) => {
  let { continuous, pool, checkItem, itemIndexByKey, keyField, startIndex } = args
  let { endIndex, api, items, views, itemSize, sizes, typeField, unusedViews } = args
  let { emit, gridItems, itemSecondarySize } = args
  let view = unuseInvisible({ continuous, pool, checkItem, itemIndexByKey, keyField, startIndex, endIndex, api })
  const unusedIndex = continuous ? null : new Map()
  let item, type

  for (let i = startIndex; i < endIndex; i++) {
    item = items[i]

    const key = keyField ? item[keyField] : item

    if (isNull(key)) {
      throw new Error(`[TINY Error][RecycleScroller] Key is ${key} on item (keyField is '${keyField}')`)
    }

    view = views.get(key)

    if (!itemSize && !sizes[i].size) {
      if (view) api.unuseView(view)
      continue
    }

    type = item[typeField]

    let unusedPool = unusedViews.get(type)
    let newlyUsedView = false
    let args = { view, continuous, unusedPool, api, pool, i, item }

    Object.assign(args, { key, type, unusedIndex, unusedViews, views, newlyUsedView })

    const ret = computePoolView(args)

    view = ret.view
    unusedPool = ret.unusedPool
    newlyUsedView = ret.newlyUsedView

    if (newlyUsedView) {
      if (i === items.length - 1) emit('scroll-end')
      if (i === 0) emit('scroll-start')
    }

    if (itemSize === null) {
      view.position = sizes[i - 1].accumulator
      view.offset = 0
    } else {
      view.position = Math.floor(i / gridItems) * itemSize
      view.offset = (i % gridItems) * itemSecondarySize
    }
  }
}

const unuseInvisible = ({ continuous, pool, checkItem, itemIndexByKey, keyField, startIndex, endIndex, api }) => {
  let view

  if (continuous) {
    for (let i = 0, l = pool.length; i < l; i++) {
      view = pool[i]

      if (view.nr.used) {
        if (checkItem) {
          view.nr.index = itemIndexByKey[view.item[keyField]]
        }

        if (isNull(view.nr.index) || view.nr.index < startIndex || view.nr.index >= endIndex) {
          api.unuseView(view)
        }
      }
    }
  }

  return view
}

const computePoolView = (args) => {
  let { view, continuous, unusedPool, api, pool, i, item } = args
  let { key, type, unusedIndex, unusedViews, views, newlyUsedView } = args
  let v

  if (!view) {
    if (continuous) {
      if (unusedPool && unusedPool.length) {
        view = unusedPool.pop()
      } else {
        view = api.addView(pool, i, item, key, type)
      }
    } else {
      v = unusedIndex.get(type) || 0

      if (!unusedPool || v >= unusedPool.length) {
        view = api.addView(pool, i, item, key, type)
        api.unuseView(view, true)
        unusedPool = unusedViews.get(type)
      }

      view = unusedPool[v]
      unusedIndex.set(type, v + 1)
    }

    views.delete(view.nr.key)
    view.nr.used = true
    view.nr.index = i
    view.nr.key = key
    view.nr.type = type
    views.set(key, view)

    newlyUsedView = true
  } else {
    if (!view.nr.used) {
      view.nr.used = true
      newlyUsedView = true

      if (unusedPool) {
        const index = unusedPool.indexOf(view)
        if (~index) unusedPool.splice(index, 1)
      }
    }
  }

  view.item = item

  return { view, unusedPool, newlyUsedView }
}

export const computeViewStyle =
  ({ props, state }) =>
  (view) => {
    const { direction, gridItems, itemSecondarySize, itemSize } = props

    let transform = `translate${direction === 'vertical' ? 'Y' : 'X'}(${view.position}px)`

    transform = `${transform} translate${direction === 'vertical' ? 'X' : 'Y'}(${view.offset}px)`

    let width = gridItems ? `${direction === 'vertical' ? itemSecondarySize || itemSize : itemSize}px` : undefined
    let height = gridItems ? `${direction === 'horizontal' ? itemSecondarySize || itemSize : itemSize}px` : undefined

    return state.ready ? { transform, width, height } : null
  }

export const computeViewEvent =
  ({ props, state }) =>
  (view) => {
    if (props.skipHover) {
      return {}
    } else {
      return {
        mouseenter: () => (state.hoverKey = view.nr.key),
        mouseleave: () => (state.hoverKey = null)
      }
    }
  }
