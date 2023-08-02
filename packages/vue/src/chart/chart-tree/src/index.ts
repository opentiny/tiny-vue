import * as echarts from 'echarts/core'
import { TreeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { tree } from '@opentiny/vue-renderless/chart-tree/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

echarts.use([TreeChart, CanvasRenderer])

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartTree',
    data() {
      this.chartHandler = tree
      return {}
    }
  }
}
)
