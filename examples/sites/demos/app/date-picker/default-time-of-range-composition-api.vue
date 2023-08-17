<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker v-model="value" type="datetimerange" :default-time="['00:00:00', '23:59:59']"></tiny-date-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref([new Date(2023, 4, 15), new Date(2023, 4, 21)])
</script>
