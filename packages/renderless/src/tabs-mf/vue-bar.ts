import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'
import { wheelListener, getBoundRect, handleClickDropdownItem, key, emitAdd } from './index'
import { getAddWheelListener } from './wheel'

const { addWheelListener, removeWheelListener } = getAddWheelListener(window, document)

export const api = ['state', 'wheelListener', 'handleClickDropdownItem', 'key', 'emitAdd']

export const renderless = (props, { onMounted, onBeforeUnmount, reactive, watch, inject, computed }, { vm }) => {
  const tabs = inject('tabs', null)

  const state = reactive({
    moreList: [],
    moreLeft: false,
    moreRight: false,
    moreOptions: [],
    tabMoreWidth: 0,
    navPaddingRight: 0,
    withAdd: computed(() => tabs.withAdd),
    slotCustom: tabs.slots.custom,
    separator: inject('separator', null)
  })

  const api = {
    getBoundRect: getBoundRect(vm),
    handleClickDropdownItem: handleClickDropdownItem(tabs),
    key,
    emitAdd: emitAdd(tabs)
  }

  Object.assign(api, {
    state,
    wheelListener: wheelListener({ vm, api, tabs, state })
  })

  watch(
    () => state.moreList,
    () => {
      state.moreOptions = state.moreList.map((name) => tabs.state.items.find((item) => item.name === name))
    }
  )

  onMounted(() => {
    addWheelListener(vm.$refs.scroll, api.wheelListener)
    addResizeListener(vm.$el, api.wheelListener)

    api.wheelListener()
  })

  onBeforeUnmount(() => {
    removeWheelListener(vm.$refs.scroll, api.wheelListener)
    removeResizeListener(vm.$el, api.wheelListener)
  })

  return api
}
