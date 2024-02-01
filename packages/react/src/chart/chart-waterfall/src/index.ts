import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { waterfall } from '@opentiny/vue-renderless/chart-waterfall/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([GridComponent, BarChart, CanvasRenderer])

export default function ChartWaterfall(props) {
  return Core({ props, chartHandler: waterfall, name: $prefix + 'ChartWaterfall' })
}
