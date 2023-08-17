import SliderButtonGroup from './src/index'
import { version } from './package.json'

SliderButtonGroup.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
SliderButtonGroup.install = function (Vue) {
  Vue.component(SliderButtonGroup.name, SliderButtonGroup)
}

SliderButtonGroup.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    SliderButtonGroup.install(window.Vue)
  }
}

export default SliderButtonGroup
