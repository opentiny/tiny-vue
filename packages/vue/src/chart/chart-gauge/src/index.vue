<script lang="tsx">
import * as echarts from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { gauge } from '@opentiny/vue-renderless/chart-gauge/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

echarts.use([GaugeChart, CanvasRenderer])

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartGauge',
    data() {
      this.chartHandler = gauge
      return {}
    }
  }
})
</script>
