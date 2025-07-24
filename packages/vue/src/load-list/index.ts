import LoadList from './src/index'
import { version } from './package.json'

LoadList.model = {
  prop: 'loading',
  event: 'update:loading'
}

/* istanbul ignore next */
LoadList.install = function (Vue) {
  Vue.component(LoadList.name, LoadList)
}

LoadList.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    LoadList.install(window.Vue)
  }
}

export default LoadList
