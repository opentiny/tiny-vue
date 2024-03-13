import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { pie } from '@opentiny/vue-renderless/chart-pie/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([PieChart, LabelLayout, CanvasRenderer])

export default function ChartPie(props) {
  return Core({ props, chartHandler: pie, name: $prefix + 'ChartPie' })
}
