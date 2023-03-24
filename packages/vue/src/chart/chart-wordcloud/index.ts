import Wordcloud from './src/index.js'
import { version } from './package.json'

/* istanbul ignore next */
Wordcloud.install = function (Vue) {
  Vue.component(Wordcloud.name, Wordcloud)
}

Wordcloud.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Wordcloud.install(window.Vue)
  }
}

export default Wordcloud
