<template>
  <tiny-time-picker
    v-model="value1"
    placeholder="任意时间点"
    :picker-options="{
      format: 'HH:mm',
      selectableRange: '18:30:00 - 20:30:00'
    }"
    value-format="timestamp"
  ></tiny-time-picker>
</template>

<script>
import { TimePicker } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker: TimePicker
  },
  data() {
    const startTime = new Date(2016, 9, 10, 18, 30)

    return {
      value1: startTime
    }
  }
}
</script>
