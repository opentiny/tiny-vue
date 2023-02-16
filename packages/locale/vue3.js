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
import zhCN from '@opentiny/vue-locale/lang/zh-CN'
import enUS from '@opentiny/vue-locale/lang/en'
import format from '@opentiny/vue-locale/format'
import { extend } from '@opentiny/vue-renderless/common/object'

let lang = zhCN
let i18nHandler = null

const translate = (options, path) => {
  const array = path.split('.')
  let value = null
  let current = lang
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property] || ''
    if (i === j - 1) {
      return format(value, options)
    }
    if (!value) {
      return ''
    }
    current = value
  }
  return ''
}

export function t(path, options) {
  if (i18nHandler) {
    return i18nHandler.apply(this, arguments)
  }
  return translate(options, path)
}

export const use = (l) => {
  lang = l || lang
  return lang
}

export const language = () => lang.code

export const i18n = (fn) => {
  i18nHandler = fn || t
  return i18nHandler
}

export const initI18n = ({ app, createI18n, messages = {}, i18n = {}, merge }) => {
  if (typeof merge !== 'function') {
    merge = ({ lang, i18n, messages }) => extend(true, lang, i18n.messages, messages)
  }

  const lang = {
    zhCN,
    enUS
  }

  if (typeof createI18n === 'function') {
    const vueI18n = createI18n({
      locale: i18n.locale || 'zhCN',
      messages: merge({ lang, i18n, messages })
    })

    i18nHandler = (key, value) => vueI18n.global.t(key, value)

    return vueI18n
  }

  if (app && app.config && app.config.globalProperties) {
    app.config.globalProperties.$t = t
  }

  return merge({ lang, i18n, messages })
}

export { zhCN, enUS }

export default {
  use,
  t,
  i18n,
  initI18n,
  extend,
  zhCN,
  enUS
}
