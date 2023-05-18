import SelectedBox from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
SelectedBox.install = function (Vue) {
  Vue.component(SelectedBox.name, SelectedBox)
}

SelectedBox.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    SelectedBox.install(window.Vue)
  }
}

export default SelectedBox
