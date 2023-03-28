import './amap'
import { amap } from '@opentiny/vue-renderless/autonavi-map/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  ...Core,
  ...{
    name: $prefix + 'ChartAutonaviMap',
    data() {
      this.chartHandler = amap
      return {}
    }
  }
}
)
