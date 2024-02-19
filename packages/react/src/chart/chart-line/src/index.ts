import * as echarts from 'echarts/core'
import { ToolboxComponent, GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { line } from '@opentiny/vue-renderless/chart-line/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([ToolboxComponent, GridComponent, LineChart, UniversalTransition, CanvasRenderer])

export default function ChartLine(props) {
  return Core({ props, chartHandler: line, name: $prefix + 'ChartLine' })
}
