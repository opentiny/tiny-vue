<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/dropdown/vue'
import { setup, $prefix, directive, defineComponent, h } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import ButtonGroup from '@opentiny/vue-button-group'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import { iconDeltaDown, iconDownWard } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'Dropdown',
  componentName: 'TinyDropdown',
  components: {
    TinyButton: Button,
    TinyButtonGroup: ButtonGroup,
    TinyDropdownMenu: DropdownMenu,
    IconDownWard: iconDownWard()
  },
  directives: directive({ Clickoutside }),
  props: {
    type: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    splitButton: Boolean,
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    border: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    menuOptions: {
      type: Object,
      default: () => ({
        options: [],
        textField: 'label',
        popperClass: '',
        placement: 'bottom-end'
      })
    },
    title: {
      type: String,
      default: '下拉菜单'
    },
    inheritWidth: {
      type: Boolean,
      default: false
    }
  },
  emits: ['visible-change', 'item-click', 'button-click', 'menu-item-click', 'handle-click'],
  setup(props, context) {
    return setup({ props, context, renderless, api, h })
  },
  render() {
    const { splitButton, type, disabled, handleMainButtonClick, menuOptions, title } = this
    const { slots, size, state, border, showIcon, round, clickOutside } = this
    const params = { visible: state.visible }
    let triggerElm = null
    // TINY-TODO tiny-dropdown类名整改,统一tiny-组件名为前缀
    const triggerClass = 'tiny-dropdown__trigger tiny-dropdown-trigger'
    const visibleClass = state.visible ? 'tiny-dropdown--visible tiny-dropdown-visible' : ''

    const IconDown = state.designConfig?.icons?.dropdownIcon || iconDeltaDown()
    const ButtonIconDown = state.designConfig?.icons?.dropdownIcon || iconDownWard()
    const defaultSlot = slots.default && slots.default(params)

    if (splitButton) {
      triggerElm = (
        <tiny-button-group>
          <tiny-button
            type={type}
            size={size}
            onClick={handleMainButtonClick}
            disabled={disabled}
            class="tiny-dropdown__title-button">
            {defaultSlot || <span>{title}</span>}
          </tiny-button>
          <tiny-button
            ref="trigger"
            type={type}
            size={size}
            class={`tiny-dropdown__caret-button ${triggerClass}`}
            disabled={disabled}
            reset-time={0}>
            <ButtonIconDown class={visibleClass}></ButtonIconDown>
          </tiny-button>
        </tiny-button-group>
      )
    } else {
      const suffixSlot = slots['suffix-icon'] && slots['suffix-icon']()
      const vnodeData = (defaultSlot && defaultSlot[0]?.data) || {}
      const { attrs = {} } = vnodeData

      if (disabled && !attrs.disabled) {
        attrs.disabled = true
        vnodeData.attrs = attrs
      }

      // 增加一层，vue3 环境中无法使用 slots.default 的方式获取原生 DOM 元素
      const suffixInner = showIcon ? (
        <span class={'tiny-dropdown__suffix-inner ' + visibleClass}>{suffixSlot || <IconDown></IconDown>}</span>
      ) : (
        ''
      )

      const defaultTriggerElm = defaultSlot || <span class={'tiny-dropdown__title'}>{title}</span>

      triggerElm = border ? (
        <tiny-button
          ref="trigger"
          round={round}
          disabled={disabled}
          class={`${state.visible ? 'is-expand' : ''}${showIcon ? ' is-show-icon' : ''}`}
          reset-time={0}>
          {defaultTriggerElm}
          {suffixInner}
        </tiny-button>
      ) : (
        <span
          ref="trigger"
          class={`is-text${state.visible ? ' is-expand' : ' is-hide'}${
            disabled ? ' is-disabled' : ''
          } ${triggerClass}`}>
          {defaultTriggerElm}
          {suffixInner}
        </span>
      )
    }

    const defaulMenuElm = (
      <tiny-dropdown-menu
        options={menuOptions.options}
        text-field={menuOptions.textField || menuOptions['text-field']}
        popper-class={menuOptions.popperClass || menuOptions['popper-class']}
        placement={menuOptions.placement}></tiny-dropdown-menu>
    )

    const menuElm = disabled ? null : (slots.dropdown && slots.dropdown()) || defaulMenuElm

    return (
      <div class="tiny-dropdown" v-clickoutside={clickOutside} aria-disabled={disabled}>
        {triggerElm}
        {menuElm}
      </div>
    )
  }
})
</script>
