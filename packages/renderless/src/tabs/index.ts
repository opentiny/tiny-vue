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
import type { ITabsRenderlessParams, ITabsPane, ITabsCustomEvent, ITabsPaneVm } from '@/types'

export const calcPaneInstances =
  ({
    constants,
    parent,
    state,
    childrenHandler
  }: Pick<ITabsRenderlessParams, 'constants' | 'parent' | 'state' | 'childrenHandler'>) =>
  (isForceUpdate = false) => {
    const tabItemVNodes = parent.$slots.default

    /* istanbul ignore if */
    if (tabItemVNodes) {
      // 差异性需要特别处理：用来确定tab-item的顺序，防止vue3的currentPanes中vm顺序报错
      const orderPanes = []
      tabItemVNodes().forEach((vnode) => {
        if (Array.isArray(vnode.children)) {
          vnode.children.forEach((child) => {
            orderPanes.push(child.props?.name)
          })
        } else {
          orderPanes.push(vnode.props?.name)
        }
      })
      const currentPanes = [] as ITabsPaneVm[]

      childrenHandler(({ vm, isLevel1 }) => {
        if (isLevel1 && vm.$options.componentName === constants.TAB_ITEM) {
          const index = orderPanes.findIndex((name) => name === vm.name)
          index > -1 ? (currentPanes[index] = vm) : currentPanes.push(vm)
        }
      })

      const currentPaneStates = currentPanes.map((pane) => pane.state)
      const paneStates = state.panes.map((pane) => pane.state)

      let newPanes = [] as ITabsPaneVm[]
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

      const panesChanged = !(
        newPanes.length === state.panes.length &&
        newPanes.every((pane, index) => pane.state === state.panes[index].state)
      )

      if (isForceUpdate || panesChanged) {
        state.panes = newPanes
      }
    } else if (state.panes.length !== 0) {
      state.panes = []
    }
  }

/* istanbul ignore */
export const calcMorePanes =
  ({ parent, props, state, refs }: Pick<ITabsRenderlessParams, 'parent' | 'props' | 'state' | 'refs'>) =>
  () => {
    if (!props.showMoreTabs) {
      return
    }

    const el = parent.$el
    const tabs = el.querySelectorAll('.tiny-tabs__item')
    const tabNavRefs = refs.nav.$refs

    // 此处不同步aui。新规范适配
    if (props.moreShowAll) {
      state.showPanesCount = 0
      return
    }

    if (tabs && tabs.length) {
      let tabsAllWidth = 0
      for (let i = 0; i < tabs.length; i++) {
        const tabItem = tabs[i] as HTMLElement
        // 遮住元素一半则隐藏
        tabsAllWidth = tabItem.offsetLeft + tabItem.offsetWidth / 2
        const tabsHeaderWidth = tabNavRefs.navScroll.offsetWidth
        const currentName = Number(state.currentName || 0)
        if (tabsAllWidth > tabsHeaderWidth && currentName >= 0) {
          if (currentName >= i + 1) {
            state.showPanesCount = currentName - 0
          } else {
            state.showPanesCount = i
          }
          break
        }
      }
    }
  }

export const calcExpandPanes =
  ({ parent, props, state }: Pick<ITabsRenderlessParams, 'parent' | 'props' | 'state'>) =>
  () => {
    if (!props.showExpandTabs) {
      return
    }
    const el = parent.$el
    const tabsHeader = el.querySelector('.tiny-mobile-tabs__header')

    if (tabsHeader) {
      state.expandPanesWidth = tabsHeader.clientWidth
    }
  }

export const handleTabClick =
  ({ api, emit, props, refs }: Pick<ITabsRenderlessParams, 'api' | 'emit' | 'props' | 'refs'>) =>
  (pane: ITabsPane, tabName: string, event: Event) => {
    if (pane.disabled) {
      return
    }

    api.setCurrentName(tabName)

    emit('click', pane, event)

    if (props.showExpandTabs) {
      refs.nav && refs.nav.expandTabHide()
    }
  }

export const handleTabRemove =
  ({ emit, props }: Pick<ITabsRenderlessParams, 'emit' | 'props'>) =>
  (pane: ITabsPane, event: Event) => {
    if (pane.disabled) {
      return
    }

    event.stopPropagation()

    const emitEvent = () => {
      emit('edit', pane.name, 'remove')
      emit('close', pane.name)
    }

    if (typeof props.beforeClose === 'function') {
      const beforeCloseResult = props.beforeClose(pane.name)

      if (beforeCloseResult && beforeCloseResult.then) {
        beforeCloseResult.then((res) => res && emitEvent())
      } else {
        beforeCloseResult && emitEvent()
      }
    } else {
      emitEvent()
    }
  }

export const handleTabAdd = (emit: ITabsRenderlessParams['emit']) => () => {
  emit('edit', null, 'add')
  emit('add')
}

export const setCurrentName =
  ({ api, props, refs, state }: Pick<ITabsRenderlessParams, 'api' | 'props' | 'refs' | 'state'>) =>
  (value: string) => {
    api.changeDirection(state.currentName)

    if (state.currentName !== value && props.beforeLeave) {
      const before = props.beforeLeave(value, state.currentName)

      if (before && before.then) {
        before
          .then(() => {
            api.changeCurrentName(value)
            refs.nav && refs.nav.removeFocus(value)
          })
          .catch(() => null)
      } else if (before !== false) {
        api.changeCurrentName(value)
      }
    } else {
      api.changeCurrentName(value)
    }
  }

export const changeCurrentName =
  ({ emit, state }: Pick<ITabsRenderlessParams, 'emit' | 'state'>) =>
  (value: string) => {
    state.currentName = value
    emit('update:modelValue', value)
  }

export const created =
  ({ api, parent, state }: Pick<ITabsRenderlessParams, 'api' | 'parent' | 'state'>) =>
  () => {
    api.changeDirection(state.currentName)

    parent.$on('tab-nav-update', api.calcPaneInstances.bind(null, true))
  }

export const changeDirection =
  ({ props, state }: Pick<ITabsRenderlessParams, 'props' | 'state'>) =>
  (currentName: string) => {
    const panes = state.panes as ITabsPaneVm[]
    panes.forEach((item, index) => {
      if (item.state.paneName === currentName && state.currentIndex !== index) {
        const isTopOrBottom = ~['top', 'bottom'].indexOf(props.position)
        const isPrev = state.currentIndex < index

        state.direction = isTopOrBottom ? (isPrev ? 'right' : 'left') : isPrev ? 'bottom' : 'top'
        state.currentIndex = index
      }
    })
  }

export const handleTabDragStart =
  ({ emit }: Pick<ITabsRenderlessParams, 'emit'>) =>
  (event: ITabsCustomEvent) => {
    emit('tab-drag-start', event)
  }

export const handleTabDragOver =
  ({ emit }: Pick<ITabsRenderlessParams, 'emit'>) =>
  (event: ITabsCustomEvent) => {
    emit('tab-drag-over', event)
  }

export const handleTabDragEnd =
  ({ state, emit }: Pick<ITabsRenderlessParams, 'state' | 'emit'>) =>
  (event: ITabsCustomEvent) => {
    const { oldDraggableIndex, newDraggableIndex } = event
    const panel = state.panes.splice(oldDraggableIndex, 1)[0]
    state.panes.splice(newDraggableIndex, 0, panel)

    emit('tab-drag-end', event)
  }
