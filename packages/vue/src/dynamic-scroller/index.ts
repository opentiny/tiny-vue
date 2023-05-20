import DynamicScroller from './src/index'
import RecycleScroller from '@opentiny/vue-recycle-scroller'

DynamicScroller.IdState = RecycleScroller.IdState

/* istanbul ignore next */
DynamicScroller.install = function (Vue) {
  Vue.component(DynamicScroller.name, DynamicScroller)
}

DynamicScroller.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    DynamicScroller.install(window.Vue)
  }
}

export default DynamicScroller
