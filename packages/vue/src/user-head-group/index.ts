import UserHeadGroup from './src/index.js'
import { version } from './package.json'

UserHeadGroup.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
UserHeadGroup.install = function (Vue) {
  Vue.component(UserHeadGroup.name, UserHeadGroup)
}

UserHeadGroup.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    UserHeadGroup.install(window.Vue)
  }
}

export default UserHeadGroup
