<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value" :step="step" placeholder="任意时间点"></tiny-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const step = ref({
  hour: 2,
  minute: 5
})
// 可使用 Math.floor(num * step) * step 来规范初始数据
// value: new Date(2016, 9, 10, Math.floor(19 / 2) * 2, Math.floor(40 / 5) * 5)
const value = ref(new Date(2016, 9, 10, 18, 40))
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 200px;
}
</style>
