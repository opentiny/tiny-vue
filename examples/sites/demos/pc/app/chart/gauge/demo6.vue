<template>
  <div>
    <tiny-gauge :data="chartData" :settings="chartSettings" :extend="echartsOption" theme-type="ict"></tiny-gauge>
  </div>
</template>

<script>
import { ChartGauge } from '@opentiny/vue'

export default {
  components: {
    TinyGauge: ChartGauge
  },
  data() {
    return {
      chartData: {
        columns: ['type', 'value'],
        rows: [{ type: '占比', value: 40 }]
      },
      echartsOption: {
        series: [
          { type: 'gauge' },
          {
            type: 'gauge',
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            radius: '80%',
            axisLine: {
              lineStyle: {
                color: [[1, '#f2efde']],
                width: 1
              }
            }
          }
        ]
      },
      chartSettings: {
        dataName: {
          占比: 'Average'
        },
        seriesMap: {
          占比: {
            progress: {
              show: false
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            pointer: { show: true, offsetCenter: [0, '-106%'] },
            detail: {
              formatter: '{value}{unit|%}',
              rich: {
                value: { fontSize: 60, color: '#191919' },
                unit: { fontSize: 12, color: '#4E4E4E', padding: [0, 0, -20, 0] }
              }
            },
            splitNumber: 4,
            axisLine: {
              lineStyle: {
                color: [
                  [0.25, '#2da769'],
                  [0.5, '#eeba18'],
                  [0.75, '#ec6f1a'],
                  [1, '#f43146']
                ]
              }
            }
          }
        }
      }
    }
  }
}
</script>
