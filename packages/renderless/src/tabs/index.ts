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

export const calcPaneInstances = ({ constants, parent, state, childrenHandler }) => (isForceUpdate = false) => {
  const tabItemVNodes = parent.$slots.default

  /* istanbul ignore if */
  if (tabItemVNodes) {
    const currentPanes = []

    childrenHandler(({ vm, isLevel1 }) => {
      isLevel1 && vm.$options.componentName === constants.TAB_ITEM && currentPanes.push(vm)
    })

    const currentPaneStates = currentPanes.map((pane) => pane.state)
    const paneStates = state.panes.map((pane) => pane.state)

    let newPanes = []
    for (let i = 0; i < paneStates.length; i++) {
      const paneState = paneStates[i]
      const index = currentPaneStates.indexOf(paneState)

      if (index > -1) {
        newPanes.push(state.panes[i])
        currentPanes.splice(index, 1)

        currentPaneStates.splice(index, 1)
      }
    }

    newPanes = newPanes.concat(currentPanes)

    const panesChanged = !(newPanes.length === state.panes.length && newPanes.every((pane, index) => pane.state === state.panes[index].state))

    if (isForceUpdate || panesChanged) {
      state.panes = newPanes
    }
  } else if (state.panes.length !== 0) {
    state.panes = []
  }
}

/* istanbul ignore */
export const calcMorePanes = ({ parent, props, state }) => () => {
  if (!props.showMoreTabs) {
    return
  }

  const el = parent.$el
  const tabs = el.querySelectorAll('.tiny-tabs__item')

  if (tabs && tabs.length) {
    const tabsHeaderWidth = el.querySelector('.tiny-tabs__nav-scroll').clientWidth + 15
    let tabsAllWidth = 0

    for (let i = 0, length = tabs.length; i < length; i++) {
      const width = tabs[i].offsetWidth

      tabsAllWidth += width

      if (tabsAllWidth > tabsHeaderWidth) {
        state.showPanesCount = i
        break
      }
    }
  }
}

export const calcExpandPanes = ({ parent, props, state }) => () => {
  if (!props.showExpandTabs) {
    return
  }
  const el = parent.$el
  const tabsHeader = el.querySelector('.tiny-mobile-tabs__header')

  if (tabsHeader) {
    state.expandPanesWidth = tabsHeader.clientWidth
  }
}

export const handleTabClick = ({ api, emit, props, refs }) => (pane, tabName, event) => {
  if (pane.disabled) {
    return
  }

  api.setCurrentName(tabName)

  emit('click', pane, event)

  if (props.showExpandTabs) {
    refs.nav && refs.nav.expandTabHide()
  }
}

export const handleTabRemove = (emit) => (pane, event) => {
  if (pane.disabled) {
    return
  }

  event.stopPropagation()

  emit('edit', pane.name, 'remove')
  emit('close', pane.name)
}

export const handleTabAdd = (emit) => () => {
  emit('edit', null, 'add')
  emit('add')
}

export const setCurrentName = ({ api, props, refs, state }) => (value) => {
  api.changeDirection(state.currentName)

  if (state.currentName !== value && props.beforeLeave) {
    const before = props.beforeLeave(value, state.currentName)

    if (before && before.then) {
      before.then(() => {
        api.changeCurrentName(value)
        refs.nav && refs.nav.removeFocus(value)
      })
    } else if (before !== false) {
      api.changeCurrentName(value)
    }
  } else {
    api.changeCurrentName(value)
  }
}

export const changeCurrentName = ({ emit, state }) => (value) => {
  state.currentName = value
  emit('update:modelValue', value)
}

export const created = ({ api, parent, state }) => () => {
  if (!state.currentName) {
    state.currentIndex = 0
    api.setCurrentName('0')
  }

  api.changeDirection(state.currentName || '0')

  parent.$on('tab-nav-update', api.calcPaneInstances.bind(null, true))
}

export const changeDirection = ({ props, state }) => (currentName) => {
  state.panes.forEach((item, index) => {
    if (item.state.paneName === currentName && state.currentIndex !== index) {
      const isTopOrBottom = ~['top', 'bottom'].indexOf(props.position)
      const isPrev = state.currentIndex < index

      state.direction = isTopOrBottom ? (isPrev ? 'right' : 'left') : isPrev ? 'bottom' : 'top'
      state.currentIndex = index
    }
  })
}

export const handleTabDragStart = ({ emit }) => (event) => {
  emit('tab-drag-start', event)
}

export const handleTabDragOver = ({ emit }) => (event) => {
  emit('tab-drag-over', event)
}

export const handleTabDragEnd = ({ state, emit }) => (event) => {
  const { oldDraggableIndex, newDraggableIndex } = event
  const panel = state.panes.splice(oldDraggableIndex, 1)[0]
  state.panes.splice(newDraggableIndex, 0, panel)

  emit('tab-drag-end', event)
}
