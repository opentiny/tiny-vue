<template>
  <div>
    <p>日期组件</p>
    <tiny-date-picker v-model="value1" type="date" placeholder="请选择日期 placeholder"></tiny-date-picker>

    <br />
    <p>日期范围选择组件</p>
    <tiny-date-picker
      v-model="value2"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期 start"
      end-placeholder="结束日期 end"
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
      value1: '',
      value2: []
    }
  }
}
</script>
