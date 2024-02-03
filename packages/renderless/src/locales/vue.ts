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

import { getLocales, setText, switchLanguage, initService, changeLocale } from './index'

export const api = ['state', 'switchLanguage', 't', 'changeLocale']

export const renderless = (props, { reactive, watch }, { t, service }, vnode) => {
  const api = {}
  const $service = initService({ props, service })

  const state = reactive({
    current: '',
    locales: [],
    visible: false,
    text: ''
  })

  Object.assign(api, {
    t,
    state,
    setText: setText(state),
    changeLocale: changeLocale({ props, service: $service, vnode }),
    switchLanguage: switchLanguage({ api, service: $service, state }),
    getLocales: getLocales({ api, service: $service, state })
  })

  api.getLocales()

  watch(() => state.current, api.changeLocale, { immediate: true })

  return api
}
