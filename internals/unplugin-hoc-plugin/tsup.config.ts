import type { Options } from 'tsup'

export default <Options>{
  entryPoints: ['src/*.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  dts: false,
  onSuccess: 'esno scripts/postbuild.ts'
}
