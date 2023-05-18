/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import { merge } from '../common/object'

export const watchRules = ({ api, props, state }) => (newRules = {}, oldRules = {}) => {
  const newValidFields = Object.keys(newRules)
  const oldValidFields = Object.keys(oldRules)
  const removeValidFields = oldValidFields.filter((item) => !newValidFields.includes(item))
  api.clearValidate(removeValidFields)

  state.fields.forEach((field) => {
    field.removeValidateEvents()
    field.addValidateEvents()
  })

  if (props.validateOnRuleChange) {
    api.validate(() => undefined)
  }
}

export const computedAutoLabelWidth = ({ state }) => () => {
  if (!state.potentialLabelWidthArr.length) {
    return 0
  }

  const max = Math.max(...state.potentialLabelWidthArr)

  return max ? `${max}px` : ''
}

export const created = ({ parent, state }) => () => {
  parent.$on('form:addField', (field) => {
    if (field) {
      state.fields.push(field)
    }
  })
  /* istanbul ignore next */
  parent.$on('form:removeField', (field) => {
    if (field.prop) {
      state.fields.splice(state.fields.indexOf(field), 1)
    }
  })
}

export const resetFields = ({ props, state }) => () => {
  if (!props.model) {
    return
  }

  state.fields.forEach((field) => {
    field.resetField()
  })
}

export const updateTip = ({ props, state }) => () => {
  if (!props.model) {
    return
  }

  state.fields.forEach((field) => {
    field.updateTip()
  })
}

export const clearValidate = (state) => (props = []) => {
  const fields = props.length
    ? typeof props === 'string'
      ? state.fields.filter((field) => props === field.prop)
      : state.fields.filter((field) => props.includes(field.prop))
    : state.fields

  fields.forEach((field) => {
    field.clearValidate()
  })
}

export const validate = ({ props, state }) => (callback) => {
  if (!props.model) {
    return
  }

  let promise

  if (typeof callback !== 'function' && window.Promise) {
    promise = new window.Promise((resolve, reject) => {
      callback = (valid) => {
        valid ? resolve(valid) : reject(valid)
      }
    })
  }

  let valid = true
  let count = 0

  // 如果需要验证的fields为空，调用验证时立刻返回callback
  if (state.fields.length === 0 && callback) {
    callback(true)
  }

  let invalidFields = {}

  state.fields.forEach((field) => {
    field.validate('', (message, field) => {
      if (message) {
        valid = false
      }

      invalidFields = merge({}, invalidFields, field)

      if (typeof callback === 'function' && ++count === state.fields.length) {
        callback(valid, invalidFields)
      }
    })
  })

  if (promise) {
    return promise
  }
}

export const validateField = (state) => (props, cb) => {
  props = [].concat(props)

  const fields = state.fields.filter((field) => props.includes(field.prop))

  if (!fields.length) {
    return
  }

  fields.forEach((field) => {
    field.validate('', cb)
  })
}

export const getLabelWidthIndex = (state) => (width) => {
  const index = state.potentialLabelWidthArr.indexOf(width)

  if (index === -1) {
    throw new Error('unpected width ', width)
  }

  return index
}

export const registerLabelWidth = ({ api, state }) => (val, oldVal) => {
  if (val && oldVal) {
    const index = api.getLabelWidthIndex(oldVal)
    state.potentialLabelWidthArr.splice(index, 1, val)
  } else if (val) {
    state.potentialLabelWidthArr.push(val)
  }
}

export const deregisterLabelWidth = ({ api, state }) => (val) => {
  const index = api.getLabelWidthIndex(val)
  state.potentialLabelWidthArr.splice(index, 1)
}

export const bindDialogEvent = ({ api, dialog, state }) => {
  if (dialog) {
    dialog.state.emitter.on('boxclose', (isFormReset = true) => {
      isFormReset ? api.resetFields() : api.clearValidate()
    })

    dialog.state.emitter.on('boxdrag', () => {
      if (!state.timer) {
        state.timer = setTimeout(() => {
          state.timer = null
          api.updateTip()
        }, 10)
      }
    })
  }
}

export const showTooltip = ({ vm, state }) => (dom, val) => {
  const tooltip = vm.$refs.tooltip
  tooltip.state.referenceElm = dom
  tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')
  tooltip.doDestroy()

  state.tooltipVisible = true
  state.displayedValue = val

  setTimeout(tooltip.updatePopper, 20)
}

export const hideTooltip = ({ state }) => () => {
  state.tooltipVisible = false
}

