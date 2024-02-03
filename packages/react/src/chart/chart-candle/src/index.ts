import * as echarts from 'echarts/core'
import {
  GraphicComponent,
  GridComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent
} from 'echarts/components'
import { BarChart, CandlestickChart, LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { candle } from '@opentiny/vue-renderless/chart-candle/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([
  GraphicComponent,
  GridComponent,
  DataZoomComponent,
  BarChart,
  MarkLineComponent,
  MarkPointComponent,
  CandlestickChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition
])

export default function ChartCandle(props) {
  return Core({ props, chartHandler: candle, name: $prefix + 'ChartCandle' })
}
