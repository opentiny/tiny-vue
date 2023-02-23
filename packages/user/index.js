import User from './src/index.js'
import '@opentiny/vue-theme/user/index.css'

User.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
User.install = function (Vue) {
  Vue.component(User.name, User)
}

User.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    User.install(window.Vue)
  }
}

export default User
