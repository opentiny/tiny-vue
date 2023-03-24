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

export const init = ({ service, state }) => () => {
  const { getUserInfo } = service

  getUserInfo().then((user) => {
    state.userName = user.userCN
  })
}

export const initService = ({ props, service }) => {
  const { base = {} } = service || {}

  const getUserInfoNoop = () => Promise.reject(new Error('[TINY Error][LogonUser] Prop getUserInfo is not configured'))

  return {
    getUserInfo: props.getUserInfo || base.getUserInfo || getUserInfoNoop
  }
}
