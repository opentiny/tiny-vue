const normalRange = (value, min, max) => (value < min ? min : value > max ? max : value)

const sliceValue = (value, min, max, count, cycleRoll) => {
  value = normalRange(value, min, max)

  const values = [value]
  const tmpArr = Array.from({ length: rightShift(count) })
  const prev = () => (cycleRoll ? tVal + max - min + 1 : null)
  const next = () => (cycleRoll ? tVal - max + min - 1 : null)
  let tVal

  tmpArr.map((v, i) => values.unshift((tVal = value - i - 1) < min ? prev() : tVal))
  tmpArr.map((v, i) => values.push((tVal = value + i + 1) > max ? next() : tVal))

  return values
}

const validArr = (arr) => Array.isArray(arr) && arr.length

const validProps = (props) => {
  const { modelValue, options } = props
  return validArr(modelValue) && validArr(options) && modelValue.length === options.length
}

const rightShift = (count) => count >>> 1

const getFont = (pos, count) => Math.abs(rightShift(count) + 1 - pos)

export const parseType = (props) => (values) => {
  const { valueType } = props
  return values.map(valueType === 'number' ? Number : valueType === 'string' ? String : (i) => i)
}

export const init = ({ api, props, state }) => (valuesCopy) => {
  if (!validProps(props)) return

  const { modelValue, options, cycleRoll, valueField, textField } = props
  const { visibleOptionCount } = state
  let { disabled } = props

  disabled = typeof disabled === 'function' ? disabled : () => false

  const values = api.parseType(valuesCopy || modelValue.slice(0))
  const types = Array.from({ length: values.length })
  const ranges = Array.from({ length: values.length })
  const indices = Array.from({ length: values.length })

  const visibleOptions = options.map((opt, i) => {
    let slicedValues, existOption

    if (Array.isArray(opt)) {
      if (opt.length === 0) return []

      let index = opt.findIndex((item) => item[valueField] === values[i])

      index = index === -1 ? 0 : index
      types[i] = 'a'
      ranges[i] = [0, opt.length - 1]
      indices[i] = index
      slicedValues = sliceValue(index, 0, opt.length - 1, visibleOptionCount, cycleRoll)
      existOption = (i) => ({ ...opt[i], disabled: disabled(opt[i][valueField], ...values) })
    } else if (opt && typeof opt === 'object') {
      let range

      if (Array.isArray(opt.range)) {
        range = opt.range.slice(0, 2)
      } else if (typeof opt.rangeMethod === 'function') {
        range = opt.rangeMethod(...values)
      }

      types[i] = 'o'
      ranges[i] = api.parseType(range)
      slicedValues = sliceValue(values[i], ranges[i][0], ranges[i][1], visibleOptionCount, cycleRoll)
      existOption = (i) => opt.optionMethod(i, ...values)
    }

    if (!slicedValues || !existOption) return []

    return slicedValues.map((slicedValue, i) => {
      const option = slicedValue === null ? { [valueField]: null, [textField]: '' } : existOption(slicedValue)

      option._$font = getFont(i + 1, visibleOptionCount)
      option._$status = option.disabled ? 'disabled' : option._$font === 0 ? 'focus' : 'normal'

      return option
    })
  })

  state.selectorCount = values.length

  values.map((value, i) => {
    const index = indices[i]
    const opts = options[i]
    const vOpts = visibleOptions[i]

    state[`selector${i}`] = { index, options: opts, ranges, types, value, values, visibleOptions: vOpts }
  })
}

export const calcSelector = (api) => (cycleRoll, dy, pos, selector, valueField) => {
  const { index, options, ranges, types, value, values } = selector
  const valuesCopy = values.slice(0)
  const sRange = ranges[pos]
  const sType = types[pos]
  let sVal = sType === 'o' ? value : sType === 'a' ? index : null
  const f = (arr) => arr[0]
  const l = (arr) => arr[arr.length - 1]
  const noop = () => sVal
  const prev = () => (cycleRoll && sVal === f(sRange) ? l(sRange) : sVal - 1)
  const next = () => (cycleRoll && sVal === l(sRange) ? f(sRange) : sVal + 1)

  sVal = dy > 0 ? prev() : dy < 0 ? next() : noop()
  sVal = normalRange(sVal, ...sRange)

  if (sType === 'a') {
    sVal = options[sVal][valueField]
  }

  if (sVal !== value) {
    valuesCopy.splice(pos, 1, sVal)

    api.init(valuesCopy)
  }
}

export const handleTouchstart = (state) => (e) => {
  const { clientY } = e.changedTouches[0]

  state.touching = true
  state.touchStartPos = state.touchPos = { clientY }
  state.accrueDy = 0
}

export const handleTouchend = (state) => () => {
  state.touching = false
  state.touchStartPos = state.touchPos = {}
  state.accrueDy = 0
}

export const handleTouchmove = ({ api, props, state }) => (e, pos) => {
  if (!state.touching) return

  const { cycleRoll, valueField } = props
  const { touchPos, optionHeight } = state
  const { clientY } = e.changedTouches[0]
  const dy = clientY - touchPos.clientY

  state.touchPos = { clientY }
  state.accrueDy += dy

  const absDy = Math.abs(state.accrueDy)
  const threshold = optionHeight / 4

  if (absDy > threshold) {
    const selector = state[`selector${pos}`]

    api.calcSelector(cycleRoll, state.accrueDy, pos, selector, valueField)
    state.accrueDy = 0
  }
}

export const watchActionSheetVisible = ({ emit, state, vm }) => (visible) => {
  emit('update:visible', visible)

  if (!visible) return

  setTimeout(() => {
    const optionRef = vm.$el.querySelector('[data-tag="tiny-mobile-cs-option"]')
    optionRef && (state.optionHeight = optionRef.offsetHeight)
  })
}

export const close = (state) => () => state.actionSheetVisible && (state.actionSheetVisible = false)

export const confirm = ({ api, emit, props, state, vm }) => () => {
  const { confirmDisabled } = state

  if (confirmDisabled) return

  const { modelValue } = props
  let focusOpts = vm.$el.querySelectorAll('[date-status="focus"]')
  let values

  if (focusOpts && focusOpts.length) {
    focusOpts = [...focusOpts]
    values = focusOpts.map((focusOpt) => focusOpt.dataset.option)
    values = api.parseType(values)
  }

  if (
    validArr(values) &&
    validArr(modelValue) &&
    values.length === modelValue.length &&
    values.join() !== modelValue.join()
  ) {
    emit('update:modelValue', values)
  }

  api.close()
}

export const styleOpt = (option) => option._$font

export const statusOpt = (option) => option._$status

export const computedConfirmDisabled = (state) => () => {
  const { selectorCount, visibleOptionCount } = state
  const interOpts = Array.from({ length: selectorCount }).map((v, i) => {
    const vOpts = state[`selector${i}`].visibleOptions
    return vOpts[rightShift(visibleOptionCount)]
  })

  return interOpts.some((opt) => opt.disabled)
}
