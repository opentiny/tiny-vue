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
import type { ExtractPropTypes, StyleValue } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type { toggle, computedWarpClasses, computedInnerClasses, computedStyle } from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  PC_PREFIXCLS: 'tiny-switch',
  MOBILE_PREFIXCLS: 'tiny-mobile-switch',
  Mode: 'pc',
  prefixcls(mode) {
    return mode === this.Mode ? this.PC_PREFIXCLS : this.MOBILE_PREFIXCLS
  }
}

export const switchProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean || undefined,
    default: undefined
  },
  types: {
    type: String
  },
  falseColor: String,
  falseValue: {
    type: [String, Number, Boolean],
    default: false
  },
  mini: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  size: [Number, String],
  tabindex: {
    type: String,
    default: '1'
  },
  trueColor: String,
  trueValue: {
    type: [String, Number, Boolean],
    default: true
  },
  beforeChange: Function,
  displayOnly: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
}

export interface ISwitchState {
  currentValue: string | number | boolean
  innerClasses: string
  wrapClasses: ISwitchClass
  style: StyleValue
  formDisabled: boolean
  disabled: boolean
  isDisplayOnly: boolean
  showText: boolean
}

export type ISwitchClass = Array<string | { [calssName: string]: boolean }>

export type ISwitchProps = ExtractPropTypes<typeof switchProps>

export type ISwitchConstants = typeof $constants

export type ISwitchRenderlessParams = ISharedRenderlessFunctionParams<ISwitchConstants> & {
  state: ISwitchState
  props: ISwitchProps
  prefixCls: string
}

export interface ISwitchApi {
  state: ISwitchState
  toggle: ReturnType<typeof toggle>
  computedWarpClasses: ReturnType<typeof computedWarpClasses>
  computedInnerClasses: ReturnType<typeof computedInnerClasses>
  computedStyle: ReturnType<typeof computedStyle>
}

export type ISwitchRenderlessParamUtils = ISharedRenderlessParamUtils<ISwitchConstants>
