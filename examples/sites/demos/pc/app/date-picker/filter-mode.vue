<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker v-model="value" shape="filter" label="日期选择"></tiny-date-picker>
    <tiny-date-picker v-model="rangeValue" type="daterange" shape="filter" label="日期范围选择"></tiny-date-picker>
  </div>
</template>

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: '',
      rangeValue: ''
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
