<template>
  <div>
    <p>打开日期面板，默认显示的日期</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :default-value="defaultDate"></tiny-date-picker>
    </div>
    <p>日期时间(范围)，选择日期之后默认显示的时间(范围)</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="dateTimeValue" type="datetime" :default-time="defaultTime"></tiny-date-picker>
      <tiny-date-picker v-model="dateTimeRangeValue" type="datetimerange" :default-time="defaultTimeRange"></tiny-date-picker>
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
      value: '',
      dateTimeValue: '',
      dateTimeRangeValue: '',
      defaultDate: new Date(2000, 10, 10, 10, 10),
      defaultTime: '09:00:00',
      defaultTimeRange: ['09:00:00', '18:00:00']
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
