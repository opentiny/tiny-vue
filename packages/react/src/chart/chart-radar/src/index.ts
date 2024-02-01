import * as echarts from 'echarts/core'
import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { radar } from '@opentiny/vue-renderless/chart-radar/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([RadarChart, CanvasRenderer])

export default function ChartRadar(props) {
  return Core({ props, chartHandler: radar, name: $prefix + 'ChartRadar' })
}
