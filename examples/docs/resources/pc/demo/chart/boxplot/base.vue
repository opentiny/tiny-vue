<template>
  <tiny-boxplot :data="chartData" :settings="chartSettings" :extend="extend"></tiny-boxplot>
</template>

<script lang="jsx">
import { ChartBoxplot } from '@opentiny/vue'

export default {
  components: {
    TinyBoxplot: ChartBoxplot
  },
  data() {
    return {
      chartSettings: {
        tooltipLabel: ['下限', '下四分位数', '中位数', '上四分位数', '上限']
      },
      chartData: [
        [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
        [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
        [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
        [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
        [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
      ],
      extend: {
        title: [
          {
            text: 'Michelson-Morley Experiment',
            left: 'center'
          },
          {
            text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
            borderColor: '#999',
            borderWidth: 1,
            textStyle: {
              fontSize: 14
            },
            left: '10%',
            top: '90%'
          }
        ],
        xAxis: {
          axisLabel: {
            formatter: 'expr {value}'
          }
        }
      }
    }
  }
}
</script>
