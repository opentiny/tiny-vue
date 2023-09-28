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

export const setSheetStyle =
  ({ state, props }) =>
  () => {
    if (props.contentPosition) {
      // 展示在视图中间
      state.sheetMaskStyle = {
        'position': 'absolute'
      }
      state.sheetContentStyle = {
        'position': 'absolute',
        'max-height': props.height
      }
    } else {
      // 固定在页面底部
      state.sheetMaskStyle = {
        'position': 'fixed'
      }
      state.sheetContentStyle = {
        'position': 'fixed',
        'max-height': props.height
      }
    }
    // 内容区支持自定义主题
    state.contentStyle = props.contentStyle ? props.contentStyle : ''
  }

export const initScrollMenu =
  ({ state, nextTick, refs, BScroll }) =>
  () => {
    nextTick(() => {
      const { scrollMenu } = refs
      if (!state.scroll) {
        state.scroll = new BScroll(scrollMenu, {
          probeType: 3,
          tap: 'tap'
        })
      } else {
        state.scroll.refresh()
      }
    })
  }

export const visibleHandle =
  ({ emit, state }) =>
  () => {
    state.scroll = null
    emit('update:visible', false)
    emit('close', false)
  }

export const watchVisible =
  ({ emit, props, state }) =>
  (value) => {
    state.active = props.modelValue

    setTimeout(() => {
      value ? (state.toggle = true) : (state.toggle = false)
    }, 0)

    emit('update:visible', value)
  }

export const menuHandle =
  ({ emit, state }) =>
  (item) => {
    state.active = item.id
    state.scroll = null
    emit('update:visible', false)
    emit('update:modelValue', item.id)
    emit('click', item)
  }

export const close =
  ({ emit, vm }) =>
  () => {
    vm.$refs.drawer.close()

    emit('close', false)
  }

export const hide = (emit) => () => {
  emit('hide', false)
  emit('update:visible', false)
}

export const selectOption =
  ({ emit, props }) =>
  (option) => {
    const { valueField } = props

    emit('update:visible', false)
    emit('update:modelValue', option[valueField])
    emit('click', option)
  }

export const confirm =
  ({ emit, state }) =>
  () => {
    emit('confirm', state)
    emit('update:visible', false)
  }

export const actionSelectOption =
  ({ emit }) =>
  (option, index) => {
    emit('update:visible', false)
    emit('click', option, index)
  }
