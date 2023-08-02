<template>
  <div>
    <tiny-time-picker
      is-range
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    ></tiny-time-picker>
  </div>
</template>

<script lang="jsx">
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
