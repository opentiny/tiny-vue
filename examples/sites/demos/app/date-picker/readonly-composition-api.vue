<template>
  <tiny-date-picker v-model="value" readonly></tiny-date-picker>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('2020/10/29')
</script>
