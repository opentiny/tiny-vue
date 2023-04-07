import Vue from 'vue'
import zhCN from '../lang/zh-CN'
import enUS from '../lang/en'
import format from '../format'
import { extend as _extend } from '@opentiny/vue-renderless/common/object'

let lang = zhCN

let i18nHandler = function (this: any, key, value) {
  const vuei18n = Object.getPrototypeOf(this || Vue).$t

  if (typeof vuei18n === 'function' && vuei18n !== t) {
    return vuei18n.apply(this, arguments)
  }
}

export const t = function (this: any, path, options = undefined as any) {
  let message = i18nHandler.apply(this, arguments as any)

  if (message === null || message === undefined || message === path) {
    let paths = path.split('.')
    let current = lang

    for (let pos = 0, len = paths.length; pos < len; pos++) {
      const property = paths[pos]

      message = current[property] || ''

      if (pos === len - 1) return format(message, options)

      if (!message) return ''

      current = message
    }

    return ''
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
  i18nHandler = func || i18nHandler

  return i18nHandler
}

export const extend = _extend

export const initI18n = ({ VueI18n, messages = {}, i18n = {} as any, merge }) => {
  if (typeof merge !== 'function') {
    merge = ({ lang, i18n, messages }) => extend.call(null, true, lang, i18n.messages, messages)
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

export const isVue2 = true

export const isVue3 = false

export { zhCN, enUS }

export default {
  isVue2,
  isVue3,
  extend,
  i18n,
  initI18n,
  t,
  use,
  enUS,
  zhCN
}
