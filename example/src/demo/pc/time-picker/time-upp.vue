<template>
  <div>
    <tiny-time-picker v-model="value1" format="h:m:s A" placeholder="任意时间点"></tiny-time-picker>
    <tiny-time-picker v-model="value1" format="H:m:s A" placeholder="任意时间点"></tiny-time-picker>
  </div>
</template>

<script>
import { TimePicker } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker: TimePicker
  },
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40)
    }
  }
}
</script>
