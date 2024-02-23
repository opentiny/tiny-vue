import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { ScatterChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { scatter } from '@opentiny/vue-renderless/chart-scatter/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([GridComponent, ScatterChart, UniversalTransition, CanvasRenderer])

export default function ChartScatter(props) {
  return Core({ props, chartHandler: scatter, name: $prefix + 'ChartScatter' })
}
