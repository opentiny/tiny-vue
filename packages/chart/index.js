import Chart from './src/index.js'

/* istanbul ignore next */
Chart.install = function (Vue) {
  Vue.component(Chart.name, Chart)
}

Chart.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Chart.install(window.Vue)
  }
}

export default Chart
