import * as echarts from 'echarts/core'
import { DatasetComponent, GridComponent, DataZoomComponent, TransformComponent } from 'echarts/components'
import { BoxplotChart, ScatterChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { prepareBoxplotData } from 'echarts/dist/extension/dataTool'
import { boxplot } from '@opentiny/vue-renderless/chart-boxplot'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([DatasetComponent, GridComponent, DataZoomComponent, TransformComponent, BoxplotChart, ScatterChart, CanvasRenderer, UniversalTransition])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartBoxplot',
    data() {
      this.prepareBoxplotData = prepareBoxplotData
      this.chartHandler = boxplot
      return {}
    }
  }
}
