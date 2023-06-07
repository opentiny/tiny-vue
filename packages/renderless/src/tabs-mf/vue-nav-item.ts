import { handleNavItemClick, getBoundRectNV, handleNavItemClose } from './index'

export const api = ['state', 'handleNavItemClick', 'getBoundRect', 'handleNavItemClose']

export const renderless = (props, { inject, markRaw, reactive, computed }, { vm }) => {
  const tabs = inject('tabs', null)

  tabs.addNav(markRaw(vm))

  const state = reactive({
    tabSize: computed(() => tabs.size),
    withClose: computed(() => tabs.withClose)
  })

  const api = {
    state,
    handleNavItemClick: handleNavItemClick({ tabs, props }),
    getBoundRect: getBoundRectNV({ vm, props }),
    handleNavItemClose: handleNavItemClose({ tabs, props })
  }

  return api
}
