import ConfigProvider from './src/index.vue'
import { version } from './package.json'

export const configProviderContextKey = Symbol('CONFIG_PROVIDER_CONTEXT_KEY')

/* istanbul ignore next */
ConfigProvider.install = function (Vue) {
  Vue.component(ConfigProvider.name, ConfigProvider)
}

ConfigProvider.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ConfigProvider.install(window.Vue)
  }
}

export default ConfigProvider
