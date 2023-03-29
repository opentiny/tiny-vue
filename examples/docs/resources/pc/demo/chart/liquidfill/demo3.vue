<template>
  <div>
    <tiny-liquidfill :data="chartData" :settings="chartSettings"></tiny-liquidfill>
  </div>
</template>

<script lang="jsx">
import { ChartLiquidfill } from '@opentiny/vue'

export default {
  components: {
    TinyLiquidfill: ChartLiquidfill
  },
  data() {
    return {
      // 设置多个水球图
      chartData: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: '上海',
            percent: 0.6
          },
          {
            city: '广州',
            percent: 0.4
          },
          {
            city: '成都',
            percent: 0.9
          }
        ]
      },
      chartSettings: {
        wave: [[0.5, 0.3, 0.1], [0.3, 0.2], []],
        seriesMap: [
          {
            color: ['red', 'green', 'yellow'],
            label: {
              formatter(options) {
                const {
                  seriesName,
                  data: { value }
                } = options
                return `${seriesName}\n${value}`
              },
              fontSize: 30
            },
            center: ['24%', '20%'],
            radius: '40%',
            waveAnimation: false
          },
          {
            label: {
              formatter(options) {
                return `${options.seriesName}\n${options.data.value}`
              },
              fontSize: 30
            },
            center: ['25%', '70%'],
            radius: '40%'
          },
          {
            label: {
              fontSize: 30
            },
            center: ['70%', '50%'],
            radius: '40%',
            waveAnimation: false
          }
        ]
      }
    }
  }
}
</script>
