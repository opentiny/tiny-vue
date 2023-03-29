import { defineConfig } from 'tsup'
import { version } from './package.json'

export default defineConfig({
  entry: [
    'src/**/*.ts',
  ],
  bundle: false,
  clean: true,
  format: ['esm'],
  dts: false,
  outExtension: () => ({ js: '.js', }),
  esbuildOptions(options) {
    if (options.define) options.define['process.env.RUNTIME_VERSION'] = JSON.stringify(version)
  },
  // onSuccess: 'esno scripts/postbuild.ts',
})
