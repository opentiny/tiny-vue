import Grid from './src/index'
import { version } from '../../package.json'

Grid.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Grid.install(window.Vue)
  }
}

export default Grid
