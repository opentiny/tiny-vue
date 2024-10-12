<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></tiny-date-picker>
    <tiny-date-picker
      v-model="dateTimeValue"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></tiny-date-picker>
    <tiny-date-picker
      v-model="monthValue"
      type="monthrange"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
    ></tiny-date-picker>
    <tiny-date-picker
      v-model="yearValue"
      type="yearrange"
      start-placeholder="开始年份"
      end-placeholder="结束年份"
    ></tiny-date-picker>
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
      dateTimeValue: '',
      monthValue: '',
      yearValue: ''
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  & > * {
    margin-top: 12px;
  }
}
</style>
