const MIN_DISTANCE = 10

const getDirection = (x, y) => {
  if (x > y && x > MIN_DISTANCE) return 'horizontal'
  if (y > x && y > MIN_DISTANCE) return 'vertical'
  return ''
}

export function useTouch({ ref }) {
  const startX = ref(0)
  const startY = ref(0)
  const moveX = ref(0)
  const moveY = ref(0)
  const deltaX = ref(0)
  const deltaY = ref(0)
  const offsetX = ref(0)
  const offsetY = ref(0)
  const direction = ref('')

  const isVertical = () => direction.value === 'vertical'
  const isHorizontal = () => direction.value === 'horizontal'

  const move = (event) => {
    const touchEvent = event.touches[0]
    deltaX.value = touchEvent.clientX - startX.value
    deltaY.value = touchEvent.clientY - startY.value
    moveY.value = touchEvent.clientY
    moveX.value = touchEvent.clientX
    offsetY.value = Math.abs(deltaY.value)
    offsetX.value = Math.abs(deltaX.value)

    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value)
    }
  }

  const reset = () => {
    deltaX.value = 0
    offsetX.value = 0
    offsetY.value = 0
    deltaY.value = 0
    direction.value = ''
  }

  const start = (event) => {
    reset()
    startY.value = event.touches[0].clientY
    startX.value = event.touches[0].clientX
  }

  return {
    start,
    move,
    reset,
    startY,
    startX,
    moveY,
    moveX,
    deltaY,
    deltaX,
    offsetY,
    offsetX,
    isVertical,
    direction,
    isHorizontal
  }
}
