<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value1" name="name"></tiny-time-picker>
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
.demo-date-picker-wrap {
  width: 280px;
}
</style>
