import ColorPicker from './src/index'
import '@opentiny/vue-theme/color-picker/index.less'
import { version } from './package.json'

ColorPicker.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
ColorPicker.install = function (Vue) {
  Vue.component(ColorPicker.name, ColorPicker)
}

ColorPicker.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ColorPicker.install(window.Vue)
  }
}

export default ColorPicker
