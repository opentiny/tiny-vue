import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'FloatMenu',
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
      <div class="tiny-float-menu__view">
        {items.map((item, index) => (
          <div class="tiny-float-menu__item" key={index}>
            {item.icon && <item.icon onClick={() => handleClick(item)} class="tiny-float-menu__icon"></item.icon>}
          </div>
        ))}
      </div>
    )
  }
})
