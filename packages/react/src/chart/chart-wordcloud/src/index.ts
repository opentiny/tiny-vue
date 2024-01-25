import 'echarts-wordcloud'
import { wordcloud } from '@opentiny/vue-renderless/chart-wordcloud/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

export default function ChartWordcloud(props) {
  return Core({ props, chartHandler: wordcloud, name: $prefix + 'ChartWordcloud' })
}
