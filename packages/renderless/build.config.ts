import { defineBuildConfig } from 'unbuild'
import { version } from './package.json'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      esbuild: {
        define: {
          'process.env.RUNTIME_VERSION': JSON.stringify(version)
        }
      }
    }
  ],
  clean: true
})
