<template>
  <div>
    <tiny-scatter :data="chartData" :settings="chartSettings"></tiny-scatter>
  </div>
</template>

<script lang="jsx">
import { ChartScatter } from '@opentiny/vue'

export default {
  components: {
    TinyScatter: ChartScatter
  },
  data() {
    return {
      // 散点出现覆盖时, 提示框可以改成通过坐标轴触发
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '年龄'],
        rows: {
          上海: [
            { 日期: '1/1', 访问用户: 1230, 年龄: 3, 下单用户: 1244 },
            { 日期: '1/2', 访问用户: 1223, 年龄: 6, 下单用户: 2344 },
            { 日期: '1/3', 访问用户: 7123, 年龄: 9, 下单用户: 3245 },
            { 日期: '1/4', 访问用户: 4123, 年龄: 12, 下单用户: 4355 },
            { 日期: '1/5', 访问用户: 3123, 年龄: 15, 下单用户: 4564 },
            { 日期: '1/6', 访问用户: 2323, 年龄: 20, 下单用户: 6537 }
          ],
          北京: [
            { 日期: '1/1', 访问用户: 1230, 年龄: 3, 下单用户: 1244 },
            { 日期: '1/2', 访问用户: 1273, 年龄: 6, 下单用户: 2344 },
            { 日期: '1/3', 访问用户: 3123, 年龄: 15, 下单用户: 4564 },
            { 日期: '1/4', 访问用户: 2123, 年龄: 9, 下单用户: 3245 },
            { 日期: '1/5', 访问用户: 4103, 年龄: 12, 下单用户: 4355 },
            { 日期: '1/6', 访问用户: 7123, 年龄: 10, 下单用户: 3567 }
          ]
        }
      },
      chartSettings: {
        tooltipTrigger: 'axis'
      }
    }
  }
}
</script>
