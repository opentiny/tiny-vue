<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value1" @blur="blur" @change="change" @focus="focus"></tiny-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyTimePicker, TinyModal } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))

function blur() {
  TinyModal.message({ message: 'blur 事件', status: 'info' })
}

function change() {
  TinyModal.message({ message: 'change 事件', status: 'info' })
}

function focus() {
  TinyModal.message({ message: 'focus 事件', status: 'info' })
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
