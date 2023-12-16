import Chart from './src/index'
import { version } from './package.json'

Chart.install = function (Vue) {
  Vue.component(Chart.name, Chart)
}

Chart.version = version

if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Chart.install(window.Vue)
  }
}

export default Chart
