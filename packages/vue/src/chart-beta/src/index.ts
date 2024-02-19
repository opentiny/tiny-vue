import { ChartRing } from '@opentiny/vue-chart-ring-beta'
import { ChartPie } from '@opentiny/vue-chart-pie-beta'
import { ChartBar } from '@opentiny/vue-chart-bar-beta'
import { ChartHistogram } from '@opentiny/vue-chart-histogram-beta'
import { ChartRadar } from '@opentiny/vue-chart-radar-beta'
import { ChartLine } from '@opentiny/vue-chart-line-beta'

import { AutonaviMap } from '@opentiny/vue-autonavi-map-beta'
import { BaiduMap } from '@opentiny/vue-baidu-map-beta'
import { ChartBoxplot } from '@opentiny/vue-chart-boxplot-beta'
import { ChartCandle } from '@opentiny/vue-chart-candle-beta'
import { ChartFunnel } from '@opentiny/vue-chart-funnel-beta'
import { ChartGauge } from '@opentiny/vue-chart-gauge-beta'
import { ChartGraph } from '@opentiny/vue-chart-graph-beta'
import { ChartHeatmap } from '@opentiny/vue-chart-heatmap-beta'

import { ChartLiquidfill } from '@opentiny/vue-chart-liquidfill-beta'
import { ChartMap } from '@opentiny/vue-chart-map-beta'

import { ChartSankey } from '@opentiny/vue-chart-sankey-beta'
import { ChartScatter } from '@opentiny/vue-chart-scatter-beta'
import { ChartSunburst } from '@opentiny/vue-chart-sunburst-beta'
import { ChartTree } from '@opentiny/vue-chart-tree-beta'
import { ChartWaterfall } from '@opentiny/vue-chart-waterfall-beta'
import { ChartWordcloud } from '@opentiny/vue-chart-wordcloud-beta'

import Core from '@opentiny/vue-chart-core-beta'

import { $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'Chart',
  props: {
    ...Core.props
  },
  data() {
    this.chartLib = {
      bar: ChartBar,
      histogram: ChartHistogram,
      line: ChartLine,
      pie: ChartPie,
      ring: ChartRing,
      radar: ChartRadar,
      autonaviMap: AutonaviMap,
      baiduMap: BaiduMap,
      boxplot: ChartBoxplot,
      candle: ChartCandle,
      funnel: ChartFunnel,
      gauge: ChartGauge,
      graph: ChartGraph,
      heatmap: ChartHeatmap,
      liquidfill: ChartLiquidfill,
      map: ChartMap,
      sankey: ChartSankey,
      scatter: ChartScatter,
      sunburst: ChartSunburst,
      tree: ChartTree,
      waterfall: ChartWaterfall,
      wordcloud: ChartWordcloud
    }
    return {}
  },
  methods: {
    ready(val) {
      this.$emit('ready', val)
    },
    readyOnce(val) {
      this.$emit('readyOnce', val)
    },
    handleColor(val) {
      this.$emit('handle-color', val)
    },
    ...Core.methods
  },
  render(h) {
    return h(
      'div',
      {
        style: {
          width: this.width,
          height: this.height,
          position: 'relative'
        }
      },
      [
        h(this.chartLib[this.settings.type], {
          props: {
            ...this.$props
          },
          on: {
            ready: this.ready,
            readyOnce: this.readyOnce,
            handleColor: this.handleColor
          }
        }),

        // eslint-disable-next-line vue/require-slots-as-functions
        this.$slots.default
      ]
    )
  }
})
