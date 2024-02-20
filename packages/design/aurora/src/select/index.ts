import { iconChevronDown } from '@opentiny/vue-icon'

export default {
  icons: {
    dropdownIcon: iconChevronDown()
  },
  state: {
    sizeMap: {
      default: 30,
      mini: 24,
      small: 36,
      medium: 42
    },
    spacingHeight: 2,
    initialInputHeight: 30
  },
  props: {
    tagType: 'info'
  },
  renderless: (props, hooks, { emit }, api) => {
    const state = api.state

    return {
      // 兼容不同主题输入框尺寸对应标签尺寸不一致
      computedCollapseTagSize: () => {
        let size = 'small'

        if (~['small', 'mini'].indexOf(state.selectSize)) {
          size = 'mini'
        } else if (~['medium', 'default'].indexOf(state.selectSize)) {
          size = 'default'
        }

        return size
      },
      // 兼容显示清除图标时，是否同时显示下拉图标
      computedShowDropdownIcon: () => {
        return !(props.remote && props.filterable && !props.remoteConfig.showIcon)
      }
    }
  }
}
