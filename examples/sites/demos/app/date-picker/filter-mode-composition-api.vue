<template>
  <div style="width: 270px">
    <tiny-date-picker v-model="value" shape="filter" label="日期选择"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
</script>
