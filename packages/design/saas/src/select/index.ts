import { iconChevronDown } from '@opentiny/vue-icon'

export default {
  icons: {
    dropdownIcon: iconChevronDown()
  },
  state: {
    sizeMap: {
      default: 28,
      mini: 24,
      small: 28,
      medium: 32
    },
    spacingHeight: 4,
    initialInputHeight: 30
  },
  props: {
    tagType: 'info'
  },
  renderless: (props, hooks, { emit }, api) => {
    const state = api.state

    return {
      computedCollapseTagSize: () => {
        let size = 'small'

        if (~['small', 'mini'].indexOf(state.selectSize)) {
          size = 'mini'
        } else if (~['medium', 'default'].indexOf(state.selectSize)) {
          size = 'default'
        }

        return size
      },
      computedShowDropdownIcon: () => {
        return !(props.remote && props.filterable && !props.remoteConfig.showIcon)
      }
    }
  }
}
