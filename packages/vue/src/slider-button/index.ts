import SliderButton from './src/index'
import { version } from './package.json'

/* istanbul ignore next */
SliderButton.install = function (Vue) {
  Vue.component(SliderButton.name, SliderButton)
}

SliderButton.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    SliderButton.install(window.Vue)
  }
}

export default SliderButton
