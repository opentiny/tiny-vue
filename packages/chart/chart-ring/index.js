import Ring from './src/index.js'

/* istanbul ignore next */
Ring.install = function (Vue) {
  Vue.component(Ring.name, Ring)
}

Ring.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Ring.install(window.Vue)
  }
}

export default Ring
