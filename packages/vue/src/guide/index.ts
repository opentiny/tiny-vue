import Guide from './src/index'
import { version } from './package.json'

Guide.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Guide.install = function (Vue) {
  Vue.component(Guide.name, Guide)
}

Guide.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Guide.install(window.Vue)
  }
}

export default Guide
