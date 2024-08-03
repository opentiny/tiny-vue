import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'SlashMenu',
  props: {
    items: Array
  },
  render() {
    const { items, handleClick } = this as any

    return (
      <div class="tiny-float-menu__view">
        {items.map((item, index) => (
          <div class="tiny-float-menu__item" key={index}>
            {item.icon && <item.icon onClick={() => handleClick(item)} class="tiny-float-menu__icon"></item.icon>}
          </div>
        ))}
      </div>
    )
  },
  setup(props) {
    const handleClick = (item) => {
      const { action } = item
      action?.()
    }

    return {
      handleClick
    }
  }
})
