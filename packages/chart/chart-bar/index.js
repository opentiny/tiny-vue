import Bar from './src/index.js'
import { histogram, bar } from '@opentiny/vue-renderless/chart-bar/index'

/* istanbul ignore next */
Bar.install = function (Vue) {
  Vue.component(Bar.name, Bar)
}

Bar.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Bar.install(window.Vue)
  }
}

export { histogram, bar }

export default Bar
