<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
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
