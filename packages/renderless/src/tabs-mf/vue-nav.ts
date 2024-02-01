export const api = ['state']

export const renderless = (props, { reactive, inject, computed, nextTick, watch }) => {
  const tabs = inject('tabs', null)

  const state = reactive({
    navItems: computed(() => tabs.state.items),
    currentNav: null,
    currentIndex: computed(() =>
      tabs.state.navs.findIndex((item) => tabs.state.currentItem && tabs.state.currentItem.name === item.name)
    ),
    currentWidth: 0,
    currentPosition: 0
  })

  watch(
    () => state.currentIndex,
    () => {
      nextTick(() => {
        const nav = (state.currentNav = tabs.state.navs[state.currentIndex])
        state.currentWidth = (nav && nav.$el.offsetWidth) || 0
        state.currentPosition = (nav && nav.$el.offsetLeft) || 0
      })
    }
  )

  return { state }
}
