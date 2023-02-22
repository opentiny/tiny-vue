<template>
  <tiny-boxplot ref="chart" :extend="option" @ready-once="init"></tiny-boxplot>
</template>

<script>
import { ChartBoxplot } from '@opentiny/vue'

export default {
  components: {
    TinyBoxplot: ChartBoxplot
  },
  data() {
    return {
      option: {}
    }
  },
  methods: {
    init() {
      let data = this.$refs.chart.prepareBoxplotData([
        [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
        [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
        [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
        [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
        [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
      ])

      this.option = {
        title: [
          {
            text: 'Michelson-Morley Experiment',
            left: 'center'
          },
          {
            text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
            borderColor: '#aaa',
            borderWidth: 2,
            textStyle: {
              fontSize: 16
            },
            left: '15%',
            top: '80%'
          }
        ],
        tooltip: {
          axisPointer: {
            type: 'shadow'
          },
          trigger: 'item'
        },
        grid: {
          left: '12%',
          right: '12%',
          bottom: '13%'
        },
        yAxis: {
          type: 'category',
          boundaryGap: true,
          splitLine: {
            show: false
          },
          data: data.axisData,
          nameGap: 35,
          axisLabel: {
            formatter: 'expr {value}'
          },
          splitArea: {
            show: false
          }
        },
        xAxis: {
          type: 'value',
          splitArea: {
            show: true
          },
          name: 'km/s minus 289,000'
        },
        series: [
          {
            name: 'boxplot',
            data: data.boxData,
            type: 'boxplot',
            tooltip: {
              formatter(params) {
                return [
                  'Experiment ' + params.name + ': ',
                  'upper: ' + params.data[5],
                  'median: ' + params.data[3],
                  'Q3: ' + params.data[4],
                  'Q1: ' + params.data[2],
                  'lower: ' + params.data[1]
                ].join('<br/>')
              }
            }
          },
          {
            type: 'scatter',
            name: 'outlier',
            data: data.outliers
          }
        ]
      }
    }
  }
}
</script>
