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
      // 水球图文字标签及样式设置
      chartData: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: '上海',
            percent: 0.6
          }
        ]
      },
      chartSettings: {
        seriesMap: {
          上海: {
            color: ['red'],
            itemStyle: {
              opacity: 0.2
            },
            emphasis: {
              itemStyle: {
                opacity: 0.8
              }
            },
            backgroundStyle: {
              color: 'yellow'
            },
            label: {
              formatter(options) {
                const { seriesName, value } = options
                return `${seriesName}\n${value * 100}%`
              },
              fontSize: 40,
              color: 'green',
              insideColor: 'red'
            }
          }
        }
      }
    }
  }
}
</script>
