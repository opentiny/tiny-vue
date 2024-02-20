export default {
  props: {
    visibleArrow: true,
    placement: 'bottom-start'
  },
  renderless: (props, hooks, { dispatch }, api) => {
    const state = api.state

    return {
      // 兼容 current-item-click 的参数格式不一致
      handleMenuItemClick: (itemData, instance, label, showContent, isDisabled) => {
        state.label = label
        state.showContent = showContent

        dispatch('TinyDropdown', 'current-item-click', [itemData, instance, isDisabled])
      }
    }
  }
}
