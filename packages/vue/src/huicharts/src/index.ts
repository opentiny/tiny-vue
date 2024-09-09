import { HuiChartsRing } from '../huicharts-ring'
import { HuiChartsPie } from '../huicharts-pie'
import { HuiChartsBar } from '../huicharts-bar'
import { HuiChartsHistogram } from '../huicharts-histogram'
import { HuiChartsRadar } from '../huicharts-radar'
import { HuiChartsLine } from '../huicharts-line'

import { AutonaviMap } from '../huicharts-amap'
import { BaiduMap } from '../huicharts-bmap'
import { HuiChartsBoxplot } from '../huicharts-boxplot'
import { HuiChartsCandle } from '../huicharts-candle'
import { HuiChartsFunnel } from '../huicharts-funnel'
import { HuiChartsGauge } from '../huicharts-gauge'
import { HuiChartsGraph } from '../huicharts-graph'
import { HuiChartsHeatmap } from '../huicharts-heatmap'
import { HuiChartsLiquidfill } from '../huicharts-liquidfill'
import { HuiChartsMap } from '../huicharts-map'

import { HuiChartsSankey } from '../huicharts-sankey'
import { HuiChartsScatter } from '../huicharts-scatter'
import { HuiChartsSunburst } from '../huicharts-sunburst'
import { HuiChartsTree } from '../huicharts-tree'
import { HuiChartsWaterfall } from '../huicharts-waterfall'
import { HuiChartsWordcloud } from '../huicharts-wordcloud'

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
