export const computedItemsWithSize = ({ props, state }) => () => {
  const result = []
  const { items, keyField } = props
  const { simpleArray, vscrollData } = state
  const { sizes } = vscrollData
  const l = items.length

  for (let i = 0; i < l; i++) {
    const item = items[i]
    const id = simpleArray ? i : item[keyField]
    let size = sizes[id]

    if (typeof size === 'undefined' && !state.temporary.undefinedMap[id]) {
      size = 0
    }

    result.push({ item, id, size })
  }

  return result
}

export const onScrollerResize = ({ api, emit, vm }) => () => {
  const scroller = vm.$refs.scroller

  if (scroller) {
    api.forceUpdate()
  }

  emit('resize')
}

export const onScrollerVisible = ({ emit, state }) => () => {
  state.temporary.events.emit('vscroll:update', { force: false })
  emit('visible')
}

export const forceUpdate = (state) => (clear = false) => {
  if (clear || state.simpleArray) {
    state.vscrollData.sizes = {}
  }

  state.temporary.events.emit('vscroll:update', { force: true })
}

export const prepareProvide = (state) => {
  if (typeof ResizeObserver !== 'undefined') {
    state.temporary.resizeObserver = new ResizeObserver((entries) => {
      requestAnimationFrame(() => {
        if (!Array.isArray(entries)) return

        for (const entry of entries) {
          if (entry.target && entry.target._onResize) {
            let width, height

            if (entry.borderBoxSize) {
              const resizeObserverSize = entry.borderBoxSize[0]

              width = resizeObserverSize.inlineSize
              height = resizeObserverSize.blockSize
            } else {
              width = entry.contentRect.width
              height = entry.contentRect.height
            }

            entry.target._onResize(entry.target._id, width, height)
          }
        }
      })
    })
  }
}

export const watchItemsWithSize = ({ props, vm }) => (next, prev) => {
  const scrollTop = vm.$el.scrollTop
  const length = Math.min(next.length, prev.length)
  let prevActiveTop = 0
  let activeTop = 0

  for (let i = 0; i < length; i++) {
    if (prevActiveTop >= scrollTop) break

    prevActiveTop += prev[i].size || props.minItemSize
    activeTop += next[i].size || props.minItemSize
  }

  const offset = activeTop - prevActiveTop

  if (offset === 0) return

  vm.$el.scrollTop += offset
}
export const scrollToItem = (vm) => (index) => {
  const scroller = vm.$refs.scroller

  if (scroller) scroller.scrollToItem(index)
}

export const getItemSize = ({ props, state }) => (item, index = undefined) => {
  const id = state.simpleArray ? (index === 0 || index ? index : props.items.indexOf(item)) : item[props.keyField]

  return state.vscrollData.sizes[id] || 0
}

export const scrollToBottom = ({ state, vm, nextTick }) => () => {
  if (state.temporary.scrollingToBottom) return

  state.temporary.scrollingToBottom = true

  const el = vm.$el
  const step = (el) => (el.scrollTop = el.scrollHeight + 5000)

  nextTick(() => {
    step(el)

    const cb = () => {
      step(el)

      requestAnimationFrame(() => {
        step(el)

        if (state.temporary.undefinedSizes === 0) {
          state.temporary.scrollingToBottom = false
        } else {
          requestAnimationFrame(cb)
        }
      })
    }

    requestAnimationFrame(cb)
  })
}
