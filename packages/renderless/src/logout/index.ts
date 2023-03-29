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

import { xss } from '@opentiny/vue-renderless/common'

export const logout = ({ service, state, props }) => () => {
  let { isMock, isLocal, redirectUrl = '', getLogoutUrl, showLogin } = service

  if (typeof props.beforeLogout === 'function') {
    if (props.beforeLogout(redirectUrl) === false) {
      return
    }
  }

  if (state.logout) {
    showLogin()
    return
  }

  const location = window.location

  if (redirectUrl) {
    const isFullPath = redirectUrl.includes('//')

    if (!isFullPath) {
      redirectUrl.indexOf('#/') === 0 || (redirectUrl = '#/' + redirectUrl)

      redirectUrl = location.protocol + '//' + location.host + location.pathname + redirectUrl
    }
  } else {
    redirectUrl = location.href
  }

  redirectUrl = xss.filterUrl(redirectUrl)

  if (!isMock || !isLocal) {
    getLogoutUrl(redirectUrl).then((url) => {
      let temp = decodeURIComponent(url)

      if (/%[a-fA-F0-9]{2}/.test(temp)) {
        temp = decodeURIComponent(temp)
      }

      location.href = xss.filterUrl(temp)
    })
  } else {
    location.href = xss.filterUrl(redirectUrl)
  }

  state.logout = true
}

export const initService = ({ props, service }) => {
  const noopFnCreator = (propName) => () => {
    if (propName) {
      return Promise.reject(new Error(`[TINY Error][Logout] Prop ${propName} is not configured`))
    } else {
      return Promise.reject(new Error('[TINY Error][Logout] This component depends on @opentiny/vue-service'))
    }
  }

  const { base = {}, common = {}, setting = {}, network = {}, ajax = {}, message = {} } = service || {}
  const { options = {}, services = {}, redirectUrl = '', local = false } = setting
  const { isMock = () => false } = network
  const { getUserInfoSync = noopFnCreator() } = base
  const { config = noopFnCreator() } = ajax
  const { subscribe = noopFnCreator(), publish = noopFnCreator() } = message

  return {
    getLogoutUrl: props.getLogoutUrl || common.getLogoutUrl || noopFnCreator('getLogoutUrl'),
    redirectUrl: props.redirectUrl || redirectUrl,
    isLocal: props.isLocal || local,
    network: props.network || network,
    isMock: props.isMock || isMock(),
    isGuestUser: props.isGuestUser || (() => getUserInfoSync().userAccount === props.guestRole),

    showLogin:
      props.showLogin ||
      (() => {
        window.document.domain = options.Domain
        const gateway = config()

        subscribe({
          topic: 'tiny.ui.closeLoginDialog',
          callback() {
            // 登陆后刷新页面
            window.location.reload()
          }
        })

        publish({
          topic: 'tiny.ui.displayLoginDialog',
          data: {
            url: gateway.getRequestUrl(services.Framework.RebuildSession)
          }
        })
      })
  }
}
