import SkeletonItem from './src/index'
import '@opentiny/vue-theme/skeleton-item/index.less'
import { version } from './package.json'

SkeletonItem.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
SkeletonItem.install = function (Vue) {
  Vue.component(SkeletonItem.name, SkeletonItem)
}

SkeletonItem.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    SkeletonItem.install(window.Vue)
  }
}

export default SkeletonItem
