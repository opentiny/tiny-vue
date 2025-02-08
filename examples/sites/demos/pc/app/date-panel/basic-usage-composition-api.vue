<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value"></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range type="daterange" v-model="value1"></tiny-date-range>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel, TinyDateRange } from '@opentiny/vue'

const value = ref('2025-01-15')
const value1 = ref(['2025-01-15', '2025-02-15'])
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;

  & > * {
    margin-top: 12px;
  }
  tiny-date-range-picker {
    width: 668px;
  }
}
</style>
