import FilterPanel from './src/pc.vue'
import '@opentiny/vue-theme/filter-panel/index.less'
import { version } from './package.json'

/* istanbul ignore next */
FilterPanel.install = function (Vue) {
  Vue.component(FilterPanel.name, FilterPanel)
}

FilterPanel.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    FilterPanel.install(window.Vue)
  }
}

export default FilterPanel
