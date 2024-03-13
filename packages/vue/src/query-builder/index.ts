import QueryBuilder from './src/pc.vue'
import { version } from './package.json'

QueryBuilder.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
QueryBuilder.install = function (Vue) {
  Vue.component(QueryBuilder.name, QueryBuilder)
}

QueryBuilder.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    QueryBuilder.install(window.Vue)
  }
}

export default QueryBuilder
