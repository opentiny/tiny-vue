import Line from './src/index.js'
import { line } from '@opentiny/vue-renderless/chart-line/index'
import { version } from './package.json'

/* istanbul ignore next */
Line.install = function (Vue) {
  Vue.component(Line.name, Line)
}

Line.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Line.install(window.Vue)
  }
}

export { line }

export default Line
