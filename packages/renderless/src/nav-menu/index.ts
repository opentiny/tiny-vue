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
  INavMenuRenderlessParams,
  INavMenuProps,
  INavMenuApi,
  INavMenuState,
  menuItemType,
  whitchSubMenuType
} from '@/types'
import { omitText } from '../common/string'
import { isEmptyObject, isObject } from '../common/type'
import PopupManager from '../common/deps/popup-manager'
import { mapTree } from '../grid/static'
import { transformTreeData } from '../common/array'
import { on, off } from '../common/deps/dom'
import { xss } from '../common/xss.js'
import { isBrowser } from '../common/browser.js'

const { nextZIndex } = PopupManager

export const computedIsShowMore =
  ({ props, state }: Pick<INavMenuRenderlessParams, 'props' | 'state'>) =>
  (): boolean | number =>
    !/^(retract|fixed|hidden)$/.test(props.overflow) && state.more && state.more.length

export const computedPopClass = (state: INavMenuState) => (): string => {
  const popClass = !state.showMore && state.subMenus && state.subMenus.length === 1 ? 'single' : ''
  return popClass + ' ' + state.menuClass
}

export const computedSubMenus = (state: INavMenuState) => (): menuItemType[] => {
  let arr: menuItemType[] = state.subMenu

  if (state.subMenu && !isEmptyObject(state.subMenu)) {
    if (!state.subMenu.map((item) => item.children && !isEmptyObject(item.children)).reduce((pre, cur) => pre || cur)) {
      arr = [{ children: state.subMenu }]
    }
  }

  return arr
}

export const computedMenuStyle =
  ({ props, state }: Pick<INavMenuRenderlessParams, 'props' | 'state'>) =>
  (): Object => {
    let result = {
      maxWidth: `${state.width}px`
    }

    if (props.overflow === 'retract') {
      result.width = '0px'
    }

    return result
  }

export const computedPopStyle = (state: INavMenuState) => (): object => ({
  top: `${state.popMenuTop}px`
})

export const watchWidth =
  ({ api, nextTick }: Pick<INavMenuRenderlessParams, 'api' | 'nextTick'>) =>
  () =>
    nextTick(() => api.classify())

class CloneObject {
  constructor(json, props) {
    this.props = props

    if (json) {
      this.data = this.getType(json)
      this.traverse(json, this.data)
    }
  }

  traverse(node, newObject) {
    if (/^(string|undefined)$/.test(typeof node) || node === null) {
      newObject = node
    } else if (Array.isArray(node)) {
      this.traverseArray(node, newObject)
    } else if (typeof node === 'object') {
      this.traverseObject(node, newObject)
    }

    return this
  }

  traverseArray(node, newObject) {
    for (let i = 0; i < node.length; i++) {
      newObject.push(this.getType(node[i]))

      if (node[i] && typeof node[i] === 'object') {
        this.traverse(node[i], newObject[i])
      }
    }
  }

  traverseObject(node, newObject) {
    Object.keys(node).forEach((key) => {
      if (/^(name|url|route|title|name|children)$/.test(key)) {
        let alias = key

        if (key === 'url') {
          if (!(this.props.prevent || this.props.allowFullUrl)) {
            alias = 'route'
          }
        }

        if (key === 'name') {
          alias = 'title'
        }

        newObject[alias] = this.getType(node[key])

        if (newObject[alias] && typeof newObject[alias] === 'object') {
          this.traverse(node[key], newObject[alias])
        }
      }
    })
  }

  getType(object) {
    let result

    if (/^(string|undefined)$/.test(typeof object) || object === null) {
      result = object
    } else if (Array.isArray(object)) {
      result = []
    } else if (typeof object === 'object') {
      result = {}
    }

    return result
  }
}

export const initData =
  ({
    fetchMenuData,
    fields,
    props,
    state
  }: Pick<INavMenuRenderlessParams, 'fetchMenuData' | 'fields' | 'props' | 'state'>) =>
  () => {
    const { textField = 'title', urlField = 'url', key = 'id' } = fields || {}
    const { parentKey, data } = props
    const isFullUrl = (url: string): boolean => /^(https?:\/\/|\/\/)[\s\S]+$/.test(url)

    const buildData = (item: menuItemType) => {
      const router = item[urlField] || item.route

      return {
        title: item[textField],
        route: router ? router.replace(/^#\/?/, '') : null,
        url: item.url,
        id: item.id,
        pid: item.pid,
        isFullUrl: props.allowFullUrl && isFullUrl(router),
        target: item.target
      }
    }

    if (data) {
      state.data = mapTree(parentKey ? transformTreeData(data, key, parentKey) : data, buildData)
      return
    }

    const menuData = props.fetchMenuData && fetchMenuData()

    if (isObject(menuData) && menuData?.then) {
      menuData.then((data) => {
        state.data = mapTree(props.parentKey ? transformTreeData(data, key, props.parentKey) : data, buildData)
      })

      return
    }

    if (!menuData) {
      state.data = []
      return
    }

    let arr: menuItemType[] = []

    if (menuData && menuData.length) {
      let getMenuData = new CloneObject(menuData, props).data

      arr = typeof getMenuData === 'object' && Array.isArray(getMenuData) ? getMenuData : [getMenuData]
    }

    state.data = mapTree(parentKey ? transformTreeData(arr, key, parentKey) : arr, buildData)
  }

export const mounted =
  ({
    api,
    props,
    router,
    route,
    state
  }: Pick<INavMenuRenderlessParams, 'api' | 'props' | 'router' | 'route' | 'state'>) =>
  (): void => {
    api.calcWidth()

    on(window, 'resize', api.calcWidth)

    if (router) {
      state.afterEach = () => {
        api.setActiveMenu(api.getSelectedIndex(router.currentRoute.path))
      }

      router.afterEach(state.afterEach)
    }

    props.data && props.data.length && route && api.setActiveMenu(api.getSelectedIndex(route.path))
  }

export const unMounted =
  ({ api, state, router }: Pick<INavMenuRenderlessParams, 'api' | 'state' | 'router'>) =>
  (): void => {
    if (router && router.afterHooks) {
      const index = router.afterHooks.indexOf(state.afterEach)

      router.afterHooks.splice(index, 1)
    }

    state.afterEach = null
    off(window, 'resize', api.calcWidth)
  }

export const getSelectedIndex =
  (state: INavMenuState) =>
  (path: string): number => {
    let length = state.data.length
    let index = -1

    if (path !== '/') {
      const queryIndex = path.indexOf('?')

      if (queryIndex !== -1) {
        path = path.slice(0, queryIndex)
      }

      path = path.replace(/^#?\//, '')

      let exp = new RegExp('("url":"#/?' + path + '"|"url":"/?' + path + '"|"route":"/?' + path + '")', 'i')

      for (let i = 0; i < length; i++) {
        if (exp.test(JSON.stringify(state.data[i]))) {
          index = i
          break
        }
      }
    }

    return index
  }

export const showSetting =
  ({ parent, state }: Pick<INavMenuRenderlessParams, 'parent' | 'state'>) =>
  (): void => {
    state.isShowSetting = true

    const setting = parent.$el.querySelector('.more-setting') as HTMLElement

    setting.style.zIndex = nextZIndex()
  }

export const willHideSetting = (state: INavMenuState) => (): boolean => (state.isShowSetting = false)

export const showSubMenu =
  ({
    api,
    nextTick,
    parent,
    state,
    vm
  }: Pick<INavMenuRenderlessParams, 'api' | 'nextTick' | 'parent' | 'state' | 'vm'>) =>
  (list: Array<menuItemType>, { more, index }: whitchSubMenuType, event: MouseEvent): void => {
    if (event) {
      api.handleTitleMouseenter(event)
    }
    state.enterMenu = true
    if (list || more) {
      state.subMenu !== list ? api.hideSubMenu() : api.stopHideSubMenu()
      state.showMore = !!more
      state.subMenu = list
      state.showPopmenu = true
      state.subItemSelectedIndex = -1
      state.subIndex = -1
      state.moreItemSelectedIndex = -1

      nextTick(() => {
        const popmenu = parent.$el.querySelector('.popmenu') as HTMLElement

        if (state.isSaaSTheme) {
          setPopmenuStyleForSaas(popmenu, vm, event, state)
        } else {
          setPopmenuStyleForAurora(popmenu, event)
        }
      })

      if (index !== undefined) {
        state.activeIndex = index
      }

      if (more && list && list.length && state.subActiveIndex === -1) {
        state.subActiveIndex = 0
      }
    } else {
      api.hideSubMenu()
    }
  }

const setPopmenuStyleForSaas = (
  popmenu: HTMLElement,
  vm: INavMenuRenderlessParams['vm'],
  event: MouseEvent,
  state: INavMenuRenderlessParams['state']
) => {
  if (!popmenu) return
  const navMenu = vm.$refs.navMenu
  const itemWidth = 216
  const margin = window.outerWidth >= 1440 ? 96 : 56
  const safeMargin = 32

  popmenu.style.zIndex = String(nextZIndex())
  popmenu.style.display = 'block'
  popmenu.style.left = '32px'

  const popmenuWidth =
    state.subMenus && state.subMenus.length
      ? state.subMenus.length * itemWidth + (state.subMenus.length - 1) * margin
      : 0

  if (event) {
    if (popmenuWidth > navMenu.offsetWidth - safeMargin * 4) {
      state.menuClass = 'display-gird'
    } else {
      state.menuClass = 'display-flex'
      if (popmenuWidth + safeMargin * 2 > navMenu.offsetWidth - (event.target as HTMLElement).offsetLeft) {
        popmenu.style.right = '32px'
        popmenu.style.left = 'unset'
      } else {
        popmenu.style.left = `${(event.target as HTMLElement).offsetLeft - 28}px`
        popmenu.style.right = 'unset'
      }
    }
  } else {
    state.menuClass = 'display-gird'
  }
}

const setPopmenuStyleForAurora = (popmenu: HTMLElement, event: MouseEvent) => {
  if (popmenu) {
    popmenu.style.zIndex = String(nextZIndex())

    if (popmenu.classList.contains('single') && event) {
      popmenu.style.left = `${(event.target as HTMLElement).offsetLeft}px`
    } else {
      popmenu.style.left = '0'
    }

    popmenu.style.height = 'auto'
    popmenu.style.display = 'block'
  }
}

export const hideSubMenu =
  ({ api, parent, state }: Pick<INavMenuRenderlessParams, 'api' | 'parent' | 'state'>) =>
  (): void => {
    api.stopHideSubMenu()
    state.showMore = false
    state.showPopmenu = false
    state.activeIndex = -1
    state.subActiveIndex = -1

    const popmenu = parent.$el.querySelector('.popmenu') as HTMLElement

    popmenu.style.height = 'auto'
    popmenu.style.display = 'none'
  }

export const willHideSubMenu =
  ({ api, state }: Pick<INavMenuRenderlessParams, 'api' | 'state'>) =>
  () => {
    api.stopHideSubMenu()
    api.handleTitleMouseleave()
    state.enterMenu = false

    state.timer = window.setTimeout(() => {
      api.hideSubMenu()
    }, 20)
  }

export const stopHideSubMenu = (state: INavMenuState) => (): void => {
  clearTimeout(state.timer)
}

export const setSubMenu =
  (state: INavMenuState) =>
  (value: Array<menuItemType>, index: number): void => {
    state.subActiveIndex = index
    state.subMenu = value
    state.enterMoreMenu = true
  }

export const leaveMoreMune = (state: INavMenuState) => (): void => {
  state.enterMoreMenu = false
}

export const isHide =
  ({ parent, state }: Pick<INavMenuRenderlessParams, 'parent' | 'state'>) =>
  (event: HTMLElement): boolean =>
    !state.width || event.offsetTop >= parent.$el.offsetHeight

export const hidePopmenu = (api: INavMenuApi) => (item: menuItemType) => {
  if (item.url || item.route) {
    api.setActiveMenu(api.getSelectedIndex(item.url || item.route))
    api.hideSubMenu()
  }
}

export const clickMenu =
  ({ api, props, state }: Pick<INavMenuRenderlessParams, 'api' | 'props' | 'state'>) =>
  (item: menuItemType, index: number, parentIndex: number): void => {
    if (index === undefined) {
      return
    }
    if (state.enterMenu) {
      state.subIndex = -1
      state.subItemSelectedIndex = -1
      api.setActiveMenu(index)
    }
    if (state.enterMoreMenu) {
      state.moreItemSelectedIndex = index
    } else {
      state.subItemSelectedIndex = index
      state.subIndex = parentIndex
    }
    if (item.url || item.route) {
      if (props.beforeSkip) {
        props.beforeSkip(item) && api.skip(item, true)
      } else {
        api.skip(item, false)
      }
      api.hidePopmenu(item)
    }
  }

export const skip =
  ({ api, router, fields }: Pick<INavMenuRenderlessParams, 'api' | 'router' | 'fields'>) =>
  (item: menuItemType, flag = false): string | null => {
    if (item.isFullUrl) {
      const { urlField = 'url' } = fields || {}
      const router = item[urlField] || item.route
      return (window.open(xss.filterUrl(router)).opener = null)
    }

    const address =
      !item.route || !flag
        ? api.getUrl(item).replace(/^#/, '')
        : `/${item.route || ''}`.replace(/^\/+/, '/').replace('#/', '')

    if (address) {
      return router.push(address)
    } else {
      return ''
    }
  }

export const getPoint =
  ({ api, parent }: Pick<INavMenuRenderlessParams, 'api' | 'parent'>) =>
  (): number => {
    if (!isBrowser) return 0
    else {
      const items = parent.$el.querySelectorAll('.menu>li') as NodeListOf<HTMLElement>
      let index = 0

      if (items) {
        index = items.length

        for (let i = 0; i < items.length; i++) {
          if (api.isHide(items[i])) {
            index = index - (items.length - i)
            break
          }
        }
      }

      return index
    }
  }

export const classify =
  ({ api, props, state }: Pick<INavMenuRenderlessParams, 'api' | 'props' | 'state'>) =>
  (): void => {
    const isRetractOrFixed = /^(retract|fixed)$/.test(props.overflow)
    const menuCount = isRetractOrFixed ? 0 : props.overflow === 'hidden' ? props.data?.length : api.getPoint()

    state.more = state.data.slice(menuCount)
  }

export const calcWidth =
  ({ parent, props, state }: Pick<INavMenuRenderlessParams, 'parent' | 'props' | 'state'>) =>
  (): void => {
    let el = parent.$el
    let logoWidth = parent.$slots.logo ? el.querySelector('.slot-logo').offsetWidth : 0
    let toolbarWidth = parent.$slots.toolbar ? el.querySelector('.slot-toolbar').offsetWidth : 0
    let menuWidth = el.offsetWidth
    let width = props.overflow === 'retract' ? 0 : menuWidth - toolbarWidth - logoWidth

    width = width - 120 - (toolbarWidth ? 50 : 10) - (logoWidth ? 100 : 0)
    state.width = width < 200 ? 0 : width
    state.popMenuTop = el.offsetHeight
  }

export const getTag =
  (props: INavMenuProps) =>
  (item: menuItemType): string =>
    (item.url && 'a') || (item.route && (!props.beforeSkip ? 'router-link' : 'a')) || 'span'

export const getUrl =
  () =>
  (item: menuItemType): string =>
    item.url || ''

export const getRoute =
  (props: INavMenuProps) =>
  (item: menuItemType): string =>
    !props.beforeSkip ? `/${item.route || ''}`.replace(/^\/+/, '/').replace('#/', '') : ''

export const setActiveMenu =
  (state: INavMenuState) =>
  (index: number): number =>
    (state.selectedIndex = typeof index !== 'undefined' ? index : -1)

export const initService = ({ props, service }: Pick<INavMenuRenderlessParams, 'props' | 'service'>): Object => {
  const fetchMenuData = () =>
    Promise.reject(
      new Error('[TINY Error][NavMenu] Prop fetchMenuData is mandatory when the framework service is not used')
    )

  const { base = {}, setting = {} } = service || {}
  const { options = {} } = setting

  return {
    fetchMenuData: props.fetchMenuData || base.getMenuDataSync || fetchMenuData,
    fields: props.fields || options.NavMenu
  }
}

export const handleTitleMouseenter =
  ({ state, vm }: Pick<INavMenuRenderlessParams, 'state' | 'vm'>) =>
  ($event: MouseEvent): void => {
    state.tooltipContent = ''
    const target = $event.target as HTMLElement
    const text = target.textContent
    const font = window.getComputedStyle(target).font
    const rect = target.getBoundingClientRect()
    const res = omitText(text, font, rect.width + 2)

    if (target && res.o) {
      const tooltip = vm.$refs.tooltip
      tooltip.state.referenceElm = target
      tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')
      tooltip.doDestroy()

      state.tooltipVisible = true
      state.tooltipContent = text

      setTimeout(tooltip.updatePopper, 20)
    }
  }

export const handleTitleMouseleave =
  ({ state }: Pick<INavMenuRenderlessParams, 'state'>) =>
  (): void => {
    state.tooltipVisible = false
  }
