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

import userPopper from '../common/deps/vue-popper'

export const toggleItem = (state) => (active, item) => {
  if (item.disabled) {
    return
  }

  if (item.type == 'sort') {
    if (!item.modelValue || item.modelValue === 'desc') {
      item.state.sort = 'asc'
      item.$emit('update:modelValue', 'asc')
      item.$emit('click', 'asc')
    } else {
      item.state.sort = 'desc'
      item.$emit('update:modelValue', 'desc')
      item.$emit('click', 'desc')
    }
  } else {
    const singleton = state.children.length === 1 && item.state.showPopup

    state.children.forEach((item, index) => {
      if (index === active && !singleton) {
        item.toggle(true)
      } else if (item.state.showPopup) {
        item.toggle(false, { immediate: true })
      }
    })
  }
}

export const updateOffset =
  ({ props, state, refs }) =>
  () => {
    if (!refs.menu) {
      return
    }

    const rect = refs.menu.getBoundingClientRect()

    if (props.direction === 'down') {
      state.offset = rect.bottom
    } else {
      state.offset = window.innerHeight - rect.top
    }
  }

export const clickOutside =
  ({ props, state }) =>
  () => {
    if (props.closeOnClickOutside && props.closeOnClickOverlay) {
      state.children.forEach((item) => {
        item.type !== 'filter' && item.toggle(false)
      })
    }
  }

export const getScroller = (el, root) => {
  const overflowScrollReg = /scroll|auto/i
  let node = el
  let getComputedStyle = window.getComputedStyle

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== root) {
    const { overflowY } = getComputedStyle(node)

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node
      }

      const { overflowY: htmlOverflowY } = getComputedStyle(node.parentNode)

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node
      }
    }

    node = node.parentNode
  }

  return root
}

export const useVuePopper = ({ api, props, hooks, instance, state }) => {
  const { inject, nextTick, onBeforeUnmount, onDeactivated, onMounted, reactive, toRefs, watch } = hooks
  const { emit, refs, slots, vm, parent } = instance
  const dropdown = inject('dropdown')

  const popper = userPopper({
    emit,
    nextTick,
    onBeforeUnmount,
    onDeactivated,
    props: {
      popperOptions: { boundariesPadding: 0, gpuAcceleration: false },
      offset: 0,
      boundariesPadding: 5,
      ...props
    },
    reactive,
    refs,
    slots,
    toRefs,
    watch
  })

  onMounted(() => {
    dropdown.popperElm = popper.popperElm.value = vm.$el
    popper.referenceElm.value = dropdown.$el
    dropdown.initDomOperation()

    if (dropdown.inheritWidth) {
      dropdown.popperElm.style.minWidth = dropdown.$el.clientWidth + 'px'
    }
  })

  onBeforeUnmount(() => {
    popper.destroyPopper('remove')
    popper.popperElm = null
    popper.referenceElm = null
  })

  api.doDestroy = popper.doDestroy
  state.size = dropdown.size
  state.showPopper = popper.showPopper.value

  parent.$on('updatePopper', () => {
    if (state.showPopper) {
      popper.updatePopper()
    }
  })

  parent.$on('visible', (value) => {
    state.showPopper = value
    popper.showPopper.value = value
  })

  watch(
    () => props.placement,
    (value) => {
      popper.currentPlacement.value = value
    }
  )
}

export const mounted =
  ({ api, parent, state }) =>
  () => {
    parent.$on('menuselectedIndex', (selectedIndex) => {
      state.selectedIndex = selectedIndex
    })
    parent.$on('menu-item-click', api.handleMenuItemClick)
    parent.$on('mouseenter-tips', (showContent, label) => {
      state.label = label
      state.showContent = showContent
    })
    parent.$on('mouseleave-tips', (showContent, label) => {
      state.label = label
      state.showContent = showContent
    })
  }

export const handleMenuItemClick =
  ({ state, dispatch }) =>
  (itemData, instance, label, showContent) => {
    state.label = label
    state.showContent = showContent

    dispatch('TinyDropdown', 'current-item-click', [itemData, instance])
  }

export const handleMouseenter =
  ({ emit }) =>
  ($event) => {
    emit('mouseenter', $event)
  }

export const handleMouseleave =
  ({ emit }) =>
  ($event) => {
    emit('mouseleave', $event)
  }
