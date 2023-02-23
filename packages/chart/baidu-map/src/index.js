import 'echarts/extension/bmap/bmap'
import { bmap } from '@opentiny/vue-renderless/baidu-map/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartBaiduMap',
    data() {
      this.chartHandler = bmap
      return {}
    }
  }
}
