import * as echarts from 'echarts/core'
import { ToolboxComponent, GridComponent } from 'echarts/components'
import { BarChart, FunnelChart, LineChart, PieChart, RadarChart } from 'echarts/charts'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { bar, histogram } from '@opentiny/vue-renderless/chart-bar/index'
import { line } from '@opentiny/vue-renderless/chart-line/index'
import { pie, ring } from '@opentiny/vue-renderless/chart-pie/index'
import { funnel } from '@opentiny/vue-renderless/chart-funnel/index'
import { radar } from '@opentiny/vue-renderless/chart-radar/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([
  ToolboxComponent,
  GridComponent,
  BarChart,
  FunnelChart,
  LineChart,
  PieChart,
  RadarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default function Chart(props) {
  const chartLib = {
    bar,
    funnel,
    histogram,
    line,
    pie,
    radar,
    ring
  }
  const chartHandler = chartLib[props.settings.type]
  return Core({ props, chartHandler, chartLib, name: $prefix + 'Chart' })
}
