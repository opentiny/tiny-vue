import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { GraphChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { graph } from '@opentiny/vue-renderless/chart-graph/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([GridComponent, GraphChart, CanvasRenderer])

export default function ChartGraph(props) {
  return Core({ props, chartHandler: graph, name: $prefix + 'ChartGraph' })
}
