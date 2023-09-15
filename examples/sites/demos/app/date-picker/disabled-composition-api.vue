<template>
  <div>
    <p>整体禁用</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" disabled></tiny-date-picker>
    </div>
    <p>部分禁用</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :picker-options="pickerOptions"></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')

const pickerOptions = {
  disabledDate(time) {
    return time.getTime() > Date.now() || time.getTime() < new Date('2023-09-01').getTime()
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
