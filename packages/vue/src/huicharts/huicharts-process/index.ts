import ChartProcess from './src/chart-process.vue'
import type { VueConstructor } from 'vue'

ChartProcess.install = function (Vue: VueConstructor<Vue>) {
  Vue.component(ChartProcess.name as string, ChartProcess)
}

export { ChartProcess }
export default ChartProcess
