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

import { POSITION, VALIDATE_STATE } from '../common'
import { omitText } from '../common/string'
import { merge } from '../common/object'
import Validator from '../common/validate'
import { isNull } from '../common/type'
import debounce from '../common/deps/debounce'
import type {
  IFormItemRenderlessParams,
  IFormInstance,
  IFormItemDisplayedValueParam,
  IFormItemRule,
  IFormItemTrigger,
  IFormItemValidateStatus,
  IFormItemLabelStyle
} from '@/types'
import type { StyleValue } from 'vue'

export const watchError =
  (state: IFormItemRenderlessParams['state']) =>
  (value: string): void => {
    if (!isNull(value) && state.getValidateType === 'tip') {
      state.canShowTip = true
    }

    state.validateMessage = value
    state.validateState = value ? VALIDATE_STATE.Error : ''
  }

export const watchValidateStatus =
  (state: IFormItemRenderlessParams['state']) =>
  (value: IFormItemValidateStatus): void => {
    state.validateState = value
  }

export const computedGetValidateType =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): string =>
    props.validateType || (state.formInstance ? state.formInstance.validateType : '')

export const computedValidateIcon =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): object | null =>
    props.validateIcon ?? state?.formInstance?.state?.validateIcon ?? null

export const computedIsErrorInline =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): boolean => {
    if (props.messageType) {
      return props.messageType === 'inline'
    }
    if (typeof props.inlineMessage === 'boolean') {
      return props.inlineMessage
    }
    return state?.formInstance?.state?.isErrorInline ?? false
  }

export const computedIsErrorBlock =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): boolean => {
    if (props.messageType) {
      return props.messageType === 'block'
    }
    return state?.formInstance?.state?.isErrorBlock ?? false
  }

export const computedLabelStyle =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): IFormItemLabelStyle => {
    const result = { width: '' }

    if (state.form.labelPosition === POSITION.Top) {
      return result
    }

    const labelWidth = props.labelWidth || state.form.labelWidth

    if (labelWidth) {
      result.width = labelWidth
    }

    return result
  }

export const computedValueStyle =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): { width: string } => {
    const result = { width: '' }

    if (state.form.labelPosition === POSITION.Top) {
      result.width = '100%'
      return result
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

export const computedContentStyle =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): StyleValue => {
    const result: StyleValue = {}
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

export const computedForm =
  ({ constants, vm, state }: Pick<IFormItemRenderlessParams, 'constants' | 'vm' | 'state'>) =>
  (): IFormInstance | null => {
    const { FORM_NAME, FORM_ITEM_NAME } = constants
    let parent = vm.$parent?.$parent as IFormInstance | null
    let parentName = parent?.$options?.componentName

    while (parent && parentName !== FORM_NAME) {
      if (parentName === FORM_ITEM_NAME) {
        state.isNested = true
      }

      parent = parent?.$parent as IFormInstance | null
      parentName = parent?.$options?.componentName
    }

    return parent
  }

export const computedIsRequired =
  ({ api, state }: Pick<IFormItemRenderlessParams, 'api' | 'state'>) =>
  (): boolean => {
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
/**
 * @description: 给定对象和路径，返回对象路径的值。
 * @param {object} obj
 * @param {string} path
 * @param {boolean} strict
 * @return {*}
 */
export const getPropByPath = (obj: object, path: string, strict?: boolean) => {
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

    if (findObj && key in findObj) {
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

export const computedFieldValue =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  () => {
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

export const mounted =
  ({ api, vm, props, state }: Pick<IFormItemRenderlessParams, 'api' | 'vm' | 'props' | 'state'>) =>
  (): void => {
    state.tooltip = vm.$refs.tooltip

    if (props.prop) {
      api.dispatch('Form', 'form:addField', vm)

      let initialValue = state.fieldValue

      if (Array.isArray(initialValue)) {
        initialValue = ([] as any).concat(initialValue)
      }

      state.initialValue = initialValue
      api.addValidateEvents()
    }
  }

export const unmounted =
  ({ api, vm, state }: Pick<IFormItemRenderlessParams, 'api' | 'vm' | 'state'>) =>
  (): void => {
    state.canShowTip = false
    api.dispatch('Form', 'form:removeField', vm)
  }

export const validate =
  ({ api, props, state, t }: Pick<IFormItemRenderlessParams, 'api' | 'props' | 'state' | 't'>) =>
  (trigger: IFormItemTrigger, callback: Function = () => undefined): void => {
    state.validateDisabled = false

    const rules = api.getFilteredRule(trigger)

    if (((!rules || rules.length === 0) && props.required === undefined) || props.validateDisabled) {
      callback()
      return
    }

    state.validateState = VALIDATE_STATE.Validating

    const descriptor = {}

    if (rules && rules.length > 0) {
      rules.forEach((rule) => {
        delete rule.trigger
      })
    }

    descriptor[props.prop || ''] = rules

    const validator = new Validator(descriptor, t)
    const model = {}

    model[props.prop || ''] = state.fieldValue

    validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
      api.clearValidate()

      const handlerError = () => {
        state.validateState = !errors ? VALIDATE_STATE.Success : VALIDATE_STATE.Error

        if (errors && props.error) {
          errors[0].message = props.error
        }
        state.validateMessage = errors ? errors[0].message : ''
        state.canShowTip = Boolean(errors)

        callback(state.validateMessage, invalidFields)

        state.formInstance && state.formInstance.$emit('validate', props.prop, !errors, state.validateMessage || null)
      }

      handlerError()
    })
  }

export const clearValidate = (state: IFormItemRenderlessParams['state']) => (): void => {
  state.validateState = ''
  state.validateMessage = ''
  state.validateDisabled = false
}

export const resetField =
  ({ api, nextTick, props, state }: Pick<IFormItemRenderlessParams, 'api' | 'nextTick' | 'props' | 'state'>) =>
  (): void => {
    if (state.getValidateType === 'tip') {
      state.canShowTip = false
    }

    state.validateState = ''
    state.validateMessage = ''

    let model = state.form.model || {}
    let value = state.fieldValue
    let path = props.prop || ''

    if (path && path.includes(':')) {
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

/**
 * @description 获取本表单项的校验规则
 * 来源有可能有3处：form中rules,form-item中的rules以及form-item配置了required属性
 */
export const getRules =
  ({ props, state }: Pick<IFormItemRenderlessParams, 'props' | 'state'>) =>
  (): IFormItemRule[] => {
    let formRules = state.form.rules || {}
    const selfRules = props.rules
    const requiredRule = props.required !== undefined ? { required: !!props.required } : []
    const prop = getPropByPath(formRules, props.prop || '')

    formRules = formRules ? prop.o[props.prop || ''] || prop.v : []
    // @ts-ignore
    return ([] as IFormItemRule[]).concat(selfRules || formRules || []).concat(requiredRule)
  }

/**
 * @description 根据trigger来筛选符合条件和检验规则。此处的规则进行了一层浅拷贝处理。
 * 因为valide中使用会delete掉其中的trigger属性。
 * 不传或者传空字符串，则默认返回所有规则。
 * @param {trigger} target 触发检验规则
 * @returns {Array} 符合条件的检验规则
 */
export const getFilteredRule =
  (api: IFormItemRenderlessParams['api']) =>
  (trigger: IFormItemTrigger): IFormItemRule[] => {
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

export const onFieldBlur = (api: IFormItemRenderlessParams['api']) => (): void => {
  api.validate('blur')
}

export const onFieldChange =
  ({ api, state }: Pick<IFormItemRenderlessParams, 'api' | 'state'>) =>
  (): void => {
    if (state.validateDisabled) {
      state.validateDisabled = false
      return
    }

    api.validate('change')
  }

export const updateComputedLabelWidth =
  (state: IFormItemRenderlessParams['state']) =>
  (width: number): void => {
    state.computedLabelWidth = width ? `${width}px` : ''
  }

export const addValidateEvents =
  ({ api, vm, props, state }: Pick<IFormItemRenderlessParams, 'api' | 'vm' | 'props' | 'state'>) =>
  (): void => {
    const rules = api.getRules()

    if (rules.length || props.required !== undefined) {
      const manual = props.manual || (state.formInstance ? state.formInstance.manual : false)

      if (!manual) {
        vm.$on('form.blur', api.onFieldBlur)
        vm.$on('form.change', api.onFieldChange)
      }
    }
  }

export const removeValidateEvents = (vm: IFormItemRenderlessParams['vm']) => (): void => {
  vm.$off()
}

export const updateTip =
  ({ vm, state }: Pick<IFormItemRenderlessParams, 'vm' | 'state'>) =>
  (): void => {
    if (state.getValidateType !== 'tip' && !state.canShowTip) {
      return
    }

    const tooltip = vm.$refs.tooltip

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

export const wrapValidate = ({
  validateFunc,
  props
}: Pick<IFormItemRenderlessParams, 'validateFunc' | 'props'>): Function => {
  if (props.validateDebounce) {
    return debounce(500, validateFunc)
  } else {
    return validateFunc
  }
}

/**
 * 目前仅mobile-first模板使用到
 */
export const handleMouseenter =
  ({ state }: Pick<IFormItemRenderlessParams, 'state'>) =>
  (e): void => {
    if (!state.isDisplayOnly || !state.typeName || !state.form) return
    const dom = e.target
    const text = dom.textContent
    const font = window.getComputedStyle(dom).font
    const rect = dom.getBoundingClientRect()
    let res: { o?: boolean; t?: any } = {}
    let overHeight = false

    if (['text', 'password', 'number'].includes(state.typeName)) {
      res = omitText(text, font, rect.width)
    }

    if (state.typeName === 'textarea' && dom && dom.scrollHeight > dom.offsetHeight) {
      overHeight = true
    }

    if (res.o || overHeight) {
      state.form.showTooltip(dom, state.displayedValue)
    }
  }

export const handleLabelMouseenter =
  ({ props, state, slots }) =>
  (e) => {
    if (!state.form.overflowTitle || !state.form || slots.label) return
    const label = e.target
    if (label && label.scrollWidth > label.offsetWidth) {
      state.form.showTooltip(label, props.label + state.form.labelSuffix)
    }
  }

export const handleMouseleave = (state: IFormItemRenderlessParams['state']) => (): void => {
  state.form && state.form.hideTooltip()
}

export const getDisplayedValue =
  ({ state }: Pick<IFormItemRenderlessParams, 'state'>) =>
  (param: IFormItemDisplayedValueParam): void => {
    if (!state.formInstance.displayOnly) return
    state.typeName = param.type
    state.isBasicComp = true
    state.displayedValue = param.val
  }

export const clearDisplayedValue =
  ({ state }: Pick<IFormItemRenderlessParams, 'state'>) =>
  (): void => {
    state.typeName = ''
    state.isBasicComp = false
    state.displayedValue = ''
  }
