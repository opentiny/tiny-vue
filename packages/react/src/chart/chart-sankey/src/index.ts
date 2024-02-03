import * as echarts from 'echarts/core'
import { SankeyChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { sankey } from '@opentiny/vue-renderless/chart-sankey/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([SankeyChart, CanvasRenderer])

export default function chartSankey(props) {
  return Core({ props, chartHandler: sankey, name: $prefix + 'chartSankey' })
}
