import FloatingButton from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
FloatingButton.install = function (Vue) {
  Vue.component(FloatingButton.name, FloatingButton)
}

FloatingButton.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    FloatingButton.install(window.Vue)
  }
}

export default FloatingButton
