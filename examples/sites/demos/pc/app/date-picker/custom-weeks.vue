<template>
  <div>
    <p>默认隐藏周次序号：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value"></tiny-date-picker>
    </div>
  
    <p>显示周次序号：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" show-week-number></tiny-date-picker>
    </div>
  
    <p>自定义周次序号的格式：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" show-week-number :format-weeks="formatWeeks"></tiny-date-picker>
    </div>
    <p>weekFirstDays: {{ eachWeekFirstDay }}</p>
  
    <p>自定义每周第一天是星期几：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :picker-options="pickerOptions"></tiny-date-picker>
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
      eachWeekFirstDay: [],
      value: '',
      pickerOptions: {
        firstDayOfWeek: 1
      }
    }
  },
  methods: {
    formatWeeks(customWeeks, weekFirstDays) {
      this.eachWeekFirstDay = weekFirstDays
      return customWeeks + 'w'
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 280px;
}
</style>
