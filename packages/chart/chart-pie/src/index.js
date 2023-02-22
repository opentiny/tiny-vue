import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { pie } from '@opentiny/vue-renderless/chart-pie/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([PieChart, LabelLayout, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartPie',
    data() {
      this.chartHandler = pie
      return {}
    }
  }
}
