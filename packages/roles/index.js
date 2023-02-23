import Roles from './src/index'
import '@opentiny/vue-theme/roles/index.css'

/* istanbul ignore next */
Roles.install = function (Vue) {
  Vue.component(Roles.name, Roles)
}

Roles.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Roles.install(window.Vue)
  }
}

export default Roles
