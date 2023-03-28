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

export const getUserHref = ({ api, props }) => (item) => {
  const type = item.type ? String(item.type).toLocaleLowerCase() : ''
  const value = item.value ? String(item.value).toLocaleLowerCase() : ''
  let href = ''

  if (props.isNewImMode) {
    if (type === 'im' || type === 'sip') {
      href = 'javascript:;'
    } else {
      href = `${type}:${value}`
    }

    if (type === 'im' || type === 'sip') {
      api.testUID(value)
    }
  } else {
    href = `${type}:${value}`
  }

  return xss.filterUrl(href)
}

export const getUserTitle = (item) => {
  const type = item.type ? String(item.type).toLocaleLowerCase() : ''
  const value = item.value ? String(item.value).toLocaleLowerCase() : ''
  const title = `${type}:${value}`

  return title
}

export const doUserAction = ({ api, props, state, eSpaceCtrl }) => (item) => {
  state.dataItem = item

  const type = item.type ? String(item.type).toLocaleLowerCase() : ''

  if (props.isNewImMode) {
    if (eSpaceCtrl) {
      if (state.initialized) {
        if (type === 'im') {
          api.openEspace()
        } else if (type === 'sip') {
          api.soundEspace()
        }
      } else {
        if (type === 'im' || type === 'sip') {
          api.initEspaceLink()
        }
      }
    }
  }
}

export const initEspaceLink = ({ api, props, state, eSpaceCtrl, eSpaceCtrlDisabled }) => () => {
  const flag = localStorage.getItem('eSpaceCtrl_initialized')
  const dataItem = state.dataItem
  const type = dataItem.type ? String(dataItem.type).toLocaleLowerCase() : ''

  if (Number(flag)) {
    state.initialized = true

    if (type === 'im') {
      api.openEspace()
    } else if (type === 'sip') {
      api.soundEspace()
    }
  } else if (!eSpaceCtrlDisabled) {
    const timeout = props.timeout || 3000
    const pollingInterval = props.pollingInterval || 1000
    const options = { timeout, pollingInterval }

    eSpaceCtrl.init && eSpaceCtrl.init(options)

    eSpaceCtrl.ready &&
      eSpaceCtrl.ready(() => {
        state.initialized = true

        if (type === 'im') {
          api.openEspace()
        } else if (type === 'sip') {
          api.soundEspace()
        }
      })

    eSpaceCtrl.error &&
      eSpaceCtrl.error(() => {
        state.initialized = false
      })
  }
}

export const openEspace = ({ api, state, eSpaceCtrl }) => () => {
  const dataItem = state.dataItem
  const uid = dataItem.value ? String(dataItem.value).toLocaleLowerCase() : ''

  if (uid && api.testUID(uid)) {
    eSpaceCtrl.showImDialog(uid)
  }
}

export const testUID = (uid) => {
  uid = uid ? String(uid).toLocaleLowerCase() : ''

  if (uid) {
    const employer = /^[a-z]\d+$/i
    const employee = /^[a-z]{3}\d+$/i

    if (!employer.test(uid) && !employee.test(uid)) {
      return false
    }

    return true
  }

  return false
}

export const soundEspace = ({ api, state, eSpaceCtrl }) => () => {
  const dataItem = state.dataItem
  const uid = dataItem.value ? String(dataItem.value).toLocaleLowerCase() : ''

  if (uid && api.testUID(uid)) {
    eSpaceCtrl.eSpaceCallByAccount(uid)
  }
}
