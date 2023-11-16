<template>
  <div :class="[camelToKebab($options.name || $options._componentTag)]" :style="state.canvasStyle">
    <div ref="canvas" :class="{ 'tiny-chart-mask-status': dataEmpty || loading }" :style="state.canvasStyle"></div>
    <div class="tiny-chart-data-empty" :style="{ display: dataEmpty ? '' : 'none' }">
      {{ t('ui.chart.emptyText') }}
    </div>
    <div class="tiny-chart-component-loading" :style="{ display: loading ? '' : 'none' }">
      <div class="loader">
        <div class="loading-spinner">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" />
          </svg>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/chart-core/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import * as echartsLib from 'echarts'
import * as echarts from 'echarts/core'
import { TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components'
import { appProperties } from '@opentiny/vue-common'
echarts.use([TooltipComponent, LegendComponent, TitleComponent])

export default defineComponent({
  name: $prefix + 'ChartCore',
  props: {
    afterConfig: { type: Function },
    afterSetOption: { type: Function },
    afterSetOptionOnce: { type: Function },
    animation: Object,
    axisPointer: [Object, Array],
    backgroundColor: [Object, String],
    beforeConfig: { type: Function },
    brush: [Object, Array],
    cancelResizeCheck: Boolean,
    changeDelay: { type: Number, default: 0 },
    colors: { type: Array },
    data: {
      type: [Object, Array],
      default() {
        return {}
      }
    },
    dataEmpty: Boolean,
    dataZoom: { type: [Object, Array] },
    events: { type: Object },
    extend: Object,
    geo: [Object, Array],
    graphic: [Object, Array],
    grid: { type: [Object, Array] },
    height: { type: String, default: '400px' },
    initOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    judgeWidth: { type: Boolean, default: false },
    legend: [Object, Array],
    legendPosition: { type: String },
    legendVisible: { type: Boolean, default: true },
    loading: Boolean,
    markArea: { type: Object },
    markLine: { type: Object },
    markPoint: { type: Object },
    notSetUnchange: Array,
    radar: Object,
    resizeDelay: { type: Number, default: 200 },
    resizeable: { type: Boolean, default: true },
    series: [Object, Array],
    setOptionOpts: { type: [Boolean, Object], default: true },
    settings: {
      type: Object,
      default() {
        return {}
      }
    },
    textStyle: [Object, Array],
    theme: {
      type: Object,
      default: () => {
        const ctx = appProperties()

        return ctx.tiny_chart_theme ? ctx.tiny_chart_theme.value : null
      }
    },
    themeName: [Object, String],
    timeline: [Object, Array],
    title: [Object, Array],
    toolbox: { type: [Object, Array] },
    tooltip: Object,
    tooltipFormatter: { type: Function },
    tooltipVisible: { type: Boolean, default: true },
    visualMap: { type: [Object, Array] },
    width: { type: String, default: 'auto' },
    widthChangeDelay: { type: Number, default: 300 },
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    colorMode: {
      type: String,
      default: ''
    }
  },
  emits: ['ready', 'ready-once', 'handle-color'],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      extendOptions: { echartsLib }
    })
  }
})
</script>
