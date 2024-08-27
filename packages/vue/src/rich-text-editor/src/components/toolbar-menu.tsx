import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'
import ToolbarMenuItem from './toolbar-menu-item'

export default defineComponent({
  name: $prefix + 'ToolbarMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ToolbarMenuItem
  },
  setup(props) {
    const { items } = props

    return () => {
      return items.length ? (
        <div class="tiny-toolbar-menu__view">
          {items.map((item) => (
            <toolbar-menu-item item={item} />
          ))}
        </div>
      ) : null
    }
  }
})
