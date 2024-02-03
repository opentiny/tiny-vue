import { ChartBar } from '@opentiny/vue-chart-bar-beta/index'
import { ChartHistogram } from '@opentiny/vue-chart-histogram-beta/index'
import { ChartLine } from '@opentiny/vue-chart-line-beta/index'
import { ChartPie } from '@opentiny/vue-chart-pie-beta/index'
import { ChartRing } from '@opentiny/vue-chart-ring-beta/index'
import { ChartRadar } from '@opentiny/vue-chart-radar-beta/index'

import { $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  ...{
    name: $prefix + 'Chart',
    data() {
      this.chartLib = {
        ChartBar,
        ChartHistogram,
        ChartLine,
        ChartPie,
        ChartRing,
        ChartRadar
      }
      this.chartHandler = this.chartLib[this.settings.type]
      return {}
    }
  }
})
