<template>
  <div style="width: 270px">
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-date-picker v-model="value" :disabled="disabled"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker, Button as TinyButton } from '@opentiny/vue'

const value = ref('')
const disabled = ref(false)

function Switchover() {
  disabled.value = !disabled.value
}
</script>
