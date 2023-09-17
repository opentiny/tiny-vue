<template>
  <div>
    <p>整体禁用</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="disabledValue" disabled placeholder="请选择日期"></tiny-date-picker>
    </div>
    <p>部分禁用</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :picker-options="pickerOptions" placeholder="请选择日期"></tiny-date-picker>
    </div>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker
        v-model="dateRangeValue"
        type="daterange"
        :picker-options="pickerOptions"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></tiny-date-picker>
    </div>
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
      disabledValue: '',
      value: '',
      dateRangeValue: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() || time.getTime() < new Date('2023-08-01').getTime()
        }
      }
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
