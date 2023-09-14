<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value" :default-value="value1"></tiny-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value1 = ref(new Date(2020, 2, 10, 18, 40))
const value = ref('')
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
</style>
