<template>
  <tiny-chart-line :data="chartData">
    <div class="data-empty">没有数据😂</div>
  </tiny-chart-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ChartLine as TinyChartLine } from '@opentiny/vue'

const chartData = ref({
  columns: ['日期', '成本', '利润'],
  rows: []
})
</script>

<style scoped>
.data-empty {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  color: #888;
  font-size: 14px;
}
</style>
