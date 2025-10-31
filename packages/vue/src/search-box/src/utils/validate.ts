import { createNewTag, getTagId } from './tag.ts'
import { isNumber, omitObj } from './index.ts'

/**
 * 校验正常标签的值，并返回相应的新标签
 * @param instance searchbox 的 instance
 * @param state searchbox 的 state
 * @param props searchbox 的 props
 * @return 验证通过则返回新标签对象，否则返回null
 */
export const getVerifyTag = async (instance, state, props) => {
  const { prevItem, inputEditValue } = state
  const { operators } = prevItem
  const rest = omitObj(prevItem)
  let newTag = null
  let isPass = true

  await instance.$refs.formRef.validateField(['inputEditValue'], (errMsg) => {
    if (errMsg) {
      isPass = false
    }
  })

  if (isPass) {
    let id = null
    const operator = state.operatorValue && operators ? { operator: state.operatorValue } : null
    let value = inputEditValue
    const otherAttr = {}
    // 多选
    if (Array.isArray(inputEditValue)) {
      otherAttr.options = []
      value = ''
      inputEditValue.forEach((editValue) => {
        const item = state.currentEditValue.find((item) => item.label === editValue)
        const label = item?.label || editValue
        value = !value ? label : `${value} | ${label}`
        if (item) {
          const itemId = getTagId(props, prevItem, item)
          otherAttr.options.push({ label, ...itemId })
        } else {
          otherAttr.options.push({ label })
        }
      })
    } else if (Array.isArray(state.currentEditValue)) {
      // 单选
      const item = state.currentEditValue.find((item) => item.label === value)
      id = getTagId(props, prevItem, item)
    }

    newTag = createNewTag({ ...rest, label: state.selectValue, ...operator, value, ...id, ...otherAttr })
  }

  return newTag
}

/**
 * 校验 numRange 的值，并返回相应的新标签
 * @param instance searchbox 的 instance
 * @param state searchbox 的 state
 * @param props searchbox 的 props
 * @return 验证通过则返回新标签对象，否则返回null
 */
export const getVerifyNumTag = async (instance, state, props) => {
  const { prevItem } = state
  const minNum = `min${prevItem.field}`
  const maxNum = `max${prevItem.field}`
  const start = state[minNum]
  const end = state[maxNum]
  const verifyProps = [minNum, maxNum]
  let isPass = true
  let newTag = null
  await instance.$refs.formRef.validateField(verifyProps, (errMsg) => {
    if (errMsg) {
      isPass = false
    }
  })

  if (isPass) {
    const { field, label: prevLabel, unit, type, operators } = prevItem
    const label = unit ? `${prevLabel}(${unit})` : prevLabel
    let value = ''
    if (start && end) {
      value = `${start}-${end}`
    } else {
      value = start ? `≥${start}` : `≤${end}`
    }
    const id = getTagId(props, prevItem, prevItem)
    const operator = state.operatorValue && operators ? { operator: state.operatorValue } : null
    newTag = createNewTag({ type, field, label, value, ...id, start, end, ...operator })
  }

  return newTag
}

/**
 * 校验 dateRange datetimeRange 的值，并返回相应的新标签
 * @param instance searchbox 的 instance
 * @param state searchbox 的 state
 * @param props searchbox 的 props
 * @param isDateTimeType 是否 datetimeRange
 * @return 验证通过则返回新标签对象，否则返回null
 */
export const getVerifyDateTag = async (instance, state, props, isDateTimeType) => {
  const { prevItem, startDate, endDate, startDateTime, endDateTime } = state
  let start = null
  let end = null
  let isPass = true
  let newTag = null
  let verifyProps = null
  if (isDateTimeType) {
    start = startDateTime
    end = endDateTime
    verifyProps = ['startDateTime', 'endDateTime']
  } else {
    start = startDate
    end = endDate
    verifyProps = ['startDate', 'endDate']
  }

  await instance.$refs.formRef.validateField(verifyProps, (errMsg) => {
    if (errMsg) {
      isPass = false
    }
  })

  if (isPass) {
    const { field, label, type, operators } = prevItem
    let value = ''
    if (start && end) {
      if (start > end) {
        return
      } else if (start === end) {
        value = start
      } else {
        value = `${start}-${end}`
      }
    } else {
      value = start ? `≥${start}` : `≤${end}`
    }
    const id = getTagId(props, prevItem, prevItem)
    const operator = state.operatorValue && operators ? { operator: state.operatorValue } : null
    newTag = createNewTag({ type, field, label, value, start, end, ...id, ...operator })
  }

  return newTag
}

/**
 * 按需加载 state 里 numRange 类型的变量，按需加载校验规则
 * @param state searchbox 的 state
 * @param item 当前选择的 item 值
 */
export const setStateNumRange = (state, item, t) => {
  const { prevItem } = state
  const { field, start, end, min = prevItem.min, max = prevItem.max } = item
  const nextMinNum = `min${field}`
  const nextMaxNum = `max${field}`
  if (state.curMinNumVar !== nextMinNum || state.curMaxNumVar !== nextMaxNum) {
    delete state[state.curMinNumVar]
    delete state[state.curMaxNumVar]
    delete state.formRules[state.curMinNumVar]
    delete state.formRules[state.curMaxNumVar]
    state.curMinNumVar = nextMinNum
    state.curMaxNumVar = nextMaxNum
  }
  state[state.curMinNumVar] = start
  state[state.curMaxNumVar] = end
  const { curMinNumVar, curMaxNumVar } = state
  const minIsNumber = isNumber(min)
  const maxIsNumber = isNumber(max)
  if (minIsNumber || maxIsNumber) {
    state.formRules[curMinNumVar] = {
      validator: (rule, value, cb) => {
        const valueIsNumber = isNumber(value)

        if (
          (!valueIsNumber && isNumber(state[curMaxNumVar])) ||
          (valueIsNumber &&
            ((minIsNumber && !maxIsNumber && value >= min) ||
              (!minIsNumber && maxIsNumber && value <= max) ||
              (value >= min && value <= max)))
        ) {
          cb()
        } else {
          state.numberShowMessage = Boolean(value || state[curMaxNumVar])
          cb(new Error(t('tvp.tvpSearchbox.rangeMinErr', [min, max])))
        }
      }
    }
    state.formRules[curMaxNumVar] = {
      validator: (rule, value, cb) => {
        const MinValueIsNumber = isNumber(state[curMinNumVar])
        const curMin = MinValueIsNumber && min < state[curMinNumVar] ? Number(state[curMinNumVar]) : min
        const curMinIsNumber = isNumber(curMin)
        const valueIsNumber = isNumber(value)

        if (
          (!valueIsNumber && MinValueIsNumber) ||
          (valueIsNumber &&
            ((curMinIsNumber && !maxIsNumber && value >= curMin) ||
              (!curMinIsNumber && maxIsNumber && value <= max) ||
              (value >= curMin && value <= max)))
        ) {
          cb()
        } else if (!valueIsNumber && !MinValueIsNumber) {
          cb(new Error(t('tvp.tvpSearchbox.rangeNumberTitle')))
        } else {
          cb(new Error(t('tvp.tvpSearchbox.rangeMaxErr')))
        }
      }
    }
  } else {
    state.formRules[curMaxNumVar] = {
      validator: (rule, value, cb) => {
        const curMin = state[curMinNumVar]
        const valueIsNumber = isNumber(value)
        const curMinIsNumber = isNumber(curMin)

        if (
          (valueIsNumber && !curMinIsNumber) ||
          (!valueIsNumber && curMinIsNumber) ||
          (valueIsNumber && curMinIsNumber && value >= Number(curMin))
        ) {
          cb()
        } else if (!valueIsNumber && !curMinIsNumber) {
          cb(new Error(t('tvp.tvpSearchbox.rangeNumberTitle')))
        } else {
          cb(new Error(t('tvp.tvpSearchbox.rangeMaxErr')))
        }
      }
    }
  }
}
