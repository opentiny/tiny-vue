import { iconChevronDown } from '@opentiny/vue-icon'

export default {
  icons: {
    dropdownIcon: iconChevronDown()
  },
  props: {
    trigger: 'click'
  },
  renderless: (props, hooks, { emit }, api) => {
    const state = api.state

    return {
      // 兼容 item-click 的参数格式不一致
      handleMenuItemClick: (itemData, instance, disabled) => {
        if (props.hideOnClick && !disabled) {
          state.visible = false
        }

        if (!disabled) {
          emit('item-click', itemData, instance)
        }
      }
    }
  }
}
