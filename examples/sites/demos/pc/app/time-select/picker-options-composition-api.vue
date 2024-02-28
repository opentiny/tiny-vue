<template>
  <div class="time-select-demo-picker">
    <tiny-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: '09:00',
        maxTime: '12:30'
      }"
      placeholder="选择时间"
    ></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const value = ref('')
</script>

<style scoped>
.time-select-demo-picker {
  width: 270px;
}
</style>
