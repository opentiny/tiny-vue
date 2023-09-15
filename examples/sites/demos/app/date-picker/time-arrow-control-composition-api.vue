<template>
  <div style="width: 270px">
    <tiny-date-picker v-model="value" type="datetime" time-arrow-control></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
</script>
