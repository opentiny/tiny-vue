<template>
  <div>
    <p><button @click="addData">添加一条数据</button></p>
    <tiny-line :options="options" :width-change-delay="300"></tiny-line>
  </div>
</template>

<script lang="jsx">
import { TinyHuichartsLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: TinyHuichartsLine
  },
  data() {
    return {
      options: {
        padding: [50, 30, 50, 20],
        legend: {
          show: true,
          icon: 'line'
        },
        data: [
          { Day: '1 月 4 日', Domestics: 33, Abroad: 37 },
          { Day: '1 月 5 日', Domestics: 27, Abroad: 39 },
          { Day: '1 月 6 日', Domestics: 31, Abroad: 20 },
          { Day: '1 月 7 日', Domestics: 30, Abroad: 15 },
          { Day: '1 月 8 日', Domestics: 37, Abroad: 13 },
          { Day: '1 月 9 日', Domestics: 36, Abroad: 17 },
          { Day: '1 月 10 日', Domestics: 42, Abroad: 22 },
          { Day: '1 月 11 日', Domestics: 22, Abroad: 12 },
          { Day: '1 月 12 日', Domestics: 17, Abroad: 30 },
          { Day: '1 月 13 日', Domestics: 40, Abroad: 33 },
          { Day: '1 月 14 日', Domestics: 42, Abroad: 22 },
          { Day: '1 月 15 日', Domestics: 32, Abroad: 11 }
        ],
        xAxis: {
          data: 'Day'
        },
        yAxis: {
          name: 'Percentage(%)'
        }
      }
    }
  },
  methods: {
    addData() {
      this.options.data.push({
        Day: `1 月${this.options.data.length + 1}日`,
        Domestics: Math.ceil(50 * Math.random()),
        Abroad: Math.ceil(50 * Math.random())
      })
    }
  }
}
</script>
