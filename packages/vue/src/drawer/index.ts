import Drawer from './src/index'
import { version } from './package.json'

Drawer.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Drawer.install = function (Vue) {
  Vue.component(Drawer.name, Drawer)
}

Drawer.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Drawer.install(window.Vue)
  }
}

export default Drawer
