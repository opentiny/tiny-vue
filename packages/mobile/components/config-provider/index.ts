import ConfigProvider from './src/index.vue'

export const configProviderContextKey = Symbol('CONFIG_PROVIDER_CONTEXT_KEY')

/* istanbul ignore next */
ConfigProvider.install = function (Vue) {
  Vue.component(ConfigProvider.name, ConfigProvider)
}

export default ConfigProvider
