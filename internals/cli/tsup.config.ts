import { defineConfig, type Options } from 'tsup'

const shared: Options = {
  entry: ['src/**/*.ts'],
  splitting: false,
  bundle: false,
  // sourcemap: true,
  clean: true,
  target: 'node14',
  platform: 'node',
  dts: false,
  publicDir: true,
  env: {
    TINY_TSUP_ENV: 'production'
  }
}

export default defineConfig([
  {
    format: ['esm'],
    outDir: 'dist/esm',
    outExtension: () => ({ js: '.js', }),
    ...shared,
  },
  {
    format: ['cjs'],
    outDir: 'dist/cjs',
    shims: true,
    outExtension: () => ({ js: '.js', }),
    ...shared,
  },
])
