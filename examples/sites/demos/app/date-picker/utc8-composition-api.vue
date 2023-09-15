<template>
  <tiny-date-picker
    v-model="referenceDate"
    type="datetime"
    :isutc8="true"
    format="yyyy-MM-dd HH:mm:ss"
  ></tiny-date-picker>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const referenceDate = ref('2020-10-28T00:00:00.000+0800')
</script>
