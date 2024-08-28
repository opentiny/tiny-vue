import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'
import BoxSelector from '../common/box-selector.tsx'

/**
 * 每一个都是独立的按钮，可能存在点击效果、下拉框以及hover样式
 */
export default defineComponent({
  name: $prefix + 'ToolbarMenuItem',
  components: {
    BoxSelector
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const { item } = props
    const { icon, action, submenu, config = {} } = item

    const { withColor, withTable } = config

    const isActive = hooks.computed(() => item.isActive?.())

    const withInput = !!withColor
    const inputRef = hooks.ref()

    const handleClick = (item) => {
      if (withInput) {
        inputRef.value?.click?.()
        return
      }
      const { action } = item
      action?.()
    }
    return () => (
      <button class={['tiny-toolbar-menu__item', { 'is-active': isActive.value }]}>
        {/* 图标 */}
        {item.icon && (
          <div class="tiny-toolbar-menu__icon">
            <item.icon onClick={() => handleClick(item)}></item.icon>
          </div>
        )}
        {/* 颜色输入框 */}
        {withColor && <input ref={inputRef} type="color" onInput={(e) => item.action?.(e?.target?.value)} />}

        {/* 子选项 */}
        <div class="tiny-toolbar-menu__tooltip tooltip">
          {item.submenu?.map((option) => (
            <div class="tiny-toolbar-menu__option" onClick={() => option.action()}>
              {option.icon && <option.icon></option.icon>}
              <div>{option.text}</div>
            </div>
          ))}

          {withTable && <BoxSelector onClickBox={(e) => item.action?.(e)} />}
        </div>
      </button>
    )
  }
})
