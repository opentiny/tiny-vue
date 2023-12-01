<template>
  <div>
    <p>时间默认值</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value" :default-value="defaultValue"></tiny-time-picker>
    </div>
    <p>时间范围默认值</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="rangeValue" is-range :default-value="defaultRangeValue"></tiny-time-picker>
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
      defaultValue: '2020-02-10 18:40',
      value: '',
      defaultRangeValue: ['2016-09-10 18:40', '2016-09-10 18:50'],
      rangeValue: ''
    }
  }
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
