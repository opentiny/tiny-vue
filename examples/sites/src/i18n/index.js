import { createI18n } from 'vue-i18n'
import { initI18n } from '@opentiny/vue-locale'
import { $local } from '../tools'
import zh from './zh.json'
import en from './en.json'

const messages = { enUS: en, zhCN: zh }
$local._lang = $local._lang !== 'zhCN' && $local._lang !== 'enUS' ? 'zhCN' : $local._lang
const customCreateI18n = ({ locale, messages }) =>
  createI18n({
    locale, // set locale
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
const translate = i18n.global.t
const getWord = (cn, en) => (i18n.global.locale === 'zhCN' ? cn : en)

export { i18n, translate, getWord }
