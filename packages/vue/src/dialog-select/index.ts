import DialogSelect from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
DialogSelect.install = function (Vue) {
  Vue.component(DialogSelect.name, DialogSelect)
}

DialogSelect.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    DialogSelect.install(window.Vue)
  }
}

export default DialogSelect
