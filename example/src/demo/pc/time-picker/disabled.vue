<template>
  <div>
    <tiny-time-picker v-model="value1" :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="任意时间点" disabled></tiny-time-picker>
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
