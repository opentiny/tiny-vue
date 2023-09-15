<template>
  <tiny-date-picker v-model="value" :suffix-icon="IconMinus" popper-class="Mydatepicker"></tiny-date-picker>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

const value = ref('')
const IconMinus = iconMinus()
</script>
