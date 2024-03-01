import FloatButton from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
FloatButton.install = function (Vue) {
  Vue.component(FloatButton.name, FloatButton)
}

FloatButton.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    FloatButton.install(window.Vue)
  }
}

export default FloatButton
