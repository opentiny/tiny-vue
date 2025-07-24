<template>
  <div class="demo-date-picker-wrap demo-custom-suffix-icon">
    <tiny-date-picker v-model="value" :suffix-icon="IconMinus" popper-class="my-date-picker"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

const value = ref('')
const IconMinus = iconMinus()
</script>

<style>
.demo-date-picker-wrap {
  width: 360px;
}

.my-date-picker {
  background: #f0f0f0;
}
</style>
