<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker :step="step" v-model="value" type="datetimerange"></tiny-date-picker>
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
      step: {
        hour: 2,
        minute: 5
      },
      value: []
    }
  }
}
</script>
