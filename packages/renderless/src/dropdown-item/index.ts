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

import type {
  IDropdownItemRenderlessParams,
  IDropdownItemStyle,
  IDropdownItemTag,
  IDropdownItemOptionStyle
} from '@/types'
import { on, off } from '../common/deps/dom'

export const getTitle = (props: IDropdownItemRenderlessParams['props']) => (): string => {
  if (props.title) {
    return props.title
  }

  const match = props.options.filter((option) => option.value === props.modelValue)

  return match.length ? match[0].text : ''
}

export const bindScroll =
  ({ api, parent }: Pick<IDropdownItemRenderlessParams, 'api' | 'parent'>) =>
  (value): void => {
    const action = value ? on : off
    action(parent.state.scroller, 'scroll', api.onScroll, true)
  }

export const toggle =
  ({ parent, props, state }: Pick<IDropdownItemRenderlessParams, 'parent' | 'props' | 'state'>) =>
  (show: boolean): void => {
    if (show === state.showPopup) {
      return
    }

    state.transition = !props.options.immediate
    state.showPopup = show

    if (show) {
      parent.updateOffset()
      state.showWrapper = true
    }
  }

export const onScroll = (parent: IDropdownItemRenderlessParams['parent']) => (): void => parent.updateOffset()

export const clickWrapper =
  (parent: IDropdownItemRenderlessParams['parent']) =>
  (event: MouseEvent): void =>
    parent.$el && event.stopPropagation()

// mode为mobile时点击菜单项的方法
export const clickItem =
  ({ emit, props, state }: Pick<IDropdownItemRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (value: string): void => {
    state.showPopup = false

    if (value !== props.modelValue) {
      emit('update:modelValue', value)
      emit('change', value)
    }
  }

export const getItemStyle =
  ({ parent, state }: Pick<IDropdownItemRenderlessParams, 'parent' | 'state'>) =>
  (): IDropdownItemStyle => ({
    zIndex: parent.zIndex,
    top: parent.direction === 'down' ? state.offset + 'px' : '',
    bottom: parent.direction !== 'down' ? state.offset + 'px' : ''
  })

// mode为mobile时动态获取样式的方法
export const getOptionStyle =
  (state: IDropdownItemRenderlessParams['state']) =>
  (tag: IDropdownItemTag, tags: string | Array<number | string>): IDropdownItemOptionStyle => {
    if (tags.includes(tag.value)) {
      return {
        color: state.activeColor ? state.activeColor : '#f36f64',
        border: `1px solid ${state.activeColor ? state.activeColor : '#f36f64'}`
      }
    } else {
      return {
        color: '#333'
      }
    }
  }

export const closed =
  ({ emit, state }: Pick<IDropdownItemRenderlessParams, 'emit' | 'state'>) =>
  (): void => {
    state.showWrapper = false
    emit('closed')
  }

export const open = (emit: IDropdownItemRenderlessParams['emit']) => (): void => emit('open')

export const opened = (emit: IDropdownItemRenderlessParams['emit']) => (): void => emit('opened')

export const close = (emit: IDropdownItemRenderlessParams['emit']) => (): void => emit('close')

export const tagClick =
  ({ emit, props }: Pick<IDropdownItemRenderlessParams, 'emit' | 'props'>) =>
  (key: number, tag: IDropdownItemTag, event: MouseEvent): void => {
    event.preventDefault()
    event.stopPropagation()

    const filterValue = props.modelValue.slice()
    const value = filterValue[key]
    const index = value.indexOf(tag.value)

    if (index === -1) {
      value.push(tag.value)
    } else {
      value.splice(index, 1)
    }

    filterValue[key] = value
    emit('update:modelValue', filterValue)
  }

export const confirm =
  ({ emit, props, state }: Pick<IDropdownItemRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (): void => {
    state.showPopup = false
    emit('confirm', props.modelValue)
  }

export const reset =
  ({ emit, props }: Pick<IDropdownItemRenderlessParams, 'emit' | 'props'>) =>
  (): void => {
    const len = props.modelValue.length
    const array = []

    for (let i = 0; i < len; i++) {
      array.push([])
    }

    emit('update:modelValue', array)
    emit('reset', array)
  }

export const clickOutside = (parent: IDropdownItemRenderlessParams['parent']) => (): void => {
  if (parent.closeOnClickOutside && parent.closeOnClickOverlay) {
    parent.state.children.forEach((item) => {
      item.toggle(false)
    })
  }
}

export const handleClick =
  ({
    state,
    props,
    dispatch,
    vm,
    emit
  }: Pick<IDropdownItemRenderlessParams, 'state' | 'props' | 'dispatch' | 'vm' | 'emit'>) =>
  (event: MouseEvent): void => {
    // 此处需要手动阻止事件冒泡，如果使用@click.sotp在vue2.x下会导致在自循环组件（dropdown-item）事件绑定错乱
    event.stopPropagation()
    state.currentIndex = `${props.currentIndex}`

    const data = { itemData: props.itemData, vm, disabled: props.disabled }

    if (!props.disabled) {
      emit('item-click', data)
    }
    // 此处需要传递一个对象，如果是数组[param1,param2],会导致vue2和vue3的表现形式不一样,aui 目前还是数组形式
    dispatch('TinyDropdown', 'menu-item-click', data)
    dispatch('TinyDropdown', 'is-disabled', [props.disabled])
    dispatch('TinyDropdown', 'selected-index', [state.currentIndex])
  }

export const computedGetIcon =
  ({ constants, designConfig }: Pick<IDropdownItemRenderlessParams, 'constants' | 'designConfig'>) =>
  (name = 'leftWardArrow'): object | string => {
    return designConfig?.icons[name] || constants?.ICON_MAP[name]
  }

export const getTip = ({ props, vm }: Pick<IDropdownItemRenderlessParams, 'props' | 'vm'>): string => {
  if (props.tip && typeof props.tip === 'function') {
    return props.tip({ itemData: props.itemData, vm })
  }

  return props.tip || ''
}
