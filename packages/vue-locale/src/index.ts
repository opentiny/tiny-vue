import * as vue from 'virtual:locale/vue'
import glob from './glob'

export { version } from '../package.json'

export const { use, t, i18n, initI18n, extend, zhCN, enUS, language } = vue

export const globalization = glob(t)

export default {
  ...vue.default,
  language,
  globalization
}
