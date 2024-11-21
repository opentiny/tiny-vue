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

import type { IFormRenderlessParams } from '@/types'

export const watchRules =
  ({ api, props, state }: Pick<IFormRenderlessParams, 'api' | 'props' | 'state'>) =>
  (newRules = {}, oldRules = {}): void => {
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

export const computedAutoLabelWidth =
  ({ state }: Pick<IFormRenderlessParams, 'state'>) =>
  (): string => {
    if (!state.potentialLabelWidthArr.length) {
      return '0'
    }

    const max = Math.max(...state.potentialLabelWidthArr)

    return max ? `${max}px` : ''
  }

export const computedHideRequiredAsterisk =
  ({ props, designConfig }: Pick<IFormRenderlessParams, 'props' | 'designConfig'>) =>
  (): boolean => {
    return props.hideRequiredAsterisk ?? designConfig?.hideRequiredAsterisk ?? true
  }

export const computedValidateIcon =
  ({ props, designConfig }: Pick<IFormRenderlessParams, 'props' | 'designConfig'>) =>
  (): object | null => {
    return props.validateIcon ?? designConfig?.icons?.validateIcon ?? 'icon-error'
  }

export const computedIsErrorInline =
  ({ props, designConfig }: Pick<IFormRenderlessParams, 'props' | 'designConfig'>) =>
  (): boolean => {
    if (props.messageType) {
      return props.messageType === 'inline'
    }
    if (typeof props.inlineMessage === 'boolean') {
      return props.inlineMessage
    }
    return designConfig?.messageType === 'inline'
  }

export const computedIsErrorBlock =
  ({ props, designConfig }: Pick<IFormRenderlessParams, 'props' | 'designConfig'>) =>
  (): boolean => {
    if (props.messageType) {
      return props.messageType === 'block'
    }
    if (designConfig && Object.hasOwnProperty.call(designConfig, 'messageType')) {
      return designConfig.messageType === 'block'
    }
    return true
  }

export const created =
  ({ parent, state }: Pick<IFormRenderlessParams, 'parent' | 'state'>) =>
  (): void => {
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

export const resetFields =
  ({ props, state }: Pick<IFormRenderlessParams, 'props' | 'state'>) =>
  (): void => {
    if (!props.model) {
      return
    }

    state.fields.forEach((field) => {
      field.resetField()
    })
  }

export const updateTip =
  ({ props, state }: Pick<IFormRenderlessParams, 'props' | 'state'>) =>
  (): void => {
    if (!props.model) {
      return
    }

    state.fields.forEach((field) => {
      field.updateTip()
    })
  }

export const clearValidate =
  (state: IFormRenderlessParams['state']) =>
  (props: string | string[] = []): void => {
    let fields
    // 如果没赋值，默认就是清除全部
    if (props.length) {
      fields =
        typeof props === 'string'
          ? state.fields.filter((field) => props === field.prop)
          : state.fields.filter((field) => field.prop && props.includes(field.prop))
    } else {
      fields = state.fields
    }

    fields.forEach((field) => {
      field.clearValidate()
    })
  }

export const validate =
  ({ props, state }: Pick<IFormRenderlessParams, 'props' | 'state'>) =>
  (callback?: (valid: boolean, invalidFields?: any) => void): Promise<boolean> | void => {
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
    let invalidFieldArr = []

    state.fields.forEach((field) => {
      field.validate('', (message, field) => {
        if (message) {
          valid = false
        }

        invalidFields = merge({}, invalidFields, field)

        if (field) {
          Object.keys(field).forEach((item) => invalidFieldArr.push(item))
        }

        if (typeof callback === 'function' && ++count === state.fields.length) {
          callback(valid, invalidFields, invalidFieldArr)
        }
      })
    })

    if (promise) {
      return promise
    }
  }

export const validateField =
  (state: IFormRenderlessParams['state']) =>
  (props, cb): void => {
    props = [].concat(props)

    const fields = state.fields.filter((field) => props.includes(field.prop))

    if (!fields.length) {
      return
    }

    fields.forEach((field) => {
      field.validate('', cb)
    })
  }

export const getLabelWidthIndex =
  (state: IFormRenderlessParams['state']) =>
  (width: number): number => {
    const index = state.potentialLabelWidthArr.indexOf(width)

    if (index === -1) {
      throw new Error('unpected width ', width as ErrorOptions)
    }

    return index
  }

export const registerLabelWidth =
  ({ api, state }: Pick<IFormRenderlessParams, 'api' | 'state'>) =>
  (val: number, oldVal: number): void => {
    if (val && oldVal) {
      const index = api.getLabelWidthIndex(oldVal)
      state.potentialLabelWidthArr.splice(index, 1, val)
    } else if (val) {
      state.potentialLabelWidthArr.push(val)
    }
  }

export const deregisterLabelWidth =
  ({ api, state }: Pick<IFormRenderlessParams, 'api' | 'state'>) =>
  (val: number): void => {
    const index = api.getLabelWidthIndex(val)
    state.potentialLabelWidthArr.splice(index, 1)
  }

export const bindDialogEvent = ({ api, dialog, state }: Pick<IFormRenderlessParams, 'api' | 'dialog' | 'state'>) => {
  let unbindDialogEvent = () => {
    // empty
  }

  if (dialog) {
    const boxCloseHandler = (isFormReset = true) => {
      isFormReset ? api.resetFields() : api.clearValidate()
    }
    const boxDragHandler = () => {
      if (!state.timer) {
        state.timer = window.setTimeout(() => {
          state.timer = 0
          api.updateTip()
        }, 10)
      }
    }

    dialog.state.emitter.on('boxclose', boxCloseHandler)
    dialog.state.emitter.on('boxdrag', boxDragHandler)

    unbindDialogEvent = () => {
      dialog.state.emitter.off('boxclose', boxCloseHandler)
      dialog.state.emitter.off('boxdrag', boxDragHandler)
    }
  }

  return unbindDialogEvent
}

export const showTooltip =
  ({ vm, state }: Pick<IFormRenderlessParams, 'vm' | 'state'>) =>
  (dom: HTMLElement, val: string): void => {
    const tooltip = vm.$refs.tooltip
    tooltip.state.referenceElm = dom
    tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')
    tooltip.doDestroy()

    state.tooltipVisible = true
    state.displayedValue = val

    setTimeout(tooltip.updatePopper, 20)
  }

export const hideTooltip =
  ({ state }: Pick<IFormRenderlessParams, 'state'>) =>
  (): void => {
    state.tooltipVisible = false
  }
