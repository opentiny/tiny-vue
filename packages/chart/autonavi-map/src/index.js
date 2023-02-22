import './amap'
import { amap } from '@opentiny/vue-renderless/autonavi-map/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartAutonaviMap',
    data() {
      this.chartHandler = amap
      return {}
    }
  }
}
