import Popconfirm from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
Popconfirm.install = function (Vue) {
  Vue.component(Popconfirm.name, Popconfirm)
}

Popconfirm.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

Popconfirm.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Popconfirm.install(window.Vue)
  }
}

export default Popconfirm
