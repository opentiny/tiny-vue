import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { waterfall } from '@opentiny/vue-renderless/chart-waterfall/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([GridComponent, BarChart, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartWaterfall',
    data() {
      this.chartHandler = waterfall
      return {}
    }
  }
}
