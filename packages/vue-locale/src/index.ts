import * as vue from 'virtual:locale/vue'
import glob from './glob'
import esLA from './lang/es-LA'
import ptBR from './lang/pt-BR'

export { version } from '../package.json'

export const { use, t, i18n, initI18n, extend, zhCN, enUS, language } = vue

export const globalization = /* @__PURE__ */ glob(t)

const locale = /* @__PURE__ */ Object.assign({}, vue.default, {
  language,
  globalization
})

export { esLA, ptBR }

export default locale
