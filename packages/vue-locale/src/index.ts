import * as vue from 'virtual:locale/vue'
import glob from './glob'

export const { use, t, i18n, initI18n, extend, zh_CN, en_US, language } = vue

export const zhCN = zh_CN
export const enUS = en_US

export const globalization = glob(t)

export const version = process.env.COMPONENT_VERSION

export default {
  ...vue.default,
  language,
  globalization
}
