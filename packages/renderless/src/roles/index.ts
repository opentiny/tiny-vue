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

import { xss } from '../common'

export const showList = (state) => () => (state.showPopover = true)

export const show = (state) => () => (state.showIcon = false)

export const hide = (state) => () => (state.showIcon = true)

export const getRoleList =
  ({ constants, service, state }) =>
  () => {
    const envInfo = service.getEnvInfoSync() || {}
    const userInfo = envInfo.user || {}
    const validRols = userInfo.validRoles || []
    const currentRole = userInfo.currentRole || {}

    state.currentRole = currentRole.roleName
    state.currentId = currentRole.roleId

    if (validRols.length > 2) {
      validRols.filter((item) => item.roleName !== constants.AUTH || item.roleName !== constants.ANONYMOUS)
    }

    return validRols
  }

export const changeRole =
  ({ constants, emit, props, service, state }) =>
  ({ roleId }) => {
    if (state.currentId === roleId) {
      return
    }

    emit('change', roleId)

    service.getCustomized().then((data) => {
      data = data || []

      const setting = data.filter((item) => item.settingKey === constants.GLOBAL)[0] || {}
      const getRole = props.fetchRole ? props.fetchRole() : service.getChangeRoleUrl(roleId)

      getRole.then((url) => {
        const keys = Object.keys(setting)

        if (!keys.includes(constants.ROLE)) {
          setting.lastRole = roleId
          service.pushCustomized(setting).then(() => {
            window.location.href = xss.filterUrl(url)
          })
        } else {
          window.location.href = xss.filterUrl(url)
        }
      })
    })
  }

export const initService = (service, props) => {
  const { base = {}, common = {}, pushCustomized } = service || {}

  const noopFn = () => Promise.resolve(null)

  const commonNoopFn = () =>
    Promise.reject(new Error('[Tiny Error][Roles] This component depends on @opentiny/vue-service'))

  return {
    getEnvInfoSync: props.getEnvInfoSync || base.getEnvInfoSync || commonNoopFn,
    getChangeRoleUrl: props.getChangeRoleUrl || common.getChangeRoleUrl || commonNoopFn,
    getCustomized: props.getCustomized || common.getCustomized || noopFn,
    pushCustomized: props.pushCustomized || pushCustomized || noopFn
  }
}
