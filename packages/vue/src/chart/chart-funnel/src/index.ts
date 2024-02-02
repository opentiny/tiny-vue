import * as echarts from 'echarts/core'
import { ToolboxComponent } from 'echarts/components'
import { FunnelChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { funnel } from '@opentiny/vue-renderless/chart-funnel/index'
import Core from '@opentiny/vue-chart-core'
import { $props, $prefix, defineComponent } from '@opentiny/vue-common'

echarts.use([ToolboxComponent, FunnelChart, CanvasRenderer])

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartFunnel',
    data() {
      this.chartHandler = funnel
      return {}
    },
    props: {
      ...$props,
      ...Core.props,
      colorMode: {
        type: String,
        default: 'blue'
      }
    }
  }
})
