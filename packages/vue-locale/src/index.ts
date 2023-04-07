import * as vue from 'virtual:locale/vue'
import glob from './glob'

export const { use, t, i18n, initI18n, extend, zhCN, enUS, language } = vue

export const globalization = glob(t)

export const version = process.env.COMPONENT_VERSION

export default {
  ...vue.default,
  language,
  globalization
}
