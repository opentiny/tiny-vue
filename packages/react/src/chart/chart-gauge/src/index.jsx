import * as echarts from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { gauge } from '@opentiny/vue-renderless/chart-gauge/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([GaugeChart, CanvasRenderer])

export default function ChartGauge(props) {
  return Core({ props, chartHandler: gauge, name: $prefix + 'ChartGauge' })
}
