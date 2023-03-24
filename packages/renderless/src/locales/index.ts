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

export const getLocales = ({ api, service, state }) => () => {
  Promise.all([service.getLocale(), service.getCurrentLocale()]).then(([locales, current]) => {
    state.locales = locales || ['zhCN']
    state.current = (Array.isArray(current) ? current[0] : current) || 'zhCN'
    api.setText(current)
  })
}

export const setText = (state) => () => {
  const { current, locales } = state
  const len = locales.length

  state.text = len === 2 ? (locales.indexOf(current) === 0 ? locales[1] : locales[0]) : current
}

export const switchLanguage = ({ api, state, service }) => (lang) => {
  const { locales, current } = state
  const domain = service.getDomain()
  const hasMultiLocale = state.locales.length === 2

  state.current = hasMultiLocale ? (state.current = locales.indexOf(current) === 0 ? locales[1] : locales[0]) : lang

  const expires = new Date(new Date().getTime() + 3600000).toGMTString()
  const currLang = state.current.substring(0, 2) === 'zh' ? 'zh' : 'en'

  document.cookie = `lang=${currLang};expires=${expires};domain=${domain};path=/`

  api.setText()
}

export const changeLocale = ({ props, service, vnode }) => (value, oldValue) => {
  if (!value || !oldValue) {
    return
  }

  const { local, changeLang } = props
  if (typeof changeLang === 'function') {
    changeLang(value)
    return
  }

  if (local) {
    value.slice(0, 2) === 'zh' ? vnode.use(vnode.zhCN) : vnode.use(vnode.enUS)
    return
  }

  const { content = '' } = service.customized
  service.getCustomized().then((data) => {
    data = data || []
    const setting = data.filter((item) => item.settingKey === vnode.constants.GLOBAL)[0] || {}

    service.getChangeLocaleUrl(value).then((url) => {
      try {
        const settingContent = JSON.parse(setting[content])
        settingContent.lang = value
        settingContent.common.lang = value

        setting[content] = JSON.stringify(settingContent)

        service.pushCustomized(setting).then(() => {
          window.location.href = xss.filterUrl(url)
        })
      } catch (error) {
        window.location.href = xss.filterUrl(url)
      }
    })
  })
}

export const initService = ({ props, service }) => {
  const { common = {}, utils = {}, setting = {}, fetchSsoUpdate, pushCustomized } = service || {}
  const { options = {} } = setting

  const noopFnCreator = (propName) => () => {
    if (propName) {
      return Promise.reject(new Error(`[TINY Error][Locale] Prop ${propName} is not configured`))
    } else {
      return Promise.resolve(null)
    }
  }

  return {
    getLocale: props.getLocale || common.getLocale || noopFnCreator('getLocale'),
    getCurrentLocale: props.getCurrentLocale || common.getCurrentLocale || noopFnCreator('getCurrentLocale'),
    getChangeLocaleUrl: props.getChangeLocaleUrl || common.getChangeLocaleUrl || noopFnCreator('getChangeLocaleUrl'),
    fetchSsoUpdate: props.fetchSsoUpdate || fetchSsoUpdate || noopFnCreator('fetchSsoUpdate'),
    getDomain: props.getDomain || utils.getDomain || noopFnCreator('getDomain'),
    getCustomized: common.getCustomized || noopFnCreator(),
    pushCustomized: pushCustomized || noopFnCreator(),
    customized: options.Customized || {}
  }
}
