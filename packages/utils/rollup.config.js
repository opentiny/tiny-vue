import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import { cleandir } from 'rollup-plugin-cleandir'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const extensions = ['.js', '.ts']

const format = process.env.TARGET || 'umd'
const isProd = process.env.BABEL_ENV === 'production'
const ext = isProd ? '.min' : format === 'cjs' ? '.common' : format === 'es' ? '.esm' : format === 'umd' ? '.umd' : ''

export default {
  input: 'src/index.ts',
  output: {
    file: `dist/opentiny-utils${ext}.js`,
    format,
    name: 'opentiny_utils'
  },
  plugins: [
    cleandir('./lib'),
    typescript({ tsconfigOverride: { compilerOptions: { module: 'ESNext' } } }),
    nodeResolve({ extensions, modulesOnly: true, preferredBuiltins: false }),
    babel({ exclude: 'node_modules/**' }),
    isProd && uglify(),
    json()
  ],
  external: ['xss']
}
