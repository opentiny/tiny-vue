import DropRoles from './src/index'
import '@opentiny/vue-theme/drop-roles/index.less'
import { version } from './package.json'

DropRoles.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
DropRoles.install = function (Vue) {
  Vue.component(DropRoles.name, DropRoles)
}

DropRoles.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    DropRoles.install(window.Vue)
  }
}

export default DropRoles
