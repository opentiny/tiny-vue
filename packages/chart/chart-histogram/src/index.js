import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { histogram } from '@opentiny/vue-renderless/chart-bar/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([GridComponent, BarChart, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartHistogram',
    data() {
      this.chartHandler = histogram
      return {}
    }
  }
}
