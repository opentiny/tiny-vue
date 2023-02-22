import Company from './src/index'
import '@opentiny/vue-theme/company/index.css'

Company.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Company.install = function (Vue) {
  Vue.component(Company.name, Company)
}

Company.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Company.install(window.Vue)
  }
}

export default Company
