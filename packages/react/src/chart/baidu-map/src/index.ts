import 'echarts/extension/bmap/bmap'
import { bmap } from '@opentiny/vue-renderless/baidu-map/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

export default function ChartBaiduMap(props) {
  return Core({ props, chartHandler: bmap, name: $prefix + 'ChartBaiduMap' })
}
