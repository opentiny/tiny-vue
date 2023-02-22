import * as echarts from 'echarts/core'
import { ToolboxComponent, GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { line } from '@opentiny/vue-renderless/chart-line/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([ToolboxComponent, GridComponent, LineChart, UniversalTransition, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartLine',
    data() {
      this.chartHandler = line
      return {}
    }
  }
}
