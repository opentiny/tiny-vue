<template>
  <div style="width: 270px">
    <p>{{ value }}</p>
    <tiny-date-picker v-model="value" type="datetimerange"></tiny-date-picker>
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
      value: ['2023-11-21T01:11:11.000Z', '2023-12-07T23:08:24.000Z']
    }
  }
}
</script>
