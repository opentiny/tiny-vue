import './amap'
import { amap } from '@opentiny/vue-renderless/autonavi-map/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

export default function ChartAutonaviMap(props) {
  return Core({ props, chartHandler: amap, name: $prefix + 'ChartAutonaviMap' })
}
