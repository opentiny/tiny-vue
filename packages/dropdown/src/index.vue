<script lang="jsx">
import { renderless, api } from '@opentiny/vue-renderless/dropdown/vue'
import { setup, $prefix, directive } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import ButtonGroup from '@opentiny/vue-button-group'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import { iconChevronDown, iconChevronUp } from '@opentiny/vue-icon'

export default {
  name: $prefix + 'Dropdown',
  componentName: 'TinyDropdown',
  components: {
    TinyButton: Button,
    TinyButtonGroup: ButtonGroup,
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp()
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
    }
  },
  emits: ['visible-change', 'item-click', 'button-click', 'visibles-change', 'menu-item-click'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const triggerClass = 'tiny-dropdown-trigger'
    const { hide, splitButton, type, disabled, handleMainButtonClick, slots, size, state } = this
    let triggerElm = null

    if (splitButton) {
      triggerElm = (
        <tiny-button-group>
          <tiny-button type={type} size={size} nativeOn-click={handleMainButtonClick} disabled={disabled}>
            {slots.default && slots.default()}
          </tiny-button>
          <tiny-button ref="trigger" type={type} size={size} class={`tiny-dropdown__caret-button ${triggerClass}`} disabled={disabled} reset-time={0}>
            {state.visible ? <icon-chevron-up /> : <icon-chevron-down />}
          </tiny-button>
        </tiny-button-group>
      )
    } else {
      triggerElm = slots.default && slots.default()

      const vnodeData = triggerElm[0].data || {}
      const { attrs = {} } = vnodeData

      if (disabled && !attrs.disabled) {
        attrs.disabled = true
        vnodeData.attrs = attrs
      }

      // 增加一层，vue3 环境中无法使用 slots.default 的方式获取原生 DOM 元素
      triggerElm = (
        <span ref="trigger" class={triggerClass}>
          {triggerElm}
        </span>
      )
    }

    const menuElm = disabled ? null : slots.dropdown && slots.dropdown()

    return (
      <div class="tiny-dropdown" v-clickoutside={hide} aria-disabled={disabled}>
        {triggerElm}
        {menuElm}
      </div>
    )
  }
}
</script>
