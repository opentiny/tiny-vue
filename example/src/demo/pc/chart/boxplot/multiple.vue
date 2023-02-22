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
      let prepareBoxplotData = this.$refs.chart.prepareBoxplotData
      let data = []

      for (let indexKey = 0; indexKey < 5; indexKey++) {
        let seriesData = []

        for (let i = 0; i < 18; i++) {
          let cate = []

          for (let j = 0; j < 100; j++) {
            cate.push(Math.random() * 230)
          }

          seriesData.push(cate)
        }

        data.push(prepareBoxplotData(seriesData))
      }

      this.option = {
        title: {
          text: 'Multiple Categories',
          left: 'center'
        },
        legend: {
          top: '10%',
          data: ['category1', 'category2', 'category3', 'category4']
        },
        tooltip: {
          axisPointer: {
            type: 'shadow'
          },
          trigger: 'item'
        },
        grid: {
          left: '15%',
          top: '25%',
          right: '15%',
          bottom: '20%'
        },
        xAxis: {
          data: data[0].axisData,
          type: 'category',
          nameGap: 40,
          boundaryGap: true,
          axisLabel: {
            formatter: 'expr {value}'
          },
          splitArea: {
            show: true
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          name: 'Value',
          type: 'value',
          min: -420,
          max: 620,
          splitArea: {
            show: false
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 30
          },
          {
            show: true,
            height: 40,
            type: 'slider',
            xAxisIndex: [0],
            top: '96%',
            start: 0,
            end: 40
          }
        ],
        series: [
          {
            name: 'category0',
            type: 'boxplot',
            data: data[0].boxData,
            tooltip: { formatter }
          },
          {
            name: 'category1',
            type: 'boxplot',
            data: data[1].boxData,
            tooltip: { formatter }
          },
          {
            name: 'category2',
            type: 'boxplot',
            data: data[2].boxData,
            tooltip: { formatter }
          }
        ]
      }

      function formatter(params) {
        return [
          'Experiment ' + params.name + ': ',
          'Q1: ' + params.data[1],
          'median: ' + params.data[2],
          'Q3: ' + params.data[3],
          'upper: ' + params.data[0],
          'lower: ' + params.data[4]
        ].join('<br/>')
      }
    }
  }
}
</script>
