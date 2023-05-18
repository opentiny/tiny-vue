import Card from './src/mobile-first.vue'

Card.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}
/* istanbul ignore next */
Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

Card.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Card.install(window.Vue)
  }
}

export default Card
