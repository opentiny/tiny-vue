<template>
  <tiny-date-picker v-model="value" type="monthrange" :picker-options="maxOptions"></tiny-date-picker>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
const maxOptions = ref({
  disabledDate(time) {
    return time.getTime() > Date.now()
  }
})
</script>
