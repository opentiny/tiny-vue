import * as react from './react'
import glob from './glob'

export { version } from '../package.json'

export const { use, t, i18n, initI18n, extend, zhCN, enUS, language } = react

export const globalization = glob(t)

export default {
  ...react.default,
  language,
  globalization
}
