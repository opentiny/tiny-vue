import Signature from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
Signature.install = function (Vue) {
  Vue.component(Signature.name, Signature)
}

Signature.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Signature.install(window.Vue)
  }
}

export default Signature
