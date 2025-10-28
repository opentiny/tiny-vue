<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value" format="yyyy/MM/dd"></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range type="daterange" v-model="value1" format="yyyy/MM/dd"></tiny-date-range>
    <div class="value2">{{ value2 }}</div>
    <tiny-month-range v-model="value2" format="yyyy/MM"></tiny-month-range>
  </div>
</template>

<script>
import { TinyDatePanel, TinyDateRange, TinyMonthRange } from '@opentiny/vue'

export default {
  components: {
    TinyDatePanel,
    TinyDateRange,
    TinyMonthRange
  },
  data() {
    return {
      value: '2025/01/15',
      value1: ['2025/01/15', '2025/02/15'],
      value2: ['2024/03', '2025/02']
    }
  }
}
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
