<template>
  <div>
    <p>滚动选择时间</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1"></tiny-time-picker>
    </div>

    <p>箭头选择时间</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1" arrow-control></tiny-time-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
