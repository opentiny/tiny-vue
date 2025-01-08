import { HuiChartsPie } from '@opentiny/vue-huicharts-pie'
import { HuiChartsRing } from '@opentiny/vue-huicharts-ring'
import { HuiChartsBar } from '@opentiny/vue-huicharts-bar'
import { HuiChartsHistogram } from '@opentiny/vue-huicharts-histogram'
import { HuiChartsRadar } from '@opentiny/vue-huicharts-radar'
import { HuiChartsLine } from '@opentiny/vue-huicharts-line'

import { AutonaviMap } from '@opentiny/vue-huicharts-amap'
import { BaiduMap } from '@opentiny/vue-huicharts-bmap'
import { HuiChartsBoxplot } from '@opentiny/vue-huicharts-boxplot'
import { HuiChartsCandle } from '@opentiny/vue-huicharts-candle'
import { HuiChartsFunnel } from '@opentiny/vue-huicharts-funnel'
import { HuiChartsGauge } from '@opentiny/vue-huicharts-gauge'
import { HuiChartsGraph } from '@opentiny/vue-huicharts-graph'
import { HuiChartsHeatmap } from '@opentiny/vue-huicharts-heatmap'
import { HuiChartsLiquidfill } from '@opentiny/vue-huicharts-liquidfill'
import { HuiChartsMap } from '@opentiny/vue-huicharts-map'

import { HuiChartsSankey } from '@opentiny/vue-huicharts-sankey'
import { HuiChartsScatter } from '@opentiny/vue-huicharts-scatter'
import { HuiChartsSunburst } from '@opentiny/vue-huicharts-sunburst'
import { HuiChartsTree } from '@opentiny/vue-huicharts-tree'
import { HuiChartsWaterfall } from '@opentiny/vue-huicharts-waterfall'
import { HuiChartsWordcloud } from '@opentiny/vue-huicharts-wordcloud'

import Core from '@opentiny/vue-huicharts-core'

import { $prefix, defineComponent, h } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'HuiCharts',
  props: {
    ...Core.props,
    type: {
      type: String
    }
  },
  data() {
    this.chartLib = {
      bar: HuiChartsBar,
      histogram: HuiChartsHistogram,
      line: HuiChartsLine,
      pie: HuiChartsPie,
      ring: HuiChartsRing,
      radar: HuiChartsRadar,
      autonaviMap: AutonaviMap,
      baiduMap: BaiduMap,
      boxplot: HuiChartsBoxplot,
      candle: HuiChartsCandle,
      funnel: HuiChartsFunnel,
      gauge: HuiChartsGauge,
      graph: HuiChartsGraph,
      heatmap: HuiChartsHeatmap,
      liquidfill: HuiChartsLiquidfill,
      map: HuiChartsMap,
      sankey: HuiChartsSankey,
      scatter: HuiChartsScatter,
      sunburst: HuiChartsSunburst,
      tree: HuiChartsTree,
      waterfall: HuiChartsWaterfall,
      wordcloud: HuiChartsWordcloud
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
        h(this.chartLib[this.settings.type || this.type], {
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
