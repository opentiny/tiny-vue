import { setupComponent } from '@opentiny/vue-common'
import Drawer from './src/index'
import service from './src/service'
import { version } from './package.json'

Drawer.model = {
  prop: 'visible',
  event: 'update:visible'
}

Drawer.service = service

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

setupComponent.TINYDrawer = {
  init(root) {
    let prefix = root.$apiPrefix || '$'
    root[`${prefix}drawer`] = service
  }
}

export default Drawer
