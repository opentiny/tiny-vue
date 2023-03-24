import ActionMenu from './src/index.vue'
import '@opentiny/vue-theme/action-menu/index.less'
import { version } from './package.json'

/* istanbul ignore next */
ActionMenu.install = function (Vue) {
  Vue.component(ActionMenu.name, ActionMenu)
}

ActionMenu.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ActionMenu.install(window.Vue)
  }
}

export default ActionMenu
