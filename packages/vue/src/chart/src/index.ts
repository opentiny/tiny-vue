import { ChartRing } from '@opentiny/vue-chart-ring'
import { ChartPie } from '@opentiny/vue-chart-pie'
import { ChartBar } from '@opentiny/vue-chart-bar'
import { ChartHistogram } from '@opentiny/vue-chart-histogram'
import { ChartRadar } from '@opentiny/vue-chart-radar'
import { ChartLine } from '@opentiny/vue-chart-line'

import { AutonaviMap } from '@opentiny/vue-autonavi-map'
import { BaiduMap } from '@opentiny/vue-baidu-map'
import { ChartBoxplot } from '@opentiny/vue-chart-boxplot'
import { ChartCandle } from '@opentiny/vue-chart-candle'
import { ChartFunnel } from '@opentiny/vue-chart-funnel'
import { ChartGauge } from '@opentiny/vue-chart-gauge'
import { ChartGraph } from '@opentiny/vue-chart-graph'
import { ChartHeatmap } from '@opentiny/vue-chart-heatmap'
import { ChartLiquidfill } from '@opentiny/vue-chart-liquidfill'
import { ChartMap } from '@opentiny/vue-chart-map'

import { ChartSankey } from '@opentiny/vue-chart-sankey'
import { ChartScatter } from '@opentiny/vue-chart-scatter'
import { ChartSunburst } from '@opentiny/vue-chart-sunburst'
import { ChartTree } from '@opentiny/vue-chart-tree'
import { ChartWaterfall } from '@opentiny/vue-chart-waterfall'
import { ChartWordcloud } from '@opentiny/vue-chart-wordcloud'

import Core from '@opentiny/vue-chart-core'

import { $prefix, defineComponent, h } from '@opentiny/vue-common'

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
  render() {
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
