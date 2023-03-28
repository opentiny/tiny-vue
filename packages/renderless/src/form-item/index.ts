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

import { POSITION, VALIDATE_STATE } from '@opentiny/vue-renderless/common'
import { merge } from '@opentiny/vue-renderless/common/object'
import Validator from '@opentiny/vue-renderless/common/validate'
import { isNull } from '@opentiny/vue-renderless/common/type'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'

export const watchError = (state) => (value) => {
  if (!isNull(value) && state.getValidateType === 'tip') {
    state.canShowTip = true
  }

  state.validateMessage = value
  state.validateState = value ? VALIDATE_STATE.Error : ''
}

export const watchValidateStatus = (state) => (value) => {
  state.validateState = value
}

export const computedGetValidateType = ({ props, state }) => () => props.validateType || (state.formInstance ? state.formInstance.validateType : '')

export const computedLabelStyle = ({ props, state }) => () => {
  const result = {}

  if (state.form.labelPosition === POSITION.Top) {
    return result
  }

  const labelWidth = props.labelWidth || state.form.labelWidth

  if (labelWidth) {
    result.width = labelWidth
  }

  return result
}

export const computedValueStyle = ({ props, state }) => () => {
  const result = {}

  if (state.form.labelPosition === POSITION.Top) {
    return result.width = '100%'
  }

  const labelWidth = props.labelWidth || state.form.labelWidth

  if (labelWidth) {
    if (labelWidth === 'auto') {
      result.width = labelWidth
    } else {
      result.width = `calc(100% - ${labelWidth})`
    }
  }

  return result
}

export const computedContentStyle = ({ props, state }) => () => {
  const result = {}
  const label = props.label

  if (state.form.labelPosition === POSITION.Top || state.form.inline) {
    return result
  }

  if (!label && !props.labelWidth && state.isNested) {
    return result
  }

  const labelWidth = props.labelWidth || state.form.labelWidth

  if (labelWidth === 'auto') {
    if (props.labelWidth === 'auto') {
      result.marginLeft = state.computedLabelWidth
    } else if (state.form.labelWidth === 'auto') {
      result.marginLeft = state.formInstance.state.autoLabelWidth
    }
  } else {
    result.marginLeft = labelWidth
  }

  return result
}

export const computedForm = ({ constants, instance, state }) => () => {
  const { FORM_NAME, FORM_ITEM_NAME } = constants
  let parent = instance.$parent
  let parentName = parent.$options.componentName

  while (parentName !== FORM_NAME) {
    if (parentName === FORM_ITEM_NAME) {
      state.isNested = true
    }

    parent = parent.$parent
    parentName = parent.$options.componentName
  }

  return parent
}

export const computedIsRequired = ({ api, state }) => () => {
  if (state.validationRequired) {
    return true
  }

  let rules = api.getRules()
  let isRequired = false

  if (rules && rules.length) {
    rules.every((rule) => {
      if (rule.required) {
        isRequired = true
        return false
      }

      return true
    })
  }

  return isRequired
}

export const getPropByPath = (obj, path, strict) => {
  let findObj = obj

  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let index = 0
  let keys = path.split('.')

  for (let len = keys.length; index < len - 1; ++index) {
    if (!findObj && !strict) {
      break
    }

    let key = keys[index]

    if (key in findObj) {
      findObj = findObj[key]
    } else {
      if (strict) {
        throw new Error('[Tiny Form] please transfer a valid prop path to form item!')
      }

      break
    }
  }

  return {
    o: findObj,
    k: keys[index],
    v: findObj ? findObj[keys[index]] : null
  }
}

export const computedFieldValue = ({ props, state }) => () => {
  const model = state.form.model

  if (!model || !props.prop) {
    return
  }

  let path = props.prop

  if (path.includes(':')) {
    path = path.replace(/:/, '.')
  }

  return getPropByPath(model, path, true).v
}

export const mounted = ({ api, instance, props, state, refs }) => () => {
  state.tooltip = refs.tooltip

  if (props.prop) {
    api.dispatch('Form', 'form:addField', instance)

    let initialValue = state.fieldValue

    if (Array.isArray(initialValue)) {
      initialValue = [].concat(initialValue)
    }

    state.initialValue = initialValue
    api.addValidateEvents()
  }
}

export const unmounted = ({ api, instance, state }) => () => {
  state.canShowTip = false
  api.dispatch('Form', 'form:removeField', instance)
}

export const validate = ({ api, props, state, t }) => (trigger, callback = () => undefined) => {
  state.validateDisabled = false

  const rules = api.getFilteredRule(trigger)

  if ((!rules || rules.length === 0) && props.required === undefined) {
    callback()
    return true
  }

  state.validateState = VALIDATE_STATE.Validating

  const descriptor = {}

  if (rules && rules.length > 0) {
    rules.forEach((rule) => {
      delete rule.trigger
    })
  }

  descriptor[props.prop] = rules

  const validator = new Validator(descriptor, t)
  const model = {}

  model[props.prop] = state.fieldValue

  validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
    api.clearValidate()

    const handlerError = () => {
      state.validateState = !errors ? VALIDATE_STATE.Success : VALIDATE_STATE.Error

      state.validateMessage = errors ? errors[0].message : ''
      state.canShowTip = !!errors

      callback(state.validateMessage, invalidFields)

      state.formInstance && state.formInstance.$emit('validate', props.prop, !errors, state.validateMessage || null)
    }

    if (errors && state.stowed[0] === errors[0].field) {
      handlerError()

      /*
       * 去掉了nextTick，修改为同步校验，保证 "第一次校验" 和 "重置后再次校验" 都是同步校验
       *
       * 只在两次或多次触发相同field情况下执行异步触发校验
       * nextTick(handlerError)
       */

      return
    }

    errors && (state.stowed[0] = errors[0].field)

    handlerError()
  })
}

export const clearValidate = (state) => () => {
  state.validateState = ''
  state.validateMessage = ''
  state.validateDisabled = false
}

export const resetField = ({ api, nextTick, props, state }) => () => {
  if (state.getValidateType === 'tip') {
    state.canShowTip = false
  }

  state.validateState = ''
  state.validateMessage = ''

  let model = state.form.model
  let value = state.fieldValue
  let path = props.prop

  if (path.includes(':')) {
    path = path.replace(/:/, '.')
  }

  let prop = getPropByPath(model, path, true)

  state.validateDisabled = true

  if (Array.isArray(value)) {
    prop.o[prop.k] = [].concat(state.initialValue)
  } else {
    prop.o[prop.k] = state.initialValue
  }
  // reset validateDisabled after onFieldChange triggered
  nextTick(() => {
    state.validateDisabled = false
  })

  setTimeout(() => state.validateState && (state.validateState = ''))

  api.broadcast('timeSelect', 'fieldReset', state.initialValue)
}

export const getRules = ({ props, state }) => () => {
  let formRules = state.form.rules
  const selfRules = props.rules
  const requiredRule = props.required !== undefined ? { required: !!props.required } : []
  const prop = getPropByPath(formRules, props.prop || '')

  formRules = formRules ? prop.o[props.prop || ''] || prop.v : []

  return [].concat(selfRules || formRules || []).concat(requiredRule)
}

export const getFilteredRule = (api) => (trigger) => {
  const rules = api.getRules()

  return rules
    .filter((rule) => {
      if (!rule.trigger || trigger === '') {
        return true
      }

      if (Array.isArray(rule.trigger)) {
        return rule.trigger.includes(trigger)
      }

      return rule.trigger === trigger
    })
    .map((rule) => merge({}, rule))
}

export const onFieldBlur = (api) => () => {
  api.validate('blur')
}

export const onFieldChange = ({ api, state }) => () => {
  if (state.validateDisabled) {
    state.validateDisabled = false
    return
  }

  api.validate('change')
}

export const updateComputedLabelWidth = (state) => (width) => {
  state.computedLabelWidth = width ? `${width}px` : ''
}

export const addValidateEvents = ({ api, instance, props, state }) => () => {
  const rules = api.getRules()

  if (rules.length || props.required !== undefined) {
    const manual = props.manual || (state.formInstance ? state.formInstance.manual : false)

    if (!manual) {
      instance.$on('form.blur', api.onFieldBlur)
      instance.$on('form.change', api.onFieldChange)
    }
  }
}

export const removeValidateEvents = (instance) => () => {
  instance.$off()
}

export const updateTip = ({ refs, state }) => () => {
  if (state.getValidateType !== 'tip' && !state.canShowTip) {
    return
  }

  const tooltip = refs.tooltip

  if (!tooltip) {
    return
  }

  tooltip.updatePopper()
}

export const getValueByPath = (object, prop) => {
  prop = prop || ''

  const paths = prop.split('.')
  let current = object
  let result = null

  for (let i = 0, len = paths.length; i < len; i++) {
    const path = paths[i]

    if (!current) {
      break
    }

    if (i === len - 1) {
      result = current[path]
      break
    }

    current = current[path]
  }

  return result
}

export const wrapValidate = ({ validateFunc, props }) => {
  if (props.validateDebounce) {
    return debounce(50, validateFunc)
  } else {
    return validateFunc
  }
}
