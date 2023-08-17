import * as echarts from 'echarts/core'
import { HeatmapChart, MapChart } from 'echarts/charts'
import { GridComponent, VisualMapComponent } from 'echarts/components'
import 'echarts/extension/bmap/bmap'
import { heatmap } from '@opentiny/vue-renderless/chart-heatmap/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

echarts.use([HeatmapChart, MapChart, GridComponent, VisualMapComponent])

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartHeatmap',
    data() {
      this.chartHandler = heatmap
      return {}
    }
  }
})
