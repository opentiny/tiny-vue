<template>
  <div>
    <tiny-button @click="handleFocus">focus</tiny-button>
    <tiny-time-picker
      v-model="value1"
      ref="timePickerRef"
      @blur="bulr"
      @change="change"
      @focus="focus"
      placeholder="选择时间范围"
    ></tiny-time-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimePicker as TinyTimePicker, Modal, Button as TinyButton } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
const timePickerRef = ref()

function handleFocus() {
  timePickerRef.value.focus()
}

function bulr() {
  Modal.message('blur事件')
}

function change() {
  Modal.message('change事件')
}

function focus() {
  Modal.message('focus事件')
}
</script>
