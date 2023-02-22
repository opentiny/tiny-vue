import * as echarts from 'echarts/core'
import { SunburstChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { sunburst } from '@opentiny/vue-renderless/chart-sunburst/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([SunburstChart, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartSunburst',
    data() {
      this.chartHandler = sunburst
      return {}
    }
  }
}
