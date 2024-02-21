<template>
  <div>
    <p>整体禁用</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker v-model="value1" disabled></tiny-time-picker>
    </div>

    <p>部分禁用</p>
    <div class="demo-date-picker-wrap">
      <tiny-time-picker
        v-model="value1"
        :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      ></tiny-time-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimePicker as TinyTimePicker } from '@opentiny/vue'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 182px;

  & > * {
    margin-top: 12px;
  }
}
</style>
