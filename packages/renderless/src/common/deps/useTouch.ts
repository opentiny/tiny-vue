const TAP_OFFSET = 5

const getDirection = (x, y) => {
  if (x > y) return 'horizontal'
  if (y > x) return 'vertical'
  return ''
}

const touchEvent = (event) => event.touches[0]

export const useTouch = (ref) => () => {
  const startX = ref(0)
  const startY = ref(0)
  const deltaX = ref(0)
  const deltaY = ref(0)
  const offsetX = ref(0)
  const offsetY = ref(0)
  const direction = ref('')
  const isTap = ref(true)

  const isVertical = () => direction.value === 'vertical'
  const isHorizontal = () => direction.value === 'horizontal'

  const reset = () => {
    deltaX.value = 0
    deltaY.value = 0
    offsetX.value = 0
    offsetY.value = 0
    direction.value = ''
    isTap.value = true
  }

  const start = (event) => {
    reset()
    const touch = touchEvent(event)
    startX.value = touch.clientX
    startY.value = touch.clientY
  }

  const move = (event) => {
    const touch = touchEvent(event)
    // safari back will set clientX to negative number
    deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value
    deltaY.value = touch.clientY - startY.value
    offsetX.value = Math.abs(deltaX.value)
    offsetY.value = Math.abs(deltaY.value)

    // lock direction when distance is greater than a certain value
    const LOCK_DIRECTION_DISTANCE = 10
    if (!direction.value || (offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE)) {
      direction.value = getDirection(offsetX.value, offsetY.value)
    }

    if (isTap.value && (offsetX.value > TAP_OFFSET || offsetY.value > TAP_OFFSET)) {
      isTap.value = false
    }
  }

  return {
    move,
    start,
    reset,
    isVertical,
    isHorizontal,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isTap
  }
}
