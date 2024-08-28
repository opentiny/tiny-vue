import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

const SIDE = 4
const BOX_SIZE = 30

export default defineComponent({
  name: $prefix + 'BoxSelector',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const { items } = props

    const boxPanelRef = hooks.ref()
    const flagX = hooks.ref(-1)
    const flagY = hooks.ref(-1)
    const handleMouseMove = (e) => {
      if (boxPanelRef.value) {
        const { x, y } = boxPanelRef.value.getBoundingClientRect()
        flagX.value = Math.ceil((e.x - x) / BOX_SIZE)
        flagY.value = Math.ceil((e.y - y) / BOX_SIZE)
      }
    }

    const handleClickBox = (rowIndex, colIndex) => {
      const instance = hooks.getCurrentInstance()
      emit('clickBox', { row: rowIndex + 1, col: colIndex + 1 })
    }

    return () => (
      <div class="box-panel" ref={boxPanelRef} onmousemove={handleMouseMove}>
        {new Array(SIDE).fill(0).map((row, rowIndex) => (
          <div class="box-row">
            {new Array(SIDE).fill(0).map((col, colIndex) => (
              <div
                onClick={() => handleClickBox(rowIndex, colIndex)}
                class={['item', { 'is-active': rowIndex < flagY.value && colIndex < flagX.value }]}
                style={{ width: `${BOX_SIZE}px`, height: `${BOX_SIZE}px` }}></div>
            ))}
          </div>
        ))}
      </div>
    )
  }
})
