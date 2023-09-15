<template>
  <tiny-date-picker v-model="value" type="daterange" :editable="false"></tiny-date-picker>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref([])
</script>
