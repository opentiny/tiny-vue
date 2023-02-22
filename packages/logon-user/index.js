import LogonUser from './src/index.vue'

/* istanbul ignore next */
LogonUser.install = function (Vue) {
  Vue.component(LogonUser.name, LogonUser)
}

LogonUser.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    LogonUser.install(window.Vue)
  }
}

export default LogonUser
