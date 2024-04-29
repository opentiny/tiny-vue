<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'

export default {
  name: 'ChartProcess',
  mixins: [Core],

  data() {
    return {
      iChartName: 'ProcessChart'
    }
  },
  methods: {
    updateChart() {
      this.option = { ...this.options }
    }
  }
}
</script>
