<template>
  <div class="demo-time-picker-wrap">
    <tiny-time-picker v-model="value1" is-range></tiny-time-picker>
  </div>
</template>

<script>
import { TinyTimePicker } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker
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

<style scoped lang="less">
.demo-time-picker-wrap {
  width: 280px;
}
</style>
