<template>
  <tiny-tabs v-model="activeName" tab-style="card">
    <tiny-tab-item title="条形图组件" name="first">
      <tiny-bar ref="firstChart" :data="chartData"></tiny-bar>
    </tiny-tab-item>
    <tiny-tab-item title="油量表组件" name="second">
      <tiny-gauge ref="secondChart" :data="chartData1"></tiny-gauge>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { Tabs, TabItem, ChartBar, ChartGauge } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    TinyBar: ChartBar,
    TinyGauge: ChartGauge
  },
  data() {
    return {
      activeName: 'second',
      chartData: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { 日期: '1-1', 余额: 123, 年龄: 3 },
          { 日期: '1-2', 余额: 1223, 年龄: 6 },
          { 日期: '1-3', 余额: 2123, 年龄: 9 },
          { 日期: '1-4', 余额: 4123, 年龄: 12 },
          { 日期: '1-5', 余额: 3123, 年龄: 15 },
          { 日期: '1-6', 余额: 7123, 年龄: 20 }
        ]
      },
      chartData1: {
        columns: ['type', 'value'],
        rows: [{ type: '油量', value: 123 }]
      }
    }
  },
  watch: {
    activeName(v) {
      this.$nextTick(() => {
        this.$refs[`${v}Chart`].resize()
        // 或者通过 echarts 实例调用 echarts 的 resize() 方法
        // this.$refs[`chart${v}`].state.echarts.resize()
      })
    }
  }
}
</script>
