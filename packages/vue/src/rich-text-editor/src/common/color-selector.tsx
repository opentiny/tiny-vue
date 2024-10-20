import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'ColorSelector',
  props: {
    defaultColor: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const handleClickBox = (color) => {
      const instance = hooks.getCurrentInstance()
      emit('clickBox', color)
    }

    return () => (
      <div>
        <div class="tiny-color-selector__view">
          {props.defaultColor?.map((color, index) => (
            <div
              class="tiny-color-selector__box"
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleClickBox(color)}></div>
          ))}
        </div>
      </div>
    )
  }
})
