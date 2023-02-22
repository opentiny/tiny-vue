import 'echarts-wordcloud'
import { wordcloud } from '@opentiny/vue-renderless/chart-wordcloud/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartWordcloud',
    data() {
      this.chartHandler = wordcloud
      return {}
    }
  }
}
