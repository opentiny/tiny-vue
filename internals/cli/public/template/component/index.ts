import [[UNAME]] from './src/index[[SUFFIX]]'
import '@opentiny/vue-theme/[[NAME]]/index.less'
import { version } from './package.json'

[[UNAME]].model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
[[UNAME]].install = function (Vue) {
  Vue.component([[UNAME]].name, [[UNAME]])
}

[[UNAME]].version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    [[UNAME]].install(window.Vue)
  }
}

export default [[UNAME]]
