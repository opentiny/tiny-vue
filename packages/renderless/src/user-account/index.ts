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
  const { getUserInfo, getUserImageUrl, getLangData } = service

  getLangData().then((langData) => {
    getUserInfo().then((user) => {
      getUserImageUrl(user.employeeNumber).then((url) => {
        const { locale = 'zhCN' } = langData
        const { displayNameCn, displayNameEn, userCN } = user
        const displayName = locale === 'zhCN' ? displayNameCn || userCN : displayNameEn || userCN

        state.imgUrl = url
        state.userName = displayName
      })
    })
  })
}
