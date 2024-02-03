import * as echarts from 'echarts/core'
import { SankeyChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { sankey } from '@opentiny/vue-renderless/chart-sankey/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

echarts.use([SankeyChart, CanvasRenderer])

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartSankey',
    data() {
      this.chartHandler = sankey
      return {}
    }
  }
})
