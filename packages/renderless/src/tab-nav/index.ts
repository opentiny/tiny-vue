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
import { ITabNavRenderlessParams } from '@/types'
import { KEY_CODE, POSITION } from '../common'
import { capitalize } from '../common/string'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'
import { on, off } from '../common/deps/dom'

export const computedNavStyle = (state: ITabNavRenderlessParams['state']): { transform: string } => {
  const dir = ~[POSITION.Top, POSITION.Bottom].indexOf(state.rootTabs.position) ? 'X' : 'Y'

  if (state.mode === 'mobile') {
    return {
      transform: `translate${dir}(${state.lineOffset}px) translate${dir}(-50%)`
    }
  } else {
    return {
      transform: `translate${dir}(-${state.navOffset}px)`
    }
  }
}

export const scrollIntoView =
  ({ parent, refs, state }: Pick<ITabNavRenderlessParams, 'parent' | 'refs' | 'state'>) =>
  () => {
    if (!state.scrollable) {
      return
    }

    const nav = refs.nav
    const activeTab = parent.$el.querySelector('.is-active') as HTMLElement

    if (!activeTab) {
      return
    }

    const to = activeTab.offsetLeft - (nav.offsetWidth - activeTab.offsetWidth) / 2
    const from = nav.scrollLeft

    if (state.mode === 'mobile') {
      nav.scrollLeft += to - from
      state.lineOffset = activeTab.offsetLeft + activeTab.offsetWidth / 2
    }
  }

export const computedSizeName = (state: ITabNavRenderlessParams['state']): 'width' | 'height' =>
  ~[POSITION.Top, POSITION.Bottom].indexOf(state.rootTabs.position) ? 'width' : 'height'

/* istanbul ignore next */
export const updated =
  ({ api, refs, state }: Pick<ITabNavRenderlessParams, 'api' | 'refs' | 'state'>) =>
  () => {
    if (!refs.nav || state.dragging) {
      return
    }

    let navSize = refs.nav[`offset${capitalize(state.sizeName)}`] // taList 列表容器

    if (state.mode === 'mobile') {
      Array.prototype.forEach.call(refs.nav.children, (item) => {
        if (item.classList && item.classList.contains('tiny-mobile-tabs__item')) {
          navSize += item.offsetWidth
        }

        if (item.classList && item.classList.contains('is-active')) {
          const line = item.querySelector('.tiny-mobile-tabs__name')

          state.isActive = true
          state.lineOffset = item.offsetLeft + item.offsetWidth / 2
        }
      })
    }

    const containerSize = refs.navScroll[`offset${capitalize(state.sizeName)}`] // 父容器宽度
    const currentOffset = state.navOffset

    if (containerSize < navSize) {
      const currentOffset = state.navOffset

      if (!state.scrollable) {
        state.scrollable = {
          prev: currentOffset,
          next: currentOffset + containerSize < navSize
        }
      }

      if (navSize - currentOffset < containerSize) {
        state.navOffset = navSize - containerSize
      }
    } else {
      state.scrollable = false

      if (currentOffset > 0) {
        state.navOffset = 0
      }
    }

    state.isActive && api.scrollIntoView()

    if (refs.tabBar) {
      // active-bar动画滚动
      refs.tabBar.state.barStyle = refs.tabBar.computedBarStyle(refs.tabBar, state)
    } else {
      const line = refs.nav.querySelector('tiny-mobile-tabs__line')
      line && line.style && (line.style.transform = api.computedNavStyle(state).transform)
    }
  }

export const mounted = ({ api, parent }: Pick<ITabNavRenderlessParams, 'api' | 'parent'>) => {
  const el = parent.$refs.nav.$el

  /* istanbul ignore next */
  addResizeListener(el, api.updated)
  on(document, 'visibilitychange', api.visibilityChangeHandler)
  on(window, 'blur', api.windowBlurHandler)
  on(window, 'focus', api.windowFocusHandler)

  api.scrollToActiveTab()
  api.scrollIntoView()
  api.sortableEvent()
}

export const beforeUnmount = ({ api, parent }: Pick<ITabNavRenderlessParams, 'api' | 'parent'>) => {
  const el = parent.$refs.nav && parent.$refs.nav.$el

  /* istanbul ignore next */
  if (el && api.updated) {
    removeResizeListener(el, api.updated)
  }

  off(document, 'visibilitychange', api.visibilityChangeHandler)
  off(window, 'blur', api.windowBlurHandler)
  off(window, 'focus', api.windowFocusHandler)
}

export const visibilityChangeHandler = (state: ITabNavRenderlessParams['state']) => () => {
  const visibility = document.visibilityState

  /* istanbul ignore next */
  if (visibility === 'hidden') {
    state.focusable = false
  } else if (visibility === 'visible') {
    setTimeout(() => {
      state.focusable = true
    }, 50)
  }
}

export const windowBlurHandler = (state: ITabNavRenderlessParams['state']) => () => {
  state.focusable = false
}

export const windowFocusHandler = (state: ITabNavRenderlessParams['state']) => () => {
  setTimeout(() => {
    state.focusable = true
  }, 50)
}

/* istanbul ignore next */
export const scrollToActiveTab =
  ({ parent, refs, state }: Pick<ITabNavRenderlessParams, 'parent' | 'refs' | 'state'>) =>
  () => {
    if (!state.scrollable) {
      return
    }

    const nav = refs.nav
    const activeTab = parent.$el.querySelector('.is-active')

    if (!activeTab) {
      return
    }

    const navScroll = refs.navScroll
    const activeTabBounding = activeTab.getBoundingClientRect()
    const navScrollBounding = navScroll.getBoundingClientRect()
    let maxOffset = nav.offsetWidth - navScrollBounding.width

    if (state.mode === 'mobile') {
      if (activeTabBounding.left > navScrollBounding.width) {
        maxOffset = activeTabBounding.left - navScrollBounding.width + activeTabBounding.width
      } else {
        maxOffset = activeTabBounding.width
      }
    }

    const currentOffset = state.navOffset
    let newOffset = currentOffset

    if (activeTabBounding.left < navScrollBounding.left) {
      newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left)
    }

    if (activeTabBounding.right > navScrollBounding.right) {
      newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right
    }

    newOffset = Math.max(newOffset, 0)
    state.navOffset = Math.min(newOffset, maxOffset)
  }

export const scrollPrev =
  ({ refs, state }: Pick<ITabNavRenderlessParams, 'refs' | 'state'>) =>
  () => {
    const containerSize = refs.navScroll[`offset${capitalize(state.sizeName)}`]
    const currentOffset = state.navOffset

    if (!currentOffset) {
      return
    }

    const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0

    state.navOffset = newOffset
  }

export const scrollNext =
  ({ refs, state }: Pick<ITabNavRenderlessParams, 'refs' | 'state'>) =>
  () => {
    const navSize = refs.nav[`offset${capitalize(state.sizeName)}`]
    const containerSize = refs.navScroll[`offset${capitalize(state.sizeName)}`]
    const currentOffset = state.navOffset

    if (navSize - currentOffset <= containerSize) {
      return
    }

    const newOffset =
      navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize

    state.navOffset = newOffset
  }

/* istanbul ignore next */
export const changeTab = (api: ITabNavRenderlessParams['api']) => (event: KeyboardEvent) => {
  const keyCode = event.keyCode
  let nextIndex
  let currentIndex, tabList

  if (
    ~[KEY_CODE.ArrowLeft, KEY_CODE.ArrowRight, KEY_CODE.ArrowUp, KEY_CODE.ArrowDown].indexOf(keyCode) &&
    event.currentTarget
  ) {
    const target = event.currentTarget as HTMLElement
    tabList = target.querySelectorAll('[role=tab]')
    currentIndex = Array.prototype.indexOf.call(tabList, event.target)
  } else {
    return
  }

  if (keyCode === KEY_CODE.ArrowLeft || keyCode === KEY_CODE.ArrowUp) {
    if (currentIndex === 0) {
      nextIndex = tabList.length - 1
    } else {
      nextIndex = currentIndex - 1
    }
  } else {
    if (currentIndex < tabList.length - 1) {
      nextIndex = currentIndex + 1
    } else {
      nextIndex = 0
    }
  }

  tabList[nextIndex].focus() // 改变焦点元素
  tabList[nextIndex].click() // 选中下一个tab
  api.setFocus()
}

export const setFocus = (state: ITabNavRenderlessParams['state']) => () => {
  if (state.focusable) {
    state.isFocus = true
  }
}

export const removeFocus = (state: ITabNavRenderlessParams['state']) => () => {
  state.isFocus = true
}

// pc-展示更多的功能
export const moreTabShow = (state: ITabNavRenderlessParams['state']) => () => {
  if (state.showMoreItem) {
    state.showMoreItem = false
  } else {
    state.showMoreItem = true
  }
}

// mobile-展示展开选项的功能
export const expandTabShow =
  ({ api, state }: Pick<ITabNavRenderlessParams, 'api' | 'state'>) =>
  () => {
    state.showExpandItem = !state.showExpandItem
    if (state.showExpandItem) {
      api.computedHeaderStyle()
    }
  }

export const expandTabHide = (state: ITabNavRenderlessParams['state']) => () => (state.showExpandItem = false)

export const computedHeaderStyle =
  ({ refs, state }: Pick<ITabNavRenderlessParams, 'refs' | 'state'>) =>
  () => {
    if (refs.nav) {
      state.expandHeaderStyle[state.sizeName] = refs.nav[`offset${capitalize(state.sizeName)}`] + 'px'
    }

    return state.expandHeaderStyle
  }

export const handleTabDragStart =
  ({ state, refs, emit }: Pick<ITabNavRenderlessParams, 'state' | 'refs' | 'emit'>) =>
  (event: DragEvent) => {
    state.dragging = true

    if (![POSITION.Top, POSITION.Bottom].includes(state.rootTabs.position)) {
      emit('tab-drag-start', event)
      return
    }

    const navContainer = refs.navScroll
    const nav = refs.nav

    const containerWidth = navContainer.offsetWidth
    const navWidth = nav.offsetWidth

    if (navWidth > containerWidth) {
      const navHeight = nav.offsetHeight

      navContainer.style.height = navHeight + 'px'
      nav.style.transition = 'none'
      nav.style.transform = ''
      nav.style.width = containerWidth + 'px'
      nav.style.overflowX = 'scroll'

      nav.scrollTo(state.navOffset, 0)
    }

    emit('tab-drag-start', event)
  }

export const handleTabDragEnd =
  ({ refs, state, nextTick }: Pick<ITabNavRenderlessParams, 'refs' | 'state' | 'nextTick'>) =>
  () => {
    state.dragging = false

    if (![POSITION.Top, POSITION.Bottom].includes(state.rootTabs.position)) {
      return
    }

    const nav = refs.nav

    if (nav.style.width) {
      const navOffset = nav.scrollLeft
      const navContainer = refs.navScroll

      navContainer.style.height = ''
      nav.style.width = ''
      nav.style.overflowX = ''
      state.navOffset = navOffset

      nextTick(() => {
        nav.style.transition = ''
      })
    }
  }

export const sortableEvent =
  ({
    api,
    props,
    state,
    refs,
    emit,
    markRaw
  }: Pick<ITabNavRenderlessParams, 'api' | 'props' | 'state' | 'refs' | 'emit' | 'markRaw'>) =>
  () => {
    if (!props.dropConfig || typeof props.dropConfig.plugin !== 'function') {
      return
    }

    const navSortableObj = new props.dropConfig.plugin(refs.nav, {
      sort: true,
      draggable: '.tiny-tabs__item',
      onUpdate(event) {
        emit('tab-drag-end', event)
      },
      onMove(event) {
        emit('tab-drag-over', event)
      },
      onStart(event) {
        api.handleTabDragStart(event)
      },
      onEnd(event) {
        api.handleTabDragEnd()
      }
    })

    state.navSortableObj = markRaw(navSortableObj)
  }

export const watchCurrentName =
  ({ nextTick, refs, state }: Pick<ITabNavRenderlessParams, 'nextTick' | 'refs' | 'state'>) =>
  () => {
    nextTick(() => {
      const tabBarVnode = refs.tabBar

      if (tabBarVnode) {
        tabBarVnode.state.barStyle = tabBarVnode.computedBarStyle(tabBarVnode, state)
      }
    })
  }
