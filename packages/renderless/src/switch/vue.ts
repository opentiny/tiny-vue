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

import { toggle, computedWarpClasses, computedInnerClasses, computedStyle } from './index'

export const api = ['toggle', 'state']

export const renderless = (props, { computed, watch, reactive, inject }, { parent, constants, mode, emit }) => {
  const prefixCls = constants.prefixcls(mode)

  parent.tinyForm = parent.tinyForm || inject('form', null)

  const api = {
    computedInnerClasses: computedInnerClasses({ prefixCls })
  }

  const state = reactive({
    currentValue: props.modelValue,
    innerClasses: computed(() => api.computedInnerClasses()),
    wrapClasses: computed(() => api.computedWarpClasses()),
    style: computed(() => api.computedStyle()),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled),
    isDisplayOnly: computed(() => props.displayOnly || (parent.tinyForm || {}).displayOnly)
  })

  Object.assign(api, {
    state,
    computedStyle: computedStyle({ props, state }),
    computedWarpClasses: computedWarpClasses({ prefixCls, props, state }),
    toggle: toggle({ emit, props, state })
  })

  watch(
    () => props.modelValue,
    (value) => {
      state.currentValue = (typeof props.falseValue !== 'boolean' || typeof props.trueValue !== 'boolean') ? value : Boolean(value)
    },
    { immediate: true }
  )

  return api
}
