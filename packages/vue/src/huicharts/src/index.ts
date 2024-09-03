import { ChartRing } from '../huicharts-ring'
import { ChartPie } from '../huicharts-pie'
import { ChartBar } from '../huicharts-bar'
import { ChartHistogram } from '../huicharts-histogram'
import { ChartRadar } from '../huicharts-radar'
import { ChartLine } from '../huicharts-line'

import { AutonaviMap } from '../huicharts-amap'
import { BaiduMap } from '../huicharts-bmap'
import { ChartBoxplot } from '../huicharts-boxplot'
import { ChartCandle } from '../huicharts-candle'
import { ChartFunnel } from '../huicharts-funnel'
import { ChartGauge } from '../huicharts-gauge'
import { ChartGraph } from '../huicharts-graph'
import { ChartHeatmap } from '../huicharts-heatmap'
import { ChartLiquidfill } from '../huicharts-liquidfill'
import { ChartMap } from '../huicharts-map'

import { ChartSankey } from '../huicharts-sankey'
import { ChartScatter } from '../huicharts-scatter'
import { ChartSunburst } from '../huicharts-sunburst'
import { ChartTree } from '../huicharts-tree'
import { ChartWaterfall } from '../huicharts-waterfall'
import { ChartWordcloud } from '../huicharts-wordcloud'

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
