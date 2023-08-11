import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { ring } from '@opentiny/vue-renderless/chart-pie/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

echarts.use([PieChart, LabelLayout, CanvasRenderer])

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartRing',
    data() {
      this.chartHandler = ring
      return {}
    }
  }
})
