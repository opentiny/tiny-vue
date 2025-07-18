import { createI18n } from 'vue-i18n'
import { initI18n, t } from '@opentiny/vue-locale'
import { $local } from '../tools'
import zh from './zh.json'
import en from './en.json'
import esLA from './es.json'
import ptBR from './pt.json'

const messages = { enUS: { ...en }, zhCN: { ...zh }, esLA: { ...esLA }, ptBR: { ...ptBR } }

const langMap = new Map([
  ['zhCN', 'zhCN'],
  ['enUS', 'enUS'],
  ['esLA', 'esLA'],
  ['ptBR', 'ptBR']
])

$local._lang = langMap.get($local._lang) || 'zhCN'

const customCreateI18n = ({ locale, messages }) =>
  createI18n({
    locale, // set locale
    // legacy: false, // 如果要支持compositionAPI，此项必须设置为false。
    fallbackLocale: 'zhCN', // set fallback locale
    messages // set locale messages
  })
const i18n = initI18n({
  createI18n: customCreateI18n,
  i18n: {
    locale: $local._lang
  },
  messages
})
const i18nByKey = i18n.global.t
const getWord = (cn, en, es, pt) => {
  const localeMap = new Map([
    ['zhCN', cn], // 简体中文
    ['enUS', en], // 英语
    ['esLA', es], // 西班牙语
    ['ptBR', pt] // 葡萄牙语
  ])
  const currentLocale = i18n.global.locale

  return localeMap.get(currentLocale) ?? cn
}

export { i18n, i18nByKey, getWord }

export { t }
