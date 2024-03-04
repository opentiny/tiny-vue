<template>
  <div class="demo-date-picker-wrap">
    <tiny-button @click="handleFocus">focus</tiny-button>
    <tiny-time-picker
      v-model="value1"
      ref="timePickerRef"
      @blur="blur"
      @change="change"
      @focus="focus"
    ></tiny-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker, Modal, Button as TinyButton } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
const timePickerRef = ref()

function handleFocus() {
  timePickerRef.value.$el.querySelector('input').focus()
}

function blur() {
  Modal.message({ message: 'blur事件', status: 'info' })
}

function change() {
  Modal.message({ message: 'change事件', status: 'info' })
}

function focus() {
  Modal.message({ message: 'focus事件', status: 'info' })
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 182px;

  & > * {
    margin-top: 12px;
  }
}
</style>
