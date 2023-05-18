import Cell from './src/mobile-first.vue'
import { version } from './package.json'

/* istanbul ignore next */
Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Cell.install(window.Vue)
  }
}

Cell.version = version

export default Cell
