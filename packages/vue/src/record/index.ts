import Record from './src/index'
import { version } from './package.json'

Record.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Record.install = function (Vue) {
  Vue.component(Record.name, Record)
}

Record.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Record.install(window.Vue)
  }
}

export default Record
