import MindMap from './src/index'
import { version } from './package.json'

MindMap.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
MindMap.install = function (Vue) {
  Vue.component(MindMap.name, MindMap)
}

MindMap.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    MindMap.install(window.Vue)
  }
}

export default MindMap
