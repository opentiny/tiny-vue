import Flowchart, { createNode, createLink, createItem, createConfig } from './src/index'
import Node from './src/node.vue'
import resizeMixin from './src/resize-mixin'
import { version } from './package.json'
import '@opentiny/vue-theme/flowchart/index.less'

/* istanbul ignore next */
Flowchart.install = function (Vue) {
  Vue.component(Flowchart.name, Flowchart)
}

Flowchart.version = version
Flowchart.createNode = createNode
Flowchart.createLink = createLink
Flowchart.createItem = createItem
Flowchart.createConfig = createConfig
Flowchart.Node = Node
Flowchart.resizeMixin = resizeMixin

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Flowchart.install(window.Vue)
  }
}

export default Flowchart
