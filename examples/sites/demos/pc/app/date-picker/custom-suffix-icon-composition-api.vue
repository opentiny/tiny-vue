<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker v-model="value" :suffix-icon="IconMinus" popper-class="my-date-picker"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

const value = ref('')
const IconMinus = iconMinus()
</script>

<style>
.demo-date-picker-wrap {
  width: 280px;
}

.my-date-picker {
  background: #ddd;
}
</style>
