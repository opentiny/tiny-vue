import 'echarts-liquidfill'
import { liquidfill } from '@opentiny/vue-renderless/chart-liquidfill/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

export default function ChartLiquidfill(props) {
  return Core({ props, chartHandler: liquidfill, name: $prefix + 'ChartLiquidfill' })
}
