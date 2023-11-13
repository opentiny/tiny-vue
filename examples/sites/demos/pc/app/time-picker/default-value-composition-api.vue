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

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const defaultValue = ref('2020-02-10 18:40')
const value = ref('')

const defaultRangeValue = ref(['2016-09-10 18:40', '2016-09-10 18:50'])
const rangeValue = ref('')
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
