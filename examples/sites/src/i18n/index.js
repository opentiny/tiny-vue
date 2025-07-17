import { createI18n } from 'vue-i18n'
import { initI18n, t } from '@opentiny/vue-locale'
import { $local } from '../tools'
import zh from './zh.json'
import en from './en.json'
import esLA from './es.json'
import ptBR from './pt.json'

const messages = { enUS: { ...en }, zhCN: { ...zh }, esLA: { ...esLA }, ptBR: { ...ptBR } }
$local._lang =
  $local._lang === 'zhCN'
    ? 'zhCN'
    : $local._lang === 'enUS'
      ? 'enUS'
      : $local._lang === 'esLA'
        ? 'esLA'
        : $local._lang === 'ptBR'
          ? 'ptBR'
          : 'zhCN'

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
const getWord = (cn, en, es, pt) =>
  i18n.global.locale === 'zhCN'
    ? cn
    : i18n.global.locale === 'enUS'
      ? en
      : i18n.global.locale === 'esLA'
        ? en
        : i18n.global.locale === 'ptBR'
          ? en
          : cn

export { i18n, i18nByKey, getWord }

export { t }
