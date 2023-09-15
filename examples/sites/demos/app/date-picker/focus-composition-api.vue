<template>
  <div style="width: 270px">
    <tiny-button @click="click">获取焦点</tiny-button>
    <tiny-button @click="Switchover">启用/禁用</tiny-button>
    <tiny-date-picker v-model="value" ref="refFocusRef" :disabled="disabled"></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker, Button as TinyButton } from '@opentiny/vue'

const value = ref('')
const disabled = ref(false)
const refFocusRef = ref()

function click() {
  refFocusRef.value.$el.querySelector('input').focus()
}

function Switchover() {
  disabled.value = !disabled.value
}
</script>
