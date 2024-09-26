import VirtualTree from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
VirtualTree.install = function (Vue) {
  Vue.component(VirtualTree.name, VirtualTree)
}

VirtualTree.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    VirtualTree.install(window.Vue)
  }
}

export default VirtualTree
