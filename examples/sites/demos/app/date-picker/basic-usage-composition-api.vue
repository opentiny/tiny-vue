<template>
  <div style="width: 270px">
    <tiny-date-picker v-model="value"></tiny-date-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
</script>
