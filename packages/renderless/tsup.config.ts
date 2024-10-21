import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['types/*.type.ts'],
    bundle: false,
    outDir: 'dist/types',
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
