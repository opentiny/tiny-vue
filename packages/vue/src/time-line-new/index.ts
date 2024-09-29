import TimeLine from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
TimeLine.install = function (Vue) {
  Vue.component(TimeLine.name, TimeLine)
}

TimeLine.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    TimeLine.install(window.Vue)
  }
}

export default TimeLine
