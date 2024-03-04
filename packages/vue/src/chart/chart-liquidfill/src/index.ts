import 'echarts-liquidfill'
import { liquidfill } from '@opentiny/vue-renderless/chart-liquidfill/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartLiquidfill',
    data() {
      this.chartHandler = liquidfill
      return {}
    }
  }
})
