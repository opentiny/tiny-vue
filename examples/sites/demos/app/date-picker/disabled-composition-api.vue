<template>
  <tiny-date-picker v-model="value" disabled></tiny-date-picker>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
</script>
