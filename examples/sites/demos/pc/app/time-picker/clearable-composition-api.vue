<template>
  <div>
    <p>默认显示清除按钮</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1"></tiny-time-picker>
    </div>
    <p>隐藏清除按钮</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1" :clearable="false"></tiny-time-picker>
    </div>
    <p>自定义清除按钮图标</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1" :clear-icon="IconError"></tiny-time-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'
import { iconError } from '@opentiny/vue-icon'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
const IconError = iconError()
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 182px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
