import Amount from './src/index.vue'
import '@opentiny/vue-theme/amount/index.css'

Amount.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Amount.install = function (Vue) {
  Vue.component(Amount.name, Amount)
}

Amount.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Amount.install(window.Vue)
  }
}

export default Amount
