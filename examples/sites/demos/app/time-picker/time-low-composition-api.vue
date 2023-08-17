<template>
  <div>
    <tiny-time-picker v-model="value1" format="hh:mm:ss a" placeholder="任意时间点"></tiny-time-picker>
    <tiny-time-picker v-model="value1" format="HH:mm:ss a" placeholder="任意时间点"></tiny-time-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
</script>
