import { defineConfig } from 'tsup'
import { version } from './package.json'

export default defineConfig([
  {
    entry: ['src/**/*.ts'],
    bundle: false,
    clean: true,
    format: ['esm'],
    dts: false,
    outExtension: () => ({ js: '.js' }),
    esbuildOptions(options) {
      if (options.define) options.define['process.env.RUNTIME_VERSION'] = JSON.stringify(version)
    }
  },
  {
    entry: ['types/*.type.ts'],
    bundle: false,
    clean: true,
    outDir: 'dist/types',
    format: ['esm'],
    external: ['@opentiny/vue-icon', '@opentiny/vue-common'],
    dts: {
      only: true,
      compilerOptions: {
        noEmitOnError: false,
        strict: false,
        alwaysStrict: false,
        skipLibCheck: true,
        skipDefaultLibCheck: true,
        paths: {
          'virtual:common/adapter/vue': ['../vue-common/src/adapter/vue3/index'],
          'virtual-template*': ['../vue/src/button/index'],
          '@/types': ['types'],
          '@/types/*': ['types/*'],
          '@/*': ['../vue/src/*'],
          '@opentiny/vue-*': ['../vue-*'],
          '@opentiny/vue-renderless/*': ['../renderless/src/*']
        }
      }
    }
  }
])
