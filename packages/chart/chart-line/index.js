import Line from './src/index.js'
import { line } from '@opentiny/vue-renderless/chart-line/index'

/* istanbul ignore next */
Line.install = function (Vue) {
  Vue.component(Line.name, Line)
}

Line.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Line.install(window.Vue)
  }
}

export { line }

export default Line
