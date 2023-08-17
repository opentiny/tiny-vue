<template>
  <div>
    <tiny-time-picker v-model="value1" format="h:m:s A" placeholder="任意时间点"></tiny-time-picker>
    <tiny-time-picker v-model="value1" format="H:m:s A" placeholder="任意时间点"></tiny-time-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
</script>
