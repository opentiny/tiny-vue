<template>
  <div>
    <p>滚动选择时间</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1"></tiny-time-picker>
    </div>

    <p>箭头选择时间</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1" arrow-control></tiny-time-picker>
    </div>
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

<style scoped>
.demo-date-picker-wrap {
  width: 200px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
