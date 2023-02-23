import Graph from './src/index.js'

/* istanbul ignore next */
Graph.install = function (Vue) {
  Vue.component(Graph.name, Graph)
}

Graph.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Graph.install(window.Vue)
  }
}

export default Graph
