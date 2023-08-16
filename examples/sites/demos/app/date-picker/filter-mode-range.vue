<template>
  <div style="width: 270px">
    <tiny-date-picker v-model="value" type="daterange" shape="filter" label="日期范围选择"></tiny-date-picker>
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
      value: []
    }
  }
}
</script>
