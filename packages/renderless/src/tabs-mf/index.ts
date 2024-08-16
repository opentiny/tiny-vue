import { random } from '../common/string'
import debounce from '../common/deps/debounce'
import { fastdom } from '../common/deps/fastdom'

// --- tabs ---
export const setActive =
  ({ state, api }) =>
  (name) => {
    const current = state.currentItem ? state.currentItem.name : ''

    if (current && current !== name) {
      api.canLeave(name, current).then((result) => {
        if (result) {
          api.changeCurrentName(name)
        }
      })
    } else {
      api.changeCurrentName(name)
    }
  }

export const canLeave = (props) => (newTab, oldTab) => {
  if (typeof props.beforeLeave === 'function') {
    const before = props.beforeLeave(newTab, oldTab)

    if (before && before.then) {
      return {
        then: (cb) => {
          // Promise.resolve(false) 或 Promise.reject() 都支持， 都是禁用切换标签
          before.then(cb).catch(() => cb(false))
        }
      }
    } else {
      return {
        then: (cb) => {
          cb(before)
        }
      }
    }
  } else {
    return {
      then: (cb) => {
        cb(true)
      }
    }
  }
}

export const changeCurrentName =
  ({ emit, state }) =>
  (name) => {
    state.items.forEach((item) => (item.selected = item.name === name))

    emit('update:activeName', name)
    emit('update:modelValue', name)
  }

export const addItem = (state) => (item) => {
  state.items = [...state.items, item]
}

export const addNav = (state) => (nav) => {
  state.navs = [...state.navs, nav]
}

export const sortItem = (state) => (names) => {
  const items = [...state.items]
  const navs = [...state.navs]

  items.sort((a, b) => names.indexOf(a.name) - names.indexOf(b.name))
  navs.sort((a, b) => names.indexOf(a.name) - names.indexOf(b.name))

  state.items = items
  state.navs = navs
}

export const onRelationChange =
  ({ api, instance, nextTick, state }) =>
  () => {
    const itemOrder = instance.childTabs.map((tab) => tab.name)
    const itemOrderKey = itemOrder.join(',')
    const { tabbar } = instance.$refs

    if (itemOrderKey !== state.itemOrderKey) {
      state.itemOrderKey = itemOrderKey

      // 排序
      api.sortItem(itemOrder)

      const selectedItem = state.items.find((item) => item.selected)

      // 刷新选中项
      if (selectedItem) {
        selectedItem.selected = false

        nextTick(() => {
          selectedItem.selected = true
        })
      }

      // tiny新增
      tabbar.wheelListener()
    }
  }

export const scrollTo =
  ({ vm, state }) =>
  (name) => {
    const { navs } = state
    const { $refs } = vm
    const { tabbar } = $refs
    const { scroll } = tabbar.$refs

    fastdom.measure(() => {
      const { clientWidth, scrollWidth } = scroll

      if (name && scrollWidth > clientWidth) {
        const index = navs.findIndex((nav) => nav.name === name)

        if (~index) {
          fastdom.mutate(() => {
            scroll.scrollLeft = vm.$el.querySelector('[data-tag="tiny-tab-nav"]').childNodes[index].offsetLeft - 5
            tabbar.wheelListener()
          })
        }
      }
    })
  }

export const clickMore = (api) => (name) => {
  api.setActive(name)
  api.scrollTo(name)
}

export const removeItem =
  ({ props, state, emit }) =>
  (name, silent = false) => {
    const itemIndex = state.items.findIndex((item) => item.name === name)
    const navIndex = state.navs.findIndex((item) => item.name === name)

    if (!~itemIndex) return

    const emitEvent = () => {
      // Clean up internal state
      state.items.splice(itemIndex, 1)
      state.items = [...state.items]

      state.navs.splice(navIndex, 1)
      state.navs = [...state.navs]

      if (!silent) {
        // Emits the close event
        emit('edit', name, 'remove')
        emit('close', name)
      }
    }

    // Check before close
    if (typeof props.beforeClose === 'function') {
      const beforeCloseResult = props.beforeClose(name)

      if (beforeCloseResult && beforeCloseResult.then) {
        beforeCloseResult.then((res) => res && emitEvent())
      } else {
        beforeCloseResult && emitEvent()
      }
    } else {
      emitEvent()
    }
  }

export const beforeCarouselSwipe =
  ({ api, state, vm }) =>
  (newIndex, oldIndex) => {
    const [newTab, oldTab] = [newIndex, oldIndex].map((index) => (state.items[index] ? state.items[index].name : ''))

    return api.canLeave(newTab, oldTab).then((result) => {
      if (result) {
        vm.setActive(newTab)
      }

      return result
    })
  }

export const clearOtherTabSwipeScroll =
  ({ state, vm }) =>
  (name) => {
    if (!state.swipeable) return

    state.items.forEach((tab, i) => {
      const tabName = tab ? tab.name : ''

      if (tabName !== name) {
        const tabSwipeVm = vm.$refs[`tabSwipe${i}`]
        tabSwipeVm && tabSwipeVm.clearScroll()
      }
    })
  }

export const computedSwipeable =
  ({ props, state }) =>
  () =>
    state.items.every((item) => !item.lazy) && props.swipeable

export const observeTabSwipeSize =
  ({ state, vm }) =>
  () => {
    if (!state.swipeable) return

    state._resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        let sizeEntry, blockSize

        if (entry.borderBoxSize && entry.borderBoxSize.length > 0) {
          sizeEntry = entry.borderBoxSize[0]
          blockSize = sizeEntry.blockSize
        } else {
          sizeEntry = entry.contentRect
          blockSize = sizeEntry.height
        }

        if (blockSize > state.maxTabSwipeHeight) {
          state.maxTabSwipeHeight = blockSize
        }
      }
    })

    state.items.forEach((_, i) => {
      const tabSwipeVm = vm.$refs[`tabSwipe${i}`]
      tabSwipeVm && state._resizeObserver.observe(tabSwipeVm.$el)
    })
  }

export const unobserveTabSwipeSize =
  ({ state, vm }) =>
  () => {
    if (!state.swipeable) return

    if (state._resizeObserver) {
      state.items.forEach((_, i) => {
        const tabSwipeVm = vm.$refs[`tabSwipe${i}`]
        tabSwipeVm && state._resizeObserver.unobserve(tabSwipeVm.$el)
      })

      state._resizeObserver.disconnect()
      state._resizeObserver = null
    }
  }

// --- tab-bar ---
export const wheelListener = ({ vm, api, tabs, state }) =>
  debounce(10, (e) => {
    const { $refs } = vm
    const { getBoundRect } = api

    e && e.stopPropagation()

    $refs.scroll && ($refs.scroll.scrollLeft += ((e || {}).deltaY || 0) / 3)

    state.tabMoreWidth = ($refs.tabMore && $refs.tabMore.offsetWidth) || 0
    state.navPaddingRight = state.tabMoreWidth + 1

    const { left, width } = getBoundRect()
    const barRange = { left, width, reserve: state.tabMoreWidth }
    let { moreList = [], moreLeft = false, moreRight = false } = {}

    tabs.state.navs.forEach((nav) => {
      const { name, rect } = nav.getBoundRect()
      const { left, width } = rect
      const navRange = { name, left, width }

      if (
        navRange.left < barRange.left ||
        navRange.left + navRange.width > barRange.left + barRange.width - barRange.reserve
      ) {
        moreList.push(navRange.name)
      }
    })

    if (tabs.state.items.length) {
      moreLeft = ~moreList.indexOf(tabs.state.items[0].name)
      moreRight = ~moreList.indexOf(tabs.state.items[tabs.state.items.length - 1].name)
    }

    Object.assign(state, { moreList, moreLeft, moreRight })
  })

export const getBoundRect = (vm) => () => vm.$el.getBoundingClientRect()

export const handleClickDropdownItem = (tabs) => (name) => tabs.clickMore(name)

export const key = (opt) => opt.name + '-' + random()

export const emitAdd = (tabs) => () => {
  tabs.$emit('edit', null, 'add')
  tabs.$emit('add')
}

// --- tab-nav-item ---
export const handleNavItemClick =
  ({ tabs, props, vm }) =>
  () => {
    const index = tabs.state.navs.indexOf(vm)
    const newTab = props.navItem.name
    const oldTab = tabs.state.currentItem ? tabs.state.currentItem.name : ''

    tabs.setActive(newTab)

    props.swipeable &&
      tabs.canLeave(newTab, oldTab).then((result) => {
        if (result) {
          tabs.$refs.swipe && tabs.$refs.swipe.setActiveItem(index)
        }
      })

    tabs.$emit('click', props.navItem)
  }

export const getBoundRectNV =
  ({ vm, props }) =>
  () => ({
    name: props.navItem.name,
    rect: vm.$el.getBoundingClientRect()
  })

export const handleNavItemClose =
  ({ tabs, props }) =>
  (e) => {
    e.stopPropagation()
    tabs.removeItem(props.navItem.name)
  }

// --- tab-swipe ---
export const onTouchstart = (state) => (e: TouchEvent) => {
  const clientX = e.touches[0].clientX
  state.last = clientX
}

export const onTouchmove =
  ({ props, state, vm }) =>
  (e: TouchEvent) => {
    const { last } = state
    const { stopThreshold } = props
    const { touchContainer } = vm.$refs
    const clientX = e.touches[0].clientX
    const change = clientX - last

    state.last = clientX

    if (touchContainer) {
      if (touchContainer.scrollWidth > touchContainer.clientWidth) {
        touchContainer.scrollLeft -= change
      }

      const shouldNext =
        change < 0 &&
        touchContainer.clientWidth + touchContainer.scrollLeft >= touchContainer.scrollWidth - stopThreshold
      const shouldPrevious = change > 0 && touchContainer.scrollLeft <= stopThreshold

      if (!shouldNext && !shouldPrevious) {
        e.stopPropagation()
      }
    }
  }

export const clearScroll = (vm) => () => {
  if (vm.$refs.touchContainer) {
    vm.$refs.touchContainer.scrollLeft = 0
  }
}
