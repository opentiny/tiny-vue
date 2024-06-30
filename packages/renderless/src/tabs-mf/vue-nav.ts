export const api = ['state']

export const renderless = (props, { reactive, inject, computed, onMounted, onBeforeUnmount }, { vm }) => {
  const tabs = inject('tabs', null)

  const state = reactive({
    navItems: computed(() => tabs.state.items),
    currentNav: computed(() => tabs.state.navs[state.currentIndex]),
    currentIndex: computed(() =>
      tabs.state.navs.findIndex((item) => tabs.state.currentItem && tabs.state.currentItem.name === item.name)
    ),
    currentWidth: 0,
    currentPosition: 0
  })

  let rafId, observer

  onMounted(() => {
    observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (rafId) {
            cancelAnimationFrame(rafId)
          }

          rafId = requestAnimationFrame(() => {
            const nav = state.currentNav

            state.currentWidth = (nav && nav.$el.offsetWidth) || 0
            state.currentPosition = (nav && nav.$el.offsetLeft) || 0
          })
        }
      }
    })

    observer.observe(vm.$el, { attributes: true, subtree: true })
  })

  onBeforeUnmount(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }

    observer.disconnect()
    observer = null
  })

  return { state }
}
