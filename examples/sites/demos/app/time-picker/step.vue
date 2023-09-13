<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value" :step="step"></tiny-time-picker>
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
      step: {
        hour: 2,
        minute: 5
      },
      // 可使用 Math.floor(num * step) * step 来规范初始数据
      // value: new Date(2016, 9, 10, Math.floor(19 / 2) * 2, Math.floor(40 / 5) * 5)
      value: new Date(2016, 9, 10, 18, 40)
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
