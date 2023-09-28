import ColorSelectPanel from './src/index'
import '@opentiny/vue-theme/color-select-panel/index.less'
import {version} from './package.json';

ColorSelectPanel.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
ColorSelectPanel.install = function (Vue) {
  Vue.component(ColorSelectPanel.name, ColorSelectPanel)
}

ColorSelectPanel.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    ColorSelectPanel.install(window.Vue)
  }
}

export default ColorSelectPanel
