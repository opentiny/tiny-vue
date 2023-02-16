<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker
      v-model="value"
      type="datetimerange"
      :default-time="['00:00:00', '23:59:59']"
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
      value: []
    }
  }
}
</script>
