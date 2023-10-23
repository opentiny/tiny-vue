<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value" :default-value="value1"></tiny-time-picker>
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
      value1: new Date(2020, 2, 10, 18, 40),
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
