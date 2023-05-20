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

export const initUser = ({ api, props, state }) => (value) => {
  if (!value) {
    state.user = value
    return
  }

  api.getUsers(value).then((info) => {
    // 按value排序
    info.sort((a, b) => {
      return value.indexOf(a[state.valueField] + '') > value.indexOf(b[state.valueField] + '') ? 1 : -1
    })

    const list = info.map((user) => {
      return user[state.valueField]
    })

    state.options = info
    state.user = props.multiple ? list : list[0]
    props.cache && api.cacheUser(info)
  })
}

export const showCard = ({ api, service, state }) => (user) => {
  state.spinner = true
  state.expand = false

  service.fetchUser(user.employeeNumber).then((data) => {
    state.data = data
    state.spinner = false
  })

  api.getUserImageUrl(user.employeeNumber).then((url) => {
    state.imgUrl = url
  })
}

export const showDetail = (state) => () => {
  state.expand = !state.expand
}

export const computedTextField = ({ service, props }) => () => props.textField || service.textField || 'userCN'

export const computedValueField = ({ service, props }) => () => props.valueField || service.valueField || 'userId'
