import * as echarts from 'echarts/core'
import { MapChart } from 'echarts/charts'
import { map } from '@opentiny/vue-renderless/chart-map/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([MapChart])

export default function ChartMap(props) {
  return Core({ props, chartHandler: map, name: $prefix + 'ChartMap' })
}
