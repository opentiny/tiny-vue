import { random } from '../common/string'
import { setActive, addItem, addNav, scrollTo, clickMore, removeItem } from './index'

export const api = ['state', 'setActive', 'addItem', 'addNav', 'scrollTo', 'clickMore', 'removeItem']

export const renderless = (props, { onMounted, onBeforeUnmount, provide, reactive, watch, computed }, { vm, emit }) => {
  const state = reactive({
    items: [],
    navs: [],
    currentItem: computed(() => state.items.find((item) => item.selected)),
    key: computed(() => (state.currentItem ? state.currentItem.name : random())),
    separator: props.separator
  })

  const api = {
    setActive: setActive({ emit, state, props }),
    addItem: addItem(state),
    addNav: addNav(state),
    scrollTo: scrollTo({ vm, state }),
    removeItem: removeItem({ state, emit })
  }

  Object.assign(api, {
    state,
    clickMore: clickMore(api)
  })

  provide('tabs', vm)

  watch(
    () => props.activeName,
    (name) => name && api.setActive(name)
  )

  watch(
    () => props.modelValue,
    (name) => name && api.setActive(name)
  )

  onMounted(() => {
    props.activeName && api.scrollTo(props.activeName)
    props.modelValue && api.scrollTo(props.modelValue)
  })

  onBeforeUnmount(() => {
    state.navs.forEach((n, i) => (state.navs[i] = null))
    state.navs.length = 0
  })

  provide('separator', state.separator)

  return api
}
