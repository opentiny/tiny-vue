import UserAccount from './src/index.js'
import '@opentiny/vue-theme/user-account/index.less'
import { version } from './package.json'

/* istanbul ignore next */
UserAccount.install = function (Vue) {
  Vue.component(UserAccount.name, UserAccount)
}

UserAccount.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    UserAccount.install(window.Vue)
  }
}

export default UserAccount
