import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

/**
 * 定义气泡菜单 UI 视图
 */
export default defineComponent({
  name: $prefix + 'BubbleMenu',
  props: {
    /**
     * 传入的气泡菜单项
     * isActive?: () => boolean 是否激活态
     * isDisabled?: () => boolean 是否禁用态
     * icon: Component: icon 组件
     * action?: 具体的菜单动作
     * input?: 额外输入组件
     */
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
      // 此处修改了气泡菜单的背景色 与默认视图有所区别
      <div class="tiny-bubble-menu__view" style={{ 'backgroundColor': '#64B687' }}>
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
