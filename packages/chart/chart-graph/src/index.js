import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { GraphChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { graph } from '@opentiny/vue-renderless/chart-graph/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([GridComponent, GraphChart, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartGraph',
    data() {
      this.chartHandler = graph
      return {}
    }
  }
}
