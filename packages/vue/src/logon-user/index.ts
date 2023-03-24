import LogonUser from './src/index.vue'
import { version } from './package.json'

/* istanbul ignore next */
LogonUser.install = function (Vue) {
  Vue.component(LogonUser.name, LogonUser)
}

LogonUser.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    LogonUser.install(window.Vue)
  }
}

export default LogonUser
