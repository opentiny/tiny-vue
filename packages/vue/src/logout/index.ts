import Logout from './src/index'
import '@opentiny/vue-theme/logout/index.less'
import { version } from './package.json'

/* istanbul ignore next */
Logout.install = function (Vue) {
  Vue.component(Logout.name, Logout)
}

Logout.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Logout.install(window.Vue)
  }
}

export default Logout
