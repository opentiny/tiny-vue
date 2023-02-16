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
import Vue from 'vue'
import zhCN from '@opentiny/vue-locale/lang/zh-CN'
import enUS from '@opentiny/vue-locale/lang/en'
import format from '@opentiny/vue-locale/format'
import { extend } from '@opentiny/vue-renderless/common/object'

let lang = zhCN

let i18nHandler = null

const translate = (message, options, path) => {
  let paths = path.split('.')
  let current = lang
  for (let pos = 0, len = paths.length; pos < len; pos++) {
    const property = paths[pos]
    message = current[property] || ''
    if (pos === len - 1) {
      return format(message, options)
    }
    if (!message) {
      return ''
    }
    current = message
  }

  return ''
}

export function t(path, options) {
  let message = i18nHandler && i18nHandler.apply(this, arguments)
  if (message === null || message === undefined || message === path) {
    return translate(message, options, path)
  } else {
    return message
  }
}

export const use = (language) => {
  lang = language || lang
  return lang
}

export const language = () => lang.code

export const i18n = (func) => {
  i18nHandler =
    func ||
    function () {
      const vuei18n = Object.getPrototypeOf(this || Vue).$t

      if (typeof vuei18n === 'function' && vuei18n !== t) {
        return vuei18n.apply(this, arguments)
      }
    }

  return i18nHandler
}

export const initI18n = ({ VueI18n, messages = {}, i18n = {}, merge }) => {
  if (typeof merge !== 'function') {
    merge = ({ lang, i18n, messages }) => extend(true, lang, i18n.messages, messages)
  }

  const lang = { zhCN, enUS }

  if (typeof VueI18n === 'function') {
    const vueI18n = new VueI18n({
      locale: i18n.locale || 'zhCN',
      messages: merge({ lang, i18n, messages })
    })

    i18nHandler = (key, value) => vueI18n.t(key, value)

    return vueI18n
  }

  if (Vue && typeof Vue.prototype.$t !== 'function') {
    Vue.prototype.$t = t
  }

  return merge({ lang, i18n, messages })
}

export { zhCN, enUS }

export default {
  extend,
  i18n,
  initI18n,
  t,
  use,
  enUS,
  zhCN
}
