import * as echarts from 'echarts/core'
import { ToolboxComponent } from 'echarts/components'
import { FunnelChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { funnel } from '@opentiny/vue-renderless/chart-funnel/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([ToolboxComponent, FunnelChart, CanvasRenderer])

export default function CharFunnel(props) {
  return Core({ props, chartHandler: funnel, name: $prefix + 'CharFunnel' })
}
