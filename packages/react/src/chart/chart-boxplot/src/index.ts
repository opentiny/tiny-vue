import * as echarts from 'echarts/core'
import { DatasetComponent, GridComponent, DataZoomComponent, TransformComponent } from 'echarts/components'
import { BoxplotChart, ScatterChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { boxplot } from '@opentiny/vue-renderless/chart-boxplot/index'
import Core from '@opentiny/react-chart-core'
import { prepareBoxplotData } from 'echarts/extension/dataTool'
import { $prefix } from '@opentiny/react-common'

echarts.use([
  DatasetComponent,
  GridComponent,
  DataZoomComponent,
  TransformComponent,
  BoxplotChart,
  ScatterChart,
  CanvasRenderer,
  UniversalTransition
])

export default function ChartBoxplot(props) {
  // this.prepareBoxplotData = prepareBoxplotDatas

  return Core({ props, chartHandler: boxplot, prepareBoxplotData, name: $prefix + 'ChartBoxplot' })
}
