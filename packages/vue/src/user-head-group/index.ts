import UserHeadGroup from './src/index.js'

UserHeadGroup.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
UserHeadGroup.install = function (Vue) {
  Vue.component(UserHeadGroup.name, UserHeadGroup)
}

UserHeadGroup.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    UserHeadGroup.install(window.Vue)
  }
}

export default UserHeadGroup
