<template>
  <div class="demo-date-picker-options">
    <tiny-time-picker
      v-model="value1"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="任意时间点"
    ></tiny-time-picker>
  </div>
</template>

<script>
import { TinyTimePicker } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker
  },
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40)
    }
  }
}
</script>

<style scoped>
.demo-date-picker-options {
  width: 280px;
}
</style>
