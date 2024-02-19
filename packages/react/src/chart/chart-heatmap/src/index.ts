import * as echarts from 'echarts/core'
import { HeatmapChart, MapChart } from 'echarts/charts'
import { GridComponent, VisualMapComponent } from 'echarts/components'
import 'echarts/extension/bmap/bmap'
import { heatmap } from '@opentiny/vue-renderless/chart-heatmap/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([HeatmapChart, MapChart, GridComponent, VisualMapComponent])

export default function ChartHeatmap(props) {
  return Core({ props, chartHandler: heatmap, name: $prefix + 'ChartHeatmap' })
}
