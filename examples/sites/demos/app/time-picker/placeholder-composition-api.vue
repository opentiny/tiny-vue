<template>
  <div>
    <p>选择时间</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value" placeholder="请选择时间"></tiny-time-picker>
    </div>

    <p>选择时间范围</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker
        v-model="rangeValue"
        is-range
        start-placeholder="请选择开始时间"
        end-placeholder="请选择结束时间"
      ></tiny-time-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value = ref('')
const rangeValue = ref(['', ''])
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
