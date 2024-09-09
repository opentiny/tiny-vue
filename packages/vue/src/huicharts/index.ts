import HuiCharts from './src/index'
import { version } from './package.json'

HuiCharts.install = function (Vue) {
  Vue.component(HuiCharts.name, HuiCharts)
}

HuiCharts.version = version

if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    HuiCharts.install(window.Vue)
  }
}

export default HuiCharts
