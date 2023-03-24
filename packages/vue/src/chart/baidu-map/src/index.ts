import 'echarts/extension/bmap/bmap'
import { bmap } from '@opentiny/vue-renderless/baidu-map/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartBaiduMap',
    data() {
      this.chartHandler = bmap
      return {}
    }
  }
}
)
