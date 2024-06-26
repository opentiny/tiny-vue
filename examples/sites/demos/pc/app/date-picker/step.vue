<template>
  <div>
    <p>步长：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime" :step="step"></tiny-date-picker>
    </div>
    <br />

    <p>箭头控制：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="datetime" time-arrow-control></tiny-date-picker>
    </div>
  </div>
</template>

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      step: {
        hour: 2,
        minute: 5
      },
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 280px;
}
</style>
