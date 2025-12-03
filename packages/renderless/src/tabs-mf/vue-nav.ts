export const api = ['state']

export const renderless = (
  props,
  { reactive, inject, computed, onMounted, onBeforeUnmount, watch, nextTick },
  { vm }
) => {
  const tabs = inject('tabs', null)

  const state = reactive({
    navItems: computed(() => tabs.state.items),
    currentNav: computed(() => tabs.state.navs[state.currentIndex]),
    currentIndex: computed(() =>
      tabs.state.navs.findIndex((item) => tabs.state.cacheCurrentItem && tabs.state.cacheCurrentItem.name === item.name)
    ),
    currentWidth: 0,
    currentPosition: 0
  })

  const updateSliderBar = () => {
    const nav = state.currentNav
    if (nav && nav.$el) {
      state.currentWidth = nav.$el.offsetWidth || 0
      state.currentPosition = nav.$el.offsetLeft || 0
    }
  }

  let mutationObserver
  let resizeObserver

  onMounted(() => {
    // 使用 MutationObserver 监听 DOM 结构变化
    mutationObserver = new MutationObserver(() => {
      nextTick(() => {
        updateSliderBar()
      })
    })

    mutationObserver.observe(vm.$el, { attributes: true, subtree: true, childList: true })

    // 使用 ResizeObserver 监听元素尺寸变化
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        nextTick(() => {
          updateSliderBar()
        })
      })

      // 监听所有 nav-item 的尺寸变化
      const navItems = vm.$el.querySelectorAll('[data-tag="tiny-tab-nav-item"]')
      navItems.forEach((item) => {
        resizeObserver.observe(item)
      })
    }

    // 初始更新
    nextTick(() => {
      updateSliderBar()
    })
  })

  // 监听 currentNav 变化，更新 slider bar
  watch(
    () => state.currentNav,
    () => {
      nextTick(() => {
        updateSliderBar()
      })
    },
    { immediate: true }
  )

  // 监听 navItems 变化，重新设置 ResizeObserver
  watch(
    () => state.navItems,
    () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
        nextTick(() => {
          const navItems = vm.$el.querySelectorAll('[data-tag="tiny-tab-nav-item"]')
          navItems.forEach((item) => {
            resizeObserver.observe(item)
          })
          updateSliderBar()
        })
      } else {
        // 如果 ResizeObserver 不可用，在 navItems 变化时也更新 slider bar
        nextTick(() => {
          updateSliderBar()
        })
      }
    },
    { deep: true }
  )

  onBeforeUnmount(() => {
    if (mutationObserver) {
      mutationObserver.disconnect()
      mutationObserver = null
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }
  })

  Object.assign(api, {
    state
  })

  return api
}
