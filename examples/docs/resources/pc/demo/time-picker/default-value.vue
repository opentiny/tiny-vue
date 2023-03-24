<template>
  <div>
    <tiny-time-picker
      v-model="value"
      :default-value="value1"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="任意时间点"
      clearable
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
    return {
      value1: new Date(2020, 2, 10, 18, 40),
      value: ''
    }
  }
}
</script>
