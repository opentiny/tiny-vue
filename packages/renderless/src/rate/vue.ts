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

import {
  getTextStyle,
  handelKey,
  resetCurrentValue,
  setCurrentValue,
  selectValue,
  showDecimalIcon,
  getIconStyle,
  computedText,
  computedDecimalStyle,
  computedClasses,
  computedColorMap,
  computedClassMap,
  computedVoidClass,
  computedActiveColor,
  computedActiveClass
} from './index'
import { on, off } from '../common/deps/dom'

export const api = ['state', 'showDecimalIcon', 'getIconStyle', 'getTextStyle', 'selectValue', 'handelKey', 'setCurrentValue', 'resetCurrentValue']

export const useChangeValue = ({ constants, emit, props, reactive, toRefs, watch, onMounted, onUnmounted, parent }) => {
  const state = reactive({
    hoverIndex: -1,
    currentValue: props.modelValue
  })

  const api = {
    selectValue: selectValue({ emit, props, state }),
    resetCurrentValue: resetCurrentValue({ props, state })
  }

  api.setCurrentValue = setCurrentValue({
    constants,
    props,
    state,
    parent,
    api
  })

  watch(
    () => props.modelValue,
    (value) => {
      state.currentValue = value
    },
    { immediate: true }
  )

  const updateMousePostion = (event) => {
    state.mouseTarget = event.target
  }

  onMounted(() => {
    on(document, 'mousemove', updateMousePostion)
    on(document, 'mouseleave', api.resetCurrentValue)
  })

  onUnmounted(() => {
    off(document, 'mousemove', updateMousePostion)
    off(document, 'mouseleave', api.resetCurrentValue)
    state.mouseTarget = null
  })

  return {
    api,
    state: toRefs(state)
  }
}

export const renderless = (props, { computed, reactive, toRefs, watch, onMounted, onUnmounted }, { constants, emit, parent }) => {
  const api = {}
  const changeValue = useChangeValue({
    computed,
    constants,
    emit,
    props,
    reactive,
    toRefs,
    watch,
    onMounted,
    onUnmounted,
    parent
  })

  const state = reactive({
    pointerAtLeftHalf: true,
    colorMap: computed(() => api.computedColorMap(props)),
    classMap: computed(() => api.computedClassMap(props)),
    text: computed(() => api.computedText({ props, state })),
    activeClass: computed(() => api.computedActiveClass(state)),
    activeColor: computed(() => api.computedActiveColor(state)),
    classes: computed(() => api.computedClasses({ props, state })),
    decimalIconClass: computed(() => api.computedActiveClass(state)),
    voidClass: computed(() => api.computedVoidClass({ props, state })),
    decimalStyle: computed(() => api.computedDecimalStyle({ props, state })),
    ...changeValue.state
  })

  Object.assign(api, {
    state,
    computedText,
    computedClasses,
    computedClassMap,
    computedColorMap,
    computedVoidClass,
    computedDecimalStyle,
    getTextStyle: getTextStyle({ props, state }),
    handelKey: handelKey({ emit, props, state }),
    computedActiveColor: computedActiveColor(props),
    computedActiveClass: computedActiveClass(props),
    showDecimalIcon: showDecimalIcon({ props, state }),
    getIconStyle: getIconStyle({ api, props, state }),
    ...changeValue.api
  })

  return api
}
