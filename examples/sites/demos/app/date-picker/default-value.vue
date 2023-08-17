<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker v-model="value" :default-value="defaultDate" style="width: 270px"></tiny-date-picker>
  </div>
</template>

<script lang="jsx">
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: new Date(2000, 10, 10, 10, 10),
      defaultDate: new Date()
    }
  }
}
</script>
