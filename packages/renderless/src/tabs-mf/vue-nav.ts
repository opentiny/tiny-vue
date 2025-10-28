export const api = ['state']

export const renderless = (props, { reactive, inject, computed, onMounted, onBeforeUnmount }, { vm }) => {
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

  let observer

  onMounted(() => {
    observer = new MutationObserver((mutationsList) => {
      const nav = state.currentNav
      state.currentWidth = (nav && nav.$el.offsetWidth) || 0
      state.currentPosition = (nav && nav.$el.offsetLeft) || 0
    })

    observer.observe(vm.$el, { attributes: true, subtree: true })
  })

  onBeforeUnmount(() => {
    observer.disconnect()
    observer = null
  })

  Object.assign(api, {
    state
  })

  return api
}
