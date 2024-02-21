import RichTextEditor from './src/pc.vue'
import { version } from './package.json'

/* istanbul ignore next */
RichTextEditor.install = function (Vue) {
  Vue.component(RichTextEditor.name, RichTextEditor)
}

RichTextEditor.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    RichTextEditor.install(window.Vue)
  }
}

export default RichTextEditor
