export const api = ['state']

export const renderless = (props, { reactive, inject, computed, onMounted, onUnmounted, onUpdated }, { vm, emit }) => {
  const tabs = inject('tabs', null)

  const state = reactive({
    currentNav: computed(() => props.currentNav || null),
    currentWidth: computed(() => props.currentWidth + 'px'),
    currentPosition: computed(() => props.currentPosition + 'px')
  })

  const handleTransitionEnd = () => {
    tabs.state.currentItem = tabs.state.cacheCurrentItem
  }

  onMounted(() => {
    vm.$el.addEventListener('transitionend', handleTransitionEnd)
  })

  onUnmounted(() => {
    vm.$el.removeEventListener('transitionend', handleTransitionEnd)
  })

  return { state }
}
