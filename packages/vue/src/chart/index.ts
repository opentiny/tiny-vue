import Chart from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Chart.install = function (Vue) {
  Vue.component(Chart.name, Chart)
}

Chart.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Chart.install(window.Vue)
  }
}

export default Chart
