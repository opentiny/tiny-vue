import { iconChevronLeft } from '@opentiny/vue-icon'

export default {
  icons: {
    leftWardArrow: iconChevronLeft()
  },
  renderless: (props, hooks, { emit, dispatch, vm }, api) => {
    const state = api.state
    const dataStore = api.dataStore

    return {
      // 兼容 item-click 的参数格式不一致,aui 是数组，tiny 是对象
      handleClick: (event: MouseEvent) => {
        // mobile-first
        if (dataStore) {
          if (props.disabled) {
            dataStore.checkedStatus = false
          }

          dataStore.itemData = props.itemData

          dataStore.itemLabel = ''
          dataStore.showContent = false

          if (props.level === '2') {
            dataStore.currentIndex = `${props.level}-${props.currentIndex}`
          } else {
            dataStore.currentIndex = `${props.currentIndex}`
          }

          dispatch('TinyDropdown', 'selected-index', [dataStore.currentIndex])

          dispatch('TinyDropdownMenu', 'menu-item-click', [
            dataStore.itemData,
            vm,
            dataStore.itemLabel,
            dataStore.showContent,
            props.disabled
          ])

          dispatch('TinyDropdown', 'is-disabled', [props.disabled])
        } else {
          event.stopPropagation()
          state.currentIndex = `${props.currentIndex}`

          if (!props.disabled) {
            emit('item-click', [props.itemData, vm, props.disabled])
          }

          dispatch('TinyDropdown', 'menu-item-click', [props.itemData, vm, props.disabled])
          dispatch('TinyDropdown', 'is-disabled', [props.disabled])
          dispatch('TinyDropdown', 'selected-index', [state.currentIndex])
        }
      }
    }
  }
}
