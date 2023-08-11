<template>
  <div>
    <div>
      <p>日期选择</p>
      <tiny-date-picker v-model="dateValue" label="选择日期"></tiny-date-picker>
    </div>
    <br />
    <div>
      <p>日期范围选择</p>
      <tiny-date-picker v-model="dateRangeValue" label="选择日期范围选择日期范围" type="daterange"></tiny-date-picker>
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
      dateValue: new Date(),
      dateRangeValue: []
    }
  }
}
</script>
