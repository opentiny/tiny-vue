import Graph from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Graph.install = function (Vue) {
  Vue.component(Graph.name, Graph)
}

Graph.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Graph.install(window.Vue)
  }
}

export default Graph
