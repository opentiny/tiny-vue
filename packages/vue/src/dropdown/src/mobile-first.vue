<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/dropdown/vue'
import { setup, $prefix, directive, h, $props, defineComponent } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import ButtonGroup from '@opentiny/vue-button-group'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import { iconChevronDown, iconChevronUp } from '@opentiny/vue-icon'

export default defineComponent({
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
    ...$props,
    type: String,
    trigger: {
      type: String,
      default: 'click'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    singleButton: {
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
    modelValue: [String, Number],
    showSelfIcon: {
      type: Boolean,
      default: false
    }
  },
  emits: ['visible-change', 'item-click', 'button-click', 'selectedIndex', 'current-item-click'],
  setup(props, context) {
    return setup({ props, context, renderless, api, h })
  },
  render() {
    const { type, disabled, handleMainButtonClick, slots, size, state, border, round, m, clickOutside, singleButton } =
      this
    const params = { visible: state.visible }
    let triggerElm = null

    if (singleButton) {
      triggerElm = (
        <tiny-button
          ref="trigger"
          type={type === 'primary' ? type : ''}
          size={size}
          buttonClass={m([
            'rounded-sm active:rounded flex items-center justify-center',
            state.visible &&
              type !== 'primary' &&
              'active:border-color-border-focus text-color-text-primary active:text-color-brand-focus focus:border-color-border-focus focus:text-color-brand-focus'
          ])}
          disabled={disabled}
          reset-time={0}
          nativeOn-click={handleMainButtonClick}>
          <div class={'overflow-hidden overflow-ellipsis whitespace-nowrap w-full'}>
            {slots.default && slots.default(params)}
          </div>
        </tiny-button>
      )
    } else {
      const defaultSlot = slots.default && slots.default(params)
      const suffixSlot = slots['suffix-icon'] && slots['suffix-icon']()

      const vnodeData = defaultSlot?.[0].data || {}
      const { attrs = {} } = vnodeData

      if (disabled && !attrs.disabled) {
        attrs.disabled = true
        vnodeData.attrs = attrs
      }

      // 增加一层，vue3 环境中无法使用 slots.default 的方式获取原生 DOM 元素
      const suffixInner = state.showIcon && (
        <span
          class={[
            'ml-1 sm:ml-2 [&>svg:nth-of-type(1)]:align-top w-4 h-4 inline-block [&_svg]:transition-transform [&_svg]:duration-300',
            {
              'fill-color-brand-focus [&>svg:nth-of-type(1)]:hover:fill-color-brand-hover [&>svg:nth-of-type(1)]:active:fill-color-brand-focus leading-4':
                !disabled && !border
            },
            border && (state.visible ? '[&_svg]:rotate-180' : '[&_svg]:rotate-0'),
            border &&
              type !== 'primary' &&
              state.visible &&
              '[&_svg]:fill-color-border-focus visited:[&_svg]:fill-color-border-focus active:[&_svg]:fill-color-border-focus'
          ]}>
          {suffixSlot || <icon-chevron-down />}
        </span>
      )

      triggerElm = border ? (
        <tiny-button
          ref="trigger"
          round={round}
          size={size}
          type={type === 'primary' ? type : ''}
          disabled={disabled}
          class={[
            'rounded-sm inline-flex items-center justify-center',
            type === 'primary'
              ? '[&_svg]:fill-color-bg-1'
              : state.visible
              ? 'active:border-color-border-focus text-color-text-primary active:text-color-brand-focus focus:border-color-border-focus focus:text-color-brand-focus'
              : '[&_svg]:fill-color-icon-placeholder'
          ]}
          reset-time={0}>
          {defaultSlot}
          {suffixInner}
        </tiny-button>
      ) : (
        <span
          ref="trigger"
          class={[
            state.visible ? '[&_svg]:rotate-180' : '[&_svg]:rotate-0',
            disabled && 'cursor-not-allowed [&_svg]:fill-color-text-disabled',
            'inline-flex [&_svg]:transition-transform [&_svg]:duration-300'
          ]}>
          <span
            class={[
              'inline-flex h-4 leading-4',
              disabled ? 'text-color-text-disabled' : 'hover:text-color-brand-hover active:text-color-brand-focus'
            ]}>
            {defaultSlot}
          </span>
          <span class="align-bottom leading-4">{suffixInner}</span>
        </span>
      )
    }

    const menuElm = disabled ? null : slots.dropdown && slots.dropdown()

    return (
      <div
        class={[
          'relative inline-block [&>span:nth-of-type(1)]:text-color-brand-focus [&>span:nth-of-type(1)]:text-sm sm:[&>span:nth-of-type(1)]:text-xs',
          disabled && '[&>span:nth-of-type(1)]:text-color-brand-focus',
          state.showSelfIcon && 'leading-4 h-4 [&_svg]:align-top [&_svg]:rotate-0'
        ]}
        v-clickoutside={clickOutside}
        aria-disabled={disabled}>
        {triggerElm}
        {menuElm}
      </div>
    )
  }
})
</script>
