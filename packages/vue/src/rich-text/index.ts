import RichText from './src/pc.vue'
import '@opentiny/vue-theme/rich-text/index.css'

RichText.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
RichText.install = function (Vue) {
  Vue.component(RichText.name, RichText)
}

RichText.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    RichText.install(window.Vue)
  }
}

export default RichText
