import Bar from './src/index.js'
import { histogram, bar } from '@opentiny/vue-renderless/chart-bar/index'
import { version } from './package.json'

/* istanbul ignore next */
Bar.install = function (Vue) {
  Vue.component(Bar.name, Bar)
}

Bar.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Bar.install(window.Vue)
  }
}

export { histogram, bar }

export default Bar
