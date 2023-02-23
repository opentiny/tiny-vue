import Funnel from './src/index.js'
import { funnel } from '@opentiny/vue-renderless/chart-funnel/index'

/* istanbul ignore next */
Funnel.install = function (Vue) {
  Vue.component(Funnel.name, Funnel)
}

Funnel.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Funnel.install(window.Vue)
  }
}

export { funnel }

export default Funnel
