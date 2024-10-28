import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'
import ColorSelectPanel from '@opentiny/vue-color-select-panel'

export default defineComponent({
  name: $prefix + 'ColorSelector',
  props: {
    defaultColor: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ColorSelectPanel
  },
  setup(props, { emit }) {
    const handleClickBox = (color) => {
      const instance = hooks.getCurrentInstance()
      emit('clickBox', color)
    }

    return () => (
      <div class="tiny-color-selector__view">
        <div class="tiny-color-selector__container">
          {props.defaultColor?.map((color, index) => (
            <div
              class="tiny-color-selector__box"
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleClickBox(color)}></div>
          ))}
        </div>
        <color-select-panel visible={true} onConfirm={handleClickBox} />
      </div>
    )
  }
})
