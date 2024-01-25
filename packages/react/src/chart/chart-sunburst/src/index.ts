import * as echarts from 'echarts/core'
import { SunburstChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { sunburst } from '@opentiny/vue-renderless/chart-sunburst/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([SunburstChart, CanvasRenderer])

export default function ChartSunburst(props) {
  return Core({ props, chartHandler: sunburst, name: $prefix + 'ChartSunburst' })
}
