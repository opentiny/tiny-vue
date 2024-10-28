import { createI18n } from 'vue-i18n'
import { initI18n } from '@opentiny/vue-locale'
import { $local } from '../tools'
import zh from './zh.json'
import en from './en.json'

const messages = { enUS: en, zhCN: zh }
// $local._lang = $local._lang !== 'zhCN' && $local._lang !== 'enUS' ? 'zhCN' : $local._lang
$local._lang = 'zhCN'
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
const getWord = (cn, en) => (i18n.global.locale === 'zhCN' ? cn : en)

export { i18n, i18nByKey, getWord }
