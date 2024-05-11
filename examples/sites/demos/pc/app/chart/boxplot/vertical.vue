<template>
  <tiny-boxplot ref="chart" :options="options"></tiny-boxplot>
</template>

<script lang="jsx">
import { ChartBoxplot } from '@opentiny/vue'

export default {
  components: {
    TinyBoxplot: ChartBoxplot
  },
  data() {
    return {
      sourceData0: makeData(),
      sourceData1: makeData(),
      sourceData2: makeData(),
      options: {
        padding: [50, 30, 55, 20],
        xAxis: {
          axisLabel: {
            formatter: 'expr {value}'
          }
        },
        yAxis: {
          min: -400,
          max: 600
        },
        legend: {
          shwo: true,
          position: {
            top: 15,
            right: 'center'
          }
        },
        dataZoom: {
          show: true,
          start: 0,
          end: 20,
          position: {
            left: 40,
            bottom: 18
          }
        },
        dataset: [
          {
            source: sourceData0
          },
          {
            source: sourceData1
          },
          {
            source: sourceData2
          },
          {
            fromDatasetIndex: 0,
            transform: { 'type': 'boxplot' }
          },
          {
            fromDatasetIndex: 1,
            transform: { 'type': 'boxplot' }
          },
          {
            fromDatasetIndex: 2,
            transform: { 'type': 'boxplot' }
          }
        ],
        series: [
          {
            name: 'category_0',
            type: 'boxplot',
            datasetIndex: 3
          },
          {
            name: 'category_1',
            type: 'boxplot',
            datasetIndex: 4
          },
          {
            name: 'category_2',
            type: 'boxplot',
            datasetIndex: 5
          }
        ],
        tipHtml: (params) => {
          const { data, color, seriesName } = params
          const labels = ['lower', 'Q3', 'median', 'Q1', 'upper']
          let htmlString = `<div style="font-weight:bold">${seriesName}</div>`
          let arr = []
          labels.forEach((item, index) => {
            let string = `<div>
        <span style="display:inline;width:10px;height:10px;
        margin-right:4px; border-radius:5px;border-style:solid;border-width: 1px
        border-color:${color};background-color:${color};></span>
        <span style="display:inline-block;width:90px">${item}:</span><span>${data[index + 1]}</span>
        </div>`
            arr.push(string)
          })
          htmlString += arr.join('')
          return htmlString
        }
      }
    }
  },
  methods: {
    makeData() {
      let data = []
      for (let i = 0; i < 18; i++) {
        let cate = []
        for (let j = 0; j < 100; j++) {
          cate.push(parseFloat('0.' + window.crypto.getRandomValues(new Uint32Array(1))[0]) * 200)
        }
        data.push(cate)
      }
      return data
    }
  }
}
</script>
