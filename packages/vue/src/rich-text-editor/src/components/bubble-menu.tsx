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
    const handleClick = (item) => {
      const { action } = item
      action?.()
    }

    return () => (
      <div class="tiny-bubble-menu__view">
        {items.map((item, index) => {
          const isActive = item.isActive?.()
          return (
            <div class={['tiny-bubble-menu__item', { 'is-active': isActive }]} key={index}>
              {item.icon && <item.icon onClick={() => handleClick(item)} class="tiny-bubble-menu__icon"></item.icon>}
            </div>
          )
        })}
      </div>
    )
  }
})
