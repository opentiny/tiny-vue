import * as echarts from 'echarts/core'
import { GraphicComponent, GridComponent, DataZoomComponent, MarkLineComponent, MarkPointComponent } from 'echarts/components'
import { BarChart, CandlestickChart, LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { candle } from '@opentiny/vue-renderless/chart-candle/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

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
export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartCandle',
    data() {
      this.chartHandler = candle
      return {}
    }
  }
}
)
