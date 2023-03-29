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

import { on, off } from '@opentiny/vue-renderless/common/deps/dom'

export const getTitle = (props) => () => {
  if (props.title) {
    return props.title
  }

  const match = props.options.filter((option) => option.value === props.modelValue)

  return match.length ? match[0].text : ''
}

export const bindScroll = ({ api, parent }) => (value) => {
  const action = value ? on : off
  action(parent.state.scroller, 'scroll', api.onScroll, true)
}

export const toggle = ({ parent, props, state }) => (show) => {
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

export const onScroll = (parent) => () => parent.updateOffset()

export const clickWrapper = (parent) => (event) => parent.$el && event.stopPropagation()

export const clickItem = ({ emit, props, state }) => (value) => {
  state.showPopup = false

  if (value !== props.modelValue) {
    emit('update:modelValue', value)
    emit('change', value)
  }
}

export const getItemStyle = ({ parent, state }) => () => ({
  zIndex: parent.zIndex,
  top: parent.direction === 'down' ? state.offset + 'px' : '',
  bottom: parent.direction !== 'down' ? state.offset + 'px' : ''
})

export const getOptionStyle = (state) => (tag, tags) => {
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

export const closed = ({ emit, state }) => () => {
  state.showWrapper = false
  emit('closed')
}

export const open = (emit) => () => emit('open')

export const opened = (emit) => () => emit('opened')

export const close = (emit) => () => emit('close')

export const tagClick = ({ emit, props }) => (key, tag, event) => {
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

export const confirm = ({ emit, props, state }) => () => {
  state.showPopup = false
  emit('confirm', props.modelValue)
}

export const reset = ({ emit, props }) => () => {
  const len = props.modelValue.length
  const array = []

  for (let i = 0; i < len; i++) {
    array.push([])
  }

  emit('update:modelValue', array)
  emit('reset', array)
}

export const clickOutside = (parent) => () => {
  if (parent.closeOnClickOutside && parent.closeOnClickOverlay) {
    parent.state.children.forEach((item) => {
      item.toggle(false)
    })
  }
}

export const handleClick = ({ props, dispatch, vm, emit }) => (event) => {
  // 此处需要手动阻止事件冒泡，如果使用@click.sotp在vue2.x下会导致在自循环组件（dropdown-item）事件绑定错乱
  event.stopPropagation()

  const data = { itemData: props.itemData, vm }

  emit('item-click', data)
  // 此处需要传递一个对象，如果是数组[param1,param2],会导致vue2和vue3的表现形式不一样
  dispatch('TinyDropdown', 'menu-item-click', data)
}
