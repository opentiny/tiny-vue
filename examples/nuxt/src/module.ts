import { defineNuxtModule } from '@nuxt/kit'
import AutoVite from 'unplugin-vue-components/vite'
import AutoWebpack from 'unplugin-vue-components/webpack'

const supportMap = {
  'vite': AutoVite,
  'webpack': AutoWebpack
}

export const TinyVueResolver = (componentName) => {
  if (componentName.startsWith('Tiny') && !componentName.startsWith('TinyIcon')) {
    return {
      name: componentName.slice(4),
      from: '@opentiny/vue'
    }
  }
}

export default defineNuxtModule({
  meta: {
    name: '@opentiny/nuxt',
    configKey: 'tiny-vue'
  },

  setup(_options, nuxt) {
    nuxt.hook('vite:extendConfig', (config) => {
      const autoVitePlugin = supportMap.vite
      config.plugins.push(
        autoVitePlugin({
          resolvers: [TinyVueResolver]
        })
      )
    })

    nuxt.hook('webpack:config', (configs) => {
      const autoWebpackPlugin = supportMap.webpack
      configs.forEach((config) => {
        config.plugins.push(
          autoWebpackPlugin({
            resolvers: [TinyVueResolver]
          })
        )
      })
    })
  }
})
