<script>
import * as echarts from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { gauge } from '@opentiny/vue-renderless/chart-gauge/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([GaugeChart, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartGauge',
    data() {
      this.chartHandler = gauge
      return {}
    }
  }
}
</script>
