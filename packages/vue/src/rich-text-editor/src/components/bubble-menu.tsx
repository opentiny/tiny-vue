import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'BubbleMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { items } = props

    const info = hooks.reactive({
      backgroundColor: '#000000'
    })

    const handleClick = (item) => {
      const { action, isDisabled } = item
      if (isDisabled?.()) return
      action?.(info)
    }

    return () => (
      <div class="tiny-bubble-menu__view">
        {items.map((item, index) => {
          const isActive = item.isActive?.()
          const isDisabled = item.isDisabled?.()
          const { input } = item

          const handleBgColorInput = (e) => {
            const color = e.target.value
            info.backgroundColor = color
            input?.cb(e)
          }

          return (
            <div class={['tiny-bubble-menu__item', { 'is-active': isActive, 'is-disabled': isDisabled }]} key={index}>
              {item.icon && <item.icon onClick={() => handleClick(item)} class="tiny-bubble-menu__icon"></item.icon>}
              {/* 提供额外选项 如颜色选择器 */}
              {input?.type === 'color' && (
                <input type="color" class="tiny-bubble-menu__input-color" onInput={(e) => handleBgColorInput(e)} />
              )}
            </div>
          )
        })}
      </div>
    )
  }
})
