<template>
  <div>
    <tiny-liquidfill :data="chartData" :settings="chartSettings"></tiny-liquidfill>
  </div>
</template>

<script>
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
        wave: [[0.4, 0.3, 0.1], [0.5, 0.2], []],
        seriesMap: [
          {
            color: ['red', 'blue', 'yellow'],
            label: {
              formatter(params) {
                const {
                  seriesName,
                  data: { value }
                } = params
                return `${seriesName}\n${value}`
              },
              fontSize: 35
            },
            center: ['24%', '20%'],
            radius: '40%',
            waveAnimation: false
          },
          {
            label: {
              formatter(params) {
                return `${params.seriesName}\n${params.data.value}`
              },
              fontSize: 30
            },
            center: ['30%', '65%'],
            radius: '35%'
          },
          {
            label: {
              fontSize: 30
            },
            center: ['60%', '30%'],
            radius: '50%',
            waveAnimation: false
          }
        ]
      }
    }
  }
}
</script>
