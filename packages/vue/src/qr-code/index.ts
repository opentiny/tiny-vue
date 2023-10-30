import QrCode from './src/pc.vue'
import '@opentiny/vue-theme/qr-code/index.less'
import { version } from './package.json'

/* istanbul ignore next */
QrCode.install = function (Vue) {
  Vue.component(QrCode.name, QrCode)
}

QrCode.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    QrCode.install(window.Vue)
  }
}

export default QrCode
