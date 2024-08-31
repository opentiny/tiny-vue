import { ChartRing } from '@opentiny/vue-huicharts-ring'
import { ChartPie } from '@opentiny/vue-huicharts-pie'
import { ChartBar } from '@opentiny/vue-huicharts-bar'
import { ChartHistogram } from '@opentiny/vue-huicharts-histogram'
import { ChartRadar } from '@opentiny/vue-huicharts-radar'
import { ChartLine } from '@opentiny/vue-huicharts-line'

import { AutonaviMap } from '@opentiny/vue-huicharts-amap'
import { BaiduMap } from '@opentiny/vue-huicharts-bmap'
import { ChartBoxplot } from '@opentiny/vue-huicharts-boxplot'
import { ChartCandle } from '@opentiny/vue-huicharts-candle'
import { ChartFunnel } from '@opentiny/vue-huicharts-funnel'
import { ChartGauge } from '@opentiny/vue-huicharts-gauge'
import { ChartGraph } from '@opentiny/vue-huicharts-graph'
import { ChartHeatmap } from '@opentiny/vue-huicharts-heatmap'
import { ChartLiquidfill } from '@opentiny/vue-huicharts-liquidfill'
import { ChartMap } from '@opentiny/vue-huicharts-map'

import { ChartSankey } from '@opentiny/vue-huicharts-sankey'
import { ChartScatter } from '@opentiny/vue-huicharts-scatter'
import { ChartSunburst } from '@opentiny/vue-huicharts-sunburst'
import { ChartTree } from '@opentiny/vue-huicharts-tree'
import { ChartWaterfall } from '@opentiny/vue-huicharts-waterfall'
import { ChartWordcloud } from '@opentiny/vue-huicharts-wordcloud'

import Core from '@opentiny/vue-huicharts-core'

import { $prefix, defineComponent, h } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'Chart',
  props: {
    ...Core.props,
    type: {
      type: String
    }
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
