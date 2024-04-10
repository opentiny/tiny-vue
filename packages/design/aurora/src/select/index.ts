import { iconChevronDown } from '@opentiny/vue-icon'

export default {
  // 虚拟滚动的默认options不一致
  baseOpts: { optionHeight: 34, limit: 20 },
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
    initialInputHeight: 30,
    // 显示清除等图标时，不隐藏下拉箭头时
    autoHideDownIcon: false,
    delayBlur: true
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
      },

      // aui 的勾选未处理disabled的选项，故此放这里。
      toggleCheckAll: (filtered) => {
        const getEnabledValues = (options) => {
          let values = []

          for (let i = 0; i < options.length; i++) {
            if (!options[i].state.disabled && !options[i].state.groupDisabled && options[i].state.visible) {
              values.push(options[i].value)
            }
          }

          return values
        }

        let value
        const enabledValues = getEnabledValues(state.options)

        if (filtered) {
          if (state.filteredSelectCls === 'check' || state.filteredSelectCls === 'halfselect') {
            value = [...new Set([...state.modelValue, ...enabledValues])]
          } else {
            value = state.modelValue.filter((val) => !enabledValues.includes(val))
          }
        } else {
          if (state.selectCls === 'check') {
            value = enabledValues
          } else if (state.selectCls === 'halfselect') {
            const unchecked = state.options.filter((item) => !item.state.disabled && item.state.selectCls === 'check')

            unchecked.length ? (value = enabledValues) : (value = [])
          } else if (state.selectCls === 'checked-sur') {
            value = []
          }
        }

        const requiredValue = []
        if (props.multiple) {
          state.options.forEach((opt) => {
            if (opt.required) requiredValue.push(opt.value)
          })
        }

        if (Array.isArray(value)) {
          value = requiredValue.concat(value.filter((val) => !requiredValue.find((requireVal) => requireVal === val)))
        }

        api.setSoftFocus()

        state.isSilentBlur = true
        api.updateModelValue(value)
        api.directEmitChange(value)
      }
    }
  }
}
