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
import { setup, $prefix, directive, defineComponent } from '@opentiny/vue-common'
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
    return setup({ props, context, renderless, api })
  },
  render() {
    const { hide, splitButton, type, disabled, handleMainButtonClick, slots, size, state, menuOptions, title } = this
    let triggerElm = null
    // TINY-TODO tiny-dropdown类名整改,统一tiny-组件名为前缀
    const triggerClass = 'tiny-dropdown__trigger tiny-dropdown-trigger'
    const visibleClass = state.visible ? 'tiny-dropdown--visible tiny-dropdown-visible' : ''

    const IconDown = state?.designConfig?.icons?.downWard || iconDeltaDown()
    const ButtonIconDown = state?.designConfig?.icons?.downWard || iconDownWard()

    if (splitButton) {
      triggerElm = (
        <tiny-button-group>
          <tiny-button
            type={type}
            size={size}
            onClick={handleMainButtonClick}
            disabled={disabled}
            class="tiny-dropdown__title-button">
            {slots.default && slots.default()}
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
      const defaultTriggerElm = (
        <span>
          <span class={'tiny-dropdown__title'}>{title}</span>
          <IconDown class={visibleClass}></IconDown>
        </span>
      )

      triggerElm = (slots.default && slots.default()) || [defaultTriggerElm]

      // 增加一层，vue3 环境中无法使用 slots.default 的方式获取原生 DOM 元素
      triggerElm = disabled ? (
        <span ref="trigger" disabled class={triggerClass}>
          {triggerElm}
        </span>
      ) : (
        <span ref="trigger" class={triggerClass}>
          {triggerElm}
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
      <div class="tiny-dropdown" v-clickoutside={hide} aria-disabled={disabled}>
        {triggerElm}
        {menuElm}
      </div>
    )
  }
})
</script>
