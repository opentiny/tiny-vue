<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value1" :suffix-icon="IconMinus"></tiny-time-picker>
  </div>
</template>

<script>
import { TimePicker } from '@opentiny/vue'
import { IconMinus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimePicker: TimePicker
  },
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      IconMinus: IconMinus()
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
