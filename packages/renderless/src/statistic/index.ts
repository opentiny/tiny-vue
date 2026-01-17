import { isFunction } from '@opentiny/utils'

export const isNumber =
  ({ props }) =>
  () => {
    return typeof props.value === 'number'
  }

export const getIntegerAndDecimal =
  ({ props }) =>
  () => {
    if (isFunction(props.formatter)) {
      return props.formatter(props.value)
    }
    if (typeof props.value !== 'number') {
      return props.value
    }
    let displayValue = String(props.value).split('.')
    let integer = displayValue[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, props.groupSeparator)
    let decimal = displayValue[1]?.padEnd(props.precision, '0')

    // 当精度为 0 且大于 0，进行精度截取
    if (props.precision >= 0) {
      decimal = decimal?.slice(0, props.precision > 0 ? props.precision : 0)
    }
    // 处理当没有显示值，数字默认为 0
    if (!displayValue) {
      integer = '0'
    }
    // 当无小数点值且传入精度值，须默认用 0 补充精度值
    if (!decimal && props.precision) {
      let display = '0'
      decimal = display.padEnd(props.precision, '0')
    }
    return [integer, decimal].join(decimal ? '.' : '')
  }

export const animateValue =
  ({ props, state }) =>
  () => {
    if (!props.useAnimation) return
    let AnimationId = null
    const start = props.startValue
    const end = Number(props.value)
    const duration = props.duration
    if (Number.isNaN(end)) {
      state.animatingValue = props.value
      return
    }
    const startTime = performance.now()
    const cancel = () => {
      if (AnimationId) {
        cancelAnimationFrame(AnimationId)
        AnimationId = null
      }
    }
    if (AnimationId) {
      cancel()
    }
    // 根据 end 值的小数位数确定要保留的小数位数
    const getDecimalPlaces = (num: number) => {
      if (Math.floor(num) === num) return 0
      // 将数字转换为字符串，获取小数部分长度
      const decimalPart = num.toString().split('.')[1]
      return decimalPart ? decimalPart.length : 0
    }

    const decimalPlaces = getDecimalPlaces(end)
    const multiplier = 10 ** decimalPlaces

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t))
      const current = start + (end - start) * easeOutExpo(progress)

      // 根据 end 的小数位数进行四舍五入
      state.animatingValue = Math.round(current * multiplier) / multiplier

      if (progress < 1) {
        AnimationId = requestAnimationFrame(animate)
      } else {
        state.animatingValue = end
        AnimationId = null
      }
    }

    AnimationId = requestAnimationFrame(() => {
      AnimationId = requestAnimationFrame(animate)
    })
  }
