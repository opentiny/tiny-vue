<template>
  <div>
    <p>日期值：{{ value }}</p>
    <tiny-date-picker :step="step" v-model="value" type="datetimerange"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const step = ref({
  hour: 2,
  minute: 5
})
const value = ref([])
</script>
