<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker v-model="value" :default-value="defaultDate" style="width: 270px"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref(new Date(2000, 10, 10, 10, 10))
const defaultDate = ref(new Date())
</script>
