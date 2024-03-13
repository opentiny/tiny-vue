import TagGroup from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
TagGroup.install = function (Vue) {
  Vue.component(TagGroup.name, TagGroup)
}

TagGroup.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    TagGroup.install(window.Vue)
  }
}

export default TagGroup
