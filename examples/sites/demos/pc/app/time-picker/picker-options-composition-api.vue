<template>
  <div class="demo-date-picker-options">
    <tiny-time-picker
      v-model="value1"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="任意时间点"
    ></tiny-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
</script>

<style scoped>
.demo-date-picker-options {
  width: 240px;
}
</style>
