<template>
  <div>
    <tiny-time-picker
      is-range
      v-model="value1"
    ></tiny-time-picker>
  </div>
</template>

<script>
import { TimePicker } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker: TimePicker
  },
  data() {
    const startTime = new Date(2016, 9, 10, 18, 40)
    const endTime = new Date(2016, 9, 10, 18, 50)

    return {
      value1: [startTime, endTime]
    }
  }
}
</script>
