<template>
  <div>
    <tiny-time-picker v-model="value1" is-range range-separator="至"></tiny-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const startTime = new Date(2016, 9, 10, 18, 40)
const endTime = new Date(2016, 9, 10, 18, 50)

const value1 = ref([startTime, endTime])
</script>
