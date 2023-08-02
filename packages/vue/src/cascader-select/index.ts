import CascaderSelect from './src/index'
import { version } from './package.json'

CascaderSelect.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
CascaderSelect.install = function (Vue) {
  Vue.component(CascaderSelect.name, CascaderSelect)
}

CascaderSelect.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    CascaderSelect.install(window.Vue)
  }
}

export default CascaderSelect
