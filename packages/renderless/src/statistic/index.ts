import { isFunction } from '../common/type'

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
    if (!isNumber(props.value)) {
      return props.value
    }
    let displayValue = props.value ? String(props.value).split('.') : ''
    let integer = displayValue[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, props.groupSeparator)
    let decimal = displayValue[1]?.padEnd(props.precision, '0').slice(0, props.precision > 0 ? props.precision : 0)
    // 处理当数字为0的情况
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
