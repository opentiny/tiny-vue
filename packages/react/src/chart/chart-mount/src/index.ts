import * as echarts from 'echarts/core'
import { PictorialBarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { mount } from '@opentiny/vue-renderless/chart-mount/index'
import Core from '@opentiny/react-chart-core'
import { $prefix } from '@opentiny/react-common'

echarts.use([PictorialBarChart, CanvasRenderer])

export default function ChartMount(props) {
  return Core({ props, chartHandler: mount, name: $prefix + 'ChartMount' })
}
