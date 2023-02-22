import Wordcloud from './src/index.js'

/* istanbul ignore next */
Wordcloud.install = function (Vue) {
  Vue.component(Wordcloud.name, Wordcloud)
}

Wordcloud.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Wordcloud.install(window.Vue)
  }
}

export default Wordcloud
