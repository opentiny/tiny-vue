<template>
  <div class="demo-date-panel-wrap">
    <div class="value">默认启用面板联动：{{ value }}</div>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-range v-model="value" type="daterange"></tiny-date-range>
    </div>
    <br />

    <div class="value1">关闭面板联动：{{ value1 }}</div>
    <div class="demo-date-picker-wrap">
      <tiny-date-range v-model="value1" type="daterange" unlink-panels></tiny-date-range>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDateRange } from '@opentiny/vue'

const value = ref(['2025-01-15', '2025-02-15'])
const value1 = ref(['2025-01-15', '2025-02-15'])
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;
  & > * {
    margin-top: 12px;
  }
  .tiny-date-range-picker {
    width: 668px;
  }
}
</style>
