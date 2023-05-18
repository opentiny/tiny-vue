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

import { isEmptyObject, isObject } from '../common/type'
import PopupManager from '../common/deps/popup-manager'
import { mapTree } from '../grid/static'
import { transformTreeData } from '../common/array'
import { on, off } from '../common/deps/dom'
import { xss } from '../common/xss.js'

const { nextZIndex } = PopupManager

export const computedIsShowMore = ({ props, state }) => () => !/^(retract|fixed|hidden)$/.test(props.overflow) && state.more && state.more.length

export const computedPopClass = (state) => () => (!state.showMore && state.subMenus && state.subMenus.length === 1 ? 'single' : '')

export const computedSubMenus = (state) => () => {
  let arr = state.subMenu

  if (state.subMenu && !isEmptyObject(state.subMenu)) {
    if (!state.subMenu.map((item) => item.children && !isEmptyObject(item.children)).reduce((pre, cur) => pre || cur)) {
      arr = [{ children: state.subMenu }]
    }
  }

  return arr
}

export const computedMenuStyle = ({ props, state }) => () => {
  let result = {
    maxWidth: `${state.width}px`
  }

  if (props.overflow === 'retract') {
    result.width = '0px'
  }

  return result
}

export const computedPopStyle = (state) => () => ({
  top: `${state.popMenuTop}px`
})

export const watchWidth = ({ api, nextTick }) => () => nextTick(() => api.classify())

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

export const initData = ({ fetchMenuData, fields, props, state }) => () => {
  const { textField = 'title', urlField = 'url', key = 'id' } = fields || {}
  const { parentKey, data } = props
  const isFullUrl = (url) => /^(https?:\/\/|\/\/)[\s\S]+$/.test(url)

  const buildData = (item) => {
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

  if (isObject(menuData) && menuData.then) {
    menuData.then((data) => {
      state.data = mapTree(props.parentKey ? transformTreeData(data, key, props.parentKey) : data, buildData)
    })

    return
  }

  if (!menuData) {
    state.data = []
    return
  }

  let arr = []

  if (menuData && menuData.length) {
    let getMenuData = new CloneObject(menuData, props).data

    arr = typeof getMenuData === 'object' && Array.isArray(getMenuData) ? getMenuData : [getMenuData]
  }

  state.data = mapTree(parentKey ? transformTreeData(arr, key, parentKey) : arr, buildData)
}

export const mounted = ({ api, props, router, route, state }) => () => {
  api.calcWidth()

  on(window, 'resize', api.calcWidth)

  if (router) {
    state.afterEach = () => {
      api.setActiveMenu(api.getSelectedIndex(route.path))
    }

    router.afterEach(state.afterEach)
  }

  props.data && props.data.length && route && api.setActiveMenu(api.getSelectedIndex(route.path))
}

export const unMounted = ({ api, state, router }) => () => {
  if (router && router.afterHooks) {
    const index = router.afterHooks.indexOf(state.afterEach)

    router.afterHooks.splice(index, 1)
  }

  state.afterEach = null
  off(window, 'resize', api.calcWidth)
}

export const getSelectedIndex = (state) => (path) => {
  let length = state.data.length
  let index = -1

  if (path !== '/') {
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

export const showSetting = ({ parent, state }) => () => {
  state.isShowSetting = true

  const setting = parent.$el.querySelector('.more-setting')

  setting.style.zIndex = nextZIndex()
}

export const willHideSetting = (state) => () => (state.isShowSetting = false)

export const showSubMenu = ({ api, nextTick, parent, state }) => (list, { more, index }, event) => {
  if (list || more) {
    state.subMenu !== list ? api.hideSubMenu() : api.stopHideSubMenu()
    state.showMore = !!more
    state.subMenu = list
    state.showPopmenu = true

    nextTick(() => {
      const popmenu = parent.$el.querySelector('.popmenu')

      if (popmenu) {
        popmenu.style.zIndex = nextZIndex()

        if (popmenu.classList.contains('single') && event) {
          popmenu.style.left = `${event.target.offsetLeft}px`
        } else {
          popmenu.style.left = 0
        }

        popmenu.style.height = 'auto'
        popmenu.style.display = 'block'
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

export const hideSubMenu = ({ api, parent, state }) => () => {
  api.stopHideSubMenu()
  state.showMore = false
  state.showPopmenu = false
  state.activeIndex = -1
  state.subActiveIndex = -1

  const popmenu = parent.$el.querySelector('.popmenu')

  popmenu.style.height = 'auto'
  popmenu.style.display = 'none'
}

export const willHideSubMenu = ({ api, state }) => () => {
  api.stopHideSubMenu()

  state.timer = setTimeout(() => {
    api.hideSubMenu()
  }, 20)
}

export const stopHideSubMenu = (state) => () => {
  clearTimeout(state.timer)
}

export const setSubMenu = (state) => (value, index) => {
  state.subActiveIndex = index
  state.subMenu = value
}

export const isHide = ({ parent, state }) => (event) => !state.width || event.offsetTop >= parent.$el.offsetHeight

export const hidePopmenu = (api) => (item) => {
  if (item.url || item.route) {
    api.setActiveMenu(api.getSelectedIndex(item.url || item.route))
    api.hideSubMenu()
  }
}

export const clickMenu = ({ api, props }) => (item, index) => {
  if (item.url || item.route) {
    if (props.beforeSkip) {
      props.beforeSkip(item) && api.skip(item, true)
    } else {
      api.skip(item)
    }
  }

  index !== undefined && api.setActiveMenu(index)

  api.hidePopmenu(item)
}

export const skip = ({ api, router, fields }) => (item, flag = false) => {
  if (item.isFullUrl) {
    const { urlField = 'url' } = fields || {}
    const router = item[urlField] || item.route

    return (window.open(xss.filterUrl(router)).opener = null)
  }

  const address = !item.route || !flag ? api.getUrl(item).replace(/^#/, '') : item.route.replace(/^\/+/, '/').replace('#/', '')

  if (address) {
    return router.push(address)
  } else {
    return ''
  }
}

export const getPoint = ({ api, parent }) => () => {
  const items = parent.$el.querySelectorAll('.menu>li')
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

export const classify = ({ api, props, state }) => () => {
  const isRetractOrFixed = /^(retract|fixed)$/.test(props.overflow)
  const menuCount = isRetractOrFixed ? 0 : props.overflow === 'hidden' ? props.data.length : api.getPoint()

  state.more = state.data.slice(menuCount)
}

export const calcWidth = ({ parent, props, state }) => () => {
  let el = parent.$el
  let logoWidth = parent.$slots.logo ? el.querySelector('.slot-logo').offsetWidth : 0
  let toolbarWidth = parent.$slots.toolbar ? el.querySelector('.slot-toolbar').offsetWidth : 0
  let menuWidth = el.offsetWidth
  let width = props.overflow === 'retract' ? 0 : menuWidth - toolbarWidth - logoWidth

  width = width - 120 - (toolbarWidth ? 50 : 10) - (logoWidth ? 100 : 0)
  state.width = width < 200 ? 0 : width
  state.popMenuTop = el.offsetHeight
}

export const getTag = (props) => (item) => (item.url && 'a') || (item.route && (!props.beforeSkip ? 'router-link' : 'a')) || 'span'

export const getUrl = () => (item) => item.url || ''

export const getRoute = (props) => (item) => (!props.beforeSkip ? `/${item.route || ''}`.replace(/^\/+/, '/').replace('#/', '') : '')

export const setActiveMenu = (state) => (index) => (state.selectedIndex = typeof index !== 'undefined' ? index : -1)

export const initService = ({ props, service }) => {
  const fetchMenuData = () => Promise.reject(new Error('[TINY Error][NavMenu] Prop fetchMenuData is not configured'))

  const { base = {}, setting = {} } = service || {}
  const { options = {} } = setting

  return {
    fetchMenuData: props.fetchMenuData || base.getMenuDataSync || fetchMenuData,
    fields: props.fields || options.NavMenu
  }
}
