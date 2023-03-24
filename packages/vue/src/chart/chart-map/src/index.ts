import * as echarts from 'echarts/core'
import { MapChart } from 'echarts/charts'
import { map } from '@opentiny/vue-renderless/chart-map/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

echarts.use([MapChart])

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartMap',
    data() {
      this.chartHandler = map
      return {}
    }
  }
}
)
