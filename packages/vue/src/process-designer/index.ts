import ProcessDesigner from './src/index'
import '@opentiny/vue-theme/process-designer/index.less'
import { version } from './package.json'

ProcessDesigner.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
ProcessDesigner.install = function (Vue) {
  Vue.component(ProcessDesigner.name, ProcessDesigner)
}

ProcessDesigner.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ProcessDesigner.install(window.Vue)
  }
}

export default ProcessDesigner
