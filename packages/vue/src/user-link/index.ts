import UserLink from './src/index.js'
import '@opentiny/vue-theme/user-link/index.less'
import { version } from './package.json'

UserLink.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
UserLink.install = function (Vue) {
  Vue.component(UserLink.name, UserLink)
}

UserLink.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    UserLink.install(window.Vue)
  }
}

export default UserLink
