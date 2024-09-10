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
import type { ISearchRenderlessParams, ISearchValue } from '@/types'
import { on, off } from '../common/deps/dom'
import PopupManager from '../common/deps/popup-manager'
import { isObject, typeOf } from '../common/type'

export const emitInput =
  ({ emit }: Pick<ISearchRenderlessParams, 'emit'>) =>
  (...args: [string, ISearchValue]) => {
    emit('update:modelValue', ...args)
    emit('input', ...args)
  }

// change跟tinyInput组件的change是同步的，所以此处不建议同步aui
export const handleChange =
  ({ emit, state }: Pick<ISearchRenderlessParams, 'emit' | 'state'>) =>
  (event: Event) => {
    const value = event.target.value
    emit('change', state.searchValue, value)
  }

export const handleInput =
  ({ api, props, state }: Pick<ISearchRenderlessParams, 'api' | 'state' | 'props'>) =>
  (event: Event) => {
    const value = event.target ? event.target.value : event

    api.emitInput(value, state.searchValue)
  }

export const showSelector =
  ({ vm, state }: Pick<ISearchRenderlessParams, 'vm' | 'state'>) =>
  () => {
    vm.$refs.selector.style.zIndex = PopupManager.nextZIndex()
    state.show = true
  }

export const changeKey =
  ({ emit, state }: Pick<ISearchRenderlessParams, 'emit' | 'state'>) =>
  (key: ISearchValue) => {
    state.searchValue = key
    state.show = false

    emit('select', key)
  }

export const searchClick =
  ({ emit, props, state }: Pick<ISearchRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (event: Event) => {
    event.preventDefault()
    if (props.mini && state.collapse) {
      state.collapse = false
    } else {
      emit('search', state.searchValue, state.currentValue)
    }
  }

export const searchEnterKey =
  ({ api, props, vm, nextTick }: Pick<ISearchRenderlessParams, 'api' | 'props' | 'vm' | 'nextTick'>) =>
  (event: Event) => {
    if (props.isEnterSearch) {
      api.searchClick(event)
      nextTick(() => vm.$refs.input.blur())
    }
  }

export const clickOutside =
  ({ parent, props, state }: Pick<ISearchRenderlessParams, 'parent' | 'props' | 'state'>) =>
  (event: Event) => {
    if (!parent.$el.contains(event.target)) {
      state.show = false
      props.mini && !state.currentValue && (state.collapse = true)
    }
  }

export const setDefaultType = (searchTypes: ISearchValue[], typeValue: ISearchValue): ISearchValue => {
  if (typeValue && searchTypes.includes(typeValue)) {
    return typeValue
  }

  let type = {} as ISearchValue

  for (let i = 0, len = searchTypes.length; i < len; i++) {
    if (
      isObject(searchTypes[i]) &&
      typeOf(searchTypes[i].value) !== 'undefined' &&
      typeOf(searchTypes[i].text) !== 'undefined'
    ) {
      type = searchTypes[i]
      break
    }
  }

  return type
}

export const formatSearchTypes = (searchTypes: ISearchValue[]): ISearchValue[] => {
  const types = [] as ISearchValue[]

  for (let i = 0, len = searchTypes.length; i < len; i++) {
    if (
      isObject(searchTypes[i]) &&
      typeOf(searchTypes[i].value) !== 'undefined' &&
      typeOf(searchTypes[i].text) !== 'undefined'
    ) {
      types.push(searchTypes[i])
    }
  }

  return types
}

/* istanbul ignore next */
export const mounted =
  ({ api }: Pick<ISearchRenderlessParams, 'api'>) =>
  () => {
    on(document.body, 'click', api.clickOutside)
  }

/* istanbul ignore next */
export const beforeDestroy =
  ({ api }: Pick<ISearchRenderlessParams, 'api'>) =>
  () => {
    off(document.body, 'click', api.clickOutside)
  }

export const clear =
  ({ api, emit, vm, state }: Pick<ISearchRenderlessParams, 'api' | 'emit' | 'vm' | 'state'>) =>
  (event: Event) => {
    event.preventDefault()
    state.currentValue = ''
    vm.$refs.input.focus()
    state.focus = true

    // 应先更新modelValue的值，才能触发change事件。所以不同步aui
    api.emitInput('', state.searchValue)
    emit('change', [], '')
    emit('clear')
  }
