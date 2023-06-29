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

import { xss } from '../common/xss'

export const getUserHref =
  ({ api, props }) =>
  () => {
    let href = 'javascript:;'

    if (!props.isNewImMode) {
      const data = props.data
      const roleNumber = data.roleNumber ? data.roleNumber.toLocaleLowerCase() : ''

      if (roleNumber && api.testUID(roleNumber)) {
        href = `im:${roleNumber}`

        return xss.filterUrl(href)
      }
    }

    return href
  }

export const doUserAction =
  ({ api, props, state, eSpaceCtrl }) =>
  () => {
    if (props.isNewImMode) {
      if (eSpaceCtrl) {
        if (state.initialized) {
          api.openEspace()
        } else {
          api.initEspaceLink()
        }
      }
    }
  }

export const initEspaceLink =
  ({ api, props, state, eSpaceCtrl, eSpaceCtrlDisabled }) =>
  () => {
    const flag = localStorage.getItem('eSpaceCtrl_initialized')

    if (Number(flag)) {
      state.initialized = true
      api.openEspace()
    } else if (!eSpaceCtrlDisabled) {
      const timeout = props.timeout || 3000
      const pollingInterval = props.pollingInterval || 1000
      const options = { timeout, pollingInterval }

      eSpaceCtrl.init && eSpaceCtrl.init(options)
      eSpaceCtrl.ready &&
        eSpaceCtrl.ready(() => {
          state.initialized = true
          api.openEspace()
        })
      eSpaceCtrl.error &&
        eSpaceCtrl.error(() => {
          state.initialized = false
        })
    }
  }

export const openEspace =
  ({ api, props, eSpaceCtrl }) =>
  () => {
    const data = props.data
    const roleNumber = data.roleNumber ? data.roleNumber.toLocaleLowerCase() : ''

    if (roleNumber && api.testUID(roleNumber)) {
      eSpaceCtrl.showImDialog(roleNumber)
    }
  }
