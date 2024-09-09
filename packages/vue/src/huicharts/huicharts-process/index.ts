import HuiChartsProcess from './src/chart-process.vue'
import type { VueConstructor } from 'vue'

HuiChartsProcess.install = function (Vue: VueConstructor<Vue>) {
  Vue.component(HuiChartsProcess.name as string, HuiChartsProcess)
}

export { HuiChartsProcess }
export default HuiChartsProcess
