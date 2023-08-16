<template>
  <div>
    <tiny-time-picker
      v-model="value1"
      placeholder="任意时间点"
      :picker-options="{
        format: 'HH:mm',
        selectableRange: '18:30:00 - 20:30:00'
      }"
      value-format="timestamp"
    ></tiny-time-picker>
    <span class="select-time">当前选中时间：{{ value1 }}</span>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const startTime = Number(new Date(2016, 9, 10, 18, 30))

const value1 = ref(startTime)
</script>
