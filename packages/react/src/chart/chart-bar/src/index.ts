import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { bar } from '@opentiny/vue-renderless/chart-bar/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([GridComponent, BarChart, CanvasRenderer])

export default function ChartBar(props) {
  return Core({ props, chartHandler: bar, name: $prefix + 'ChartBar' })
}
