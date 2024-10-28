import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'
import BoxSelector from '../common/box-selector.tsx'
import ColorSelector from '../common/color-selector.jsx'

/**
 * 每一个都是独立的按钮，可能存在点击效果、下拉框以及hover样式
 */
export default defineComponent({
  name: $prefix + 'ToolbarMenuItem',
  components: {
    BoxSelector,
    ColorSelector
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const { item } = props
    const { icon, action, submenu, title, config = {} } = item

    const { withColor, withTable } = config

    const isActive = hooks.computed(() => item.isActive?.())

    // 需要出现子菜单或其他辅助区域
    const showTooltip = withColor || withTable || submenu?.length > 0

    const handleClick = (item) => {
      const { action } = item
      action?.()
    }
    return () => (
      <button class={['tiny-toolbar-menu__item', { 'is-active': isActive.value }]} title={title}>
        {/* 图标 */}
        {item.icon && (
          <div class="tiny-toolbar-menu__icon">
            <item.icon onClick={() => handleClick(item)}></item.icon>
          </div>
        )}

        {/* 子选项 */}
        {showTooltip && (
          <div class={['tiny-toolbar-menu__tooltip', 'tooltip', { 'with-table': withTable }]}>
            {item.submenu?.map((option) => (
              <div class="tiny-toolbar-menu__option" onClick={() => option.action()}>
                {option.icon && <option.icon></option.icon>}
                <div>{option.text}</div>
              </div>
            ))}
            {withTable && <box-selector onClickBox={(e) => item.action?.(e)} />}
            {withColor && <color-selector onClickBox={(e) => item.action?.(e)} defaultColor={config.defaultColor} />}
          </div>
        )}
      </button>
    )
  }
})
