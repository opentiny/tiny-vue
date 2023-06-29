import CardGroup from './src/mobile-first.vue'
import { version } from './package.json'

CardGroup.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
CardGroup.install = function (Vue) {
  Vue.component(CardGroup.name, CardGroup)
}

CardGroup.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    CardGroup.install(window.Vue)
  }
}

export default CardGroup
