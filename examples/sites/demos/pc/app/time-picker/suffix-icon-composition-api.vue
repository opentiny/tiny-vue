<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value1" :suffix-icon="IconMinus"></tiny-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
const IconMinus = iconMinus()
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 200px;
}
</style>
