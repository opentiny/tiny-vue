import * as echarts from 'echarts/core'
import { TreeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { tree } from '@opentiny/vue-renderless/chart-tree/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([TreeChart, CanvasRenderer])

export default function ChartTree(props) {
  return Core({ props, chartHandler: tree, name: $prefix + 'ChartTree' })
}
