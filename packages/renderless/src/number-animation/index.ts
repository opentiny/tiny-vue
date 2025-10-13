export const onFinish =
  ({ emit, props, state }) =>
  () => {
    state.value = props.to
    state.animating = false
    emit('finish')
  }

const easeOut = (t: number): number => 1 - (1 - t) ** 5

export const play =
  ({ props, state, api }) =>
  () => {
    animate(state, props, api)
  }
export const animate = (state, props, api) => {
  state.animating = true
  state.value = props.from
  if (props.from !== props.to) {
    const startTime = performance.now()

    const tick = () => {
      const current = performance.now()
      const elapsedTime = Math.min(current - startTime, props.duration)
      const currentValue = props.from + (props.to - props.from) * easeOut(elapsedTime / props.duration)
      if (elapsedTime === props.duration) {
        api.onFinish()
        return
      }
      state.value = currentValue
      requestAnimationFrame(tick)
    }
    tick()
  }
}

export const formattedValue =
  ({ state, props }) =>
  () => {
    // 类型检查
    if (typeof state.value !== 'number' && typeof state.value !== 'string') return
    if (typeof props.precision !== 'number') return
    const numValue = Number(state.value)
    if (isNaN(numValue) || !isFinite(numValue)) return
    if (numValue === 0) {
      return numValue.toFixed(props.precision)
    }
    let formatValue = numValue.toFixed(props.precision)
    if (typeof props.separator === 'string' && props.separator !== '') {
      const [integerPart, decimalPart] = formatValue.split('.')
      formatValue =
        integerPart.replace(/(\d)(?=(\d{3})+$)/g, '$1' + props.separator) + (decimalPart ? '.' + decimalPart : '')
    }
    return formatValue
  }
