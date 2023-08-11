<template>
  <div>
    <tiny-time-picker v-model="value1" :suffix-icon="IconMinus" placeholder="选择时间范围"></tiny-time-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
const IconMinus = iconMinus()
</script>
