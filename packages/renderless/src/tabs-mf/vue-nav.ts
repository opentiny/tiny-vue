export const api = ['state']

export const renderless = (props, { reactive, inject, computed }) => {
  const tabs = inject('tabs', null)

  const state = reactive({
    navItems: computed(() => tabs.state.items)
  })

  return { state }
}
