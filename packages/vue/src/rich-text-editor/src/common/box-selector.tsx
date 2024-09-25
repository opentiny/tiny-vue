import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

const SIDE = 4
const BOX_SIZE = 30

export default defineComponent({
  name: $prefix + 'BoxSelector',
  props: {
    side: {
      type: Number,
      default: SIDE
    },
    size: {
      type: Number,
      default: BOX_SIZE
    }
  },
  setup(props, { emit }) {
    const { side, size } = props

    const boxPanelRef = hooks.ref()
    const flagX = hooks.ref(-1)
    const flagY = hooks.ref(-1)
    const handleMouseMove = (e) => {
      if (boxPanelRef.value) {
        const { x, y } = boxPanelRef.value.getBoundingClientRect()
        flagX.value = Math.ceil((e.x - x) / size)
        flagY.value = Math.ceil((e.y - y) / size)
      }
    }

    const handleClickBox = (rowIndex, colIndex) => {
      const instance = hooks.getCurrentInstance()
      emit('clickBox', { row: rowIndex + 1, col: colIndex + 1 })
    }

    // TODO 处理 box selector 显隐后未复原的问题
    let visibleObserver

    hooks.onMounted(() => {
      const target = boxPanelRef.value?.parentElement

      if (!target) return
      visibleObserver = new MutationObserver((list) => {
        for (const mutation of list) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const newStyle = window.getComputedStyle(target)

            const isVisible = newStyle.display !== 'none'
          }
        }
      })

      visibleObserver.observe(target, { attributes: true })
    })

    hooks.onBeforeUnmount(() => {
      visibleObserver?.disconnect()
    })

    return () => (
      <div class="tiny-box-selector__view" ref={boxPanelRef} onmousemove={handleMouseMove}>
        {new Array(side).fill(0).map((row, rowIndex) => (
          <div class="tiny-box-selector__row">
            {new Array(side).fill(0).map((col, colIndex) => (
              <div
                onClick={() => handleClickBox(rowIndex, colIndex)}
                class={['tiny-box-selector__item', { 'is-active': rowIndex < flagY.value && colIndex < flagX.value }]}
                style={{ width: `${size}px`, height: `${size}px` }}></div>
            ))}
          </div>
        ))}
      </div>
    )
  }
})
