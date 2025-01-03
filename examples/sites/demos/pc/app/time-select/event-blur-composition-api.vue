<template>
  <div class="time-select-demo-event">
    <tiny-time-select
      v-model="value1"
      @blur="bulr"
      @change="change"
      @focus="focus"
      placeholder="选择时间范围"
    ></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyTimeSelect, TinyModal } from '@opentiny/vue'

const value1 = ref('08:30')

function bulr() {
  TinyModal.message({ message: 'blur 事件', status: 'info' })
}

function change() {
  TinyModal.message({ message: 'change 事件', status: 'info' })
}

function focus() {
  TinyModal.message({ message: 'focus 事件', status: 'info' })
}
</script>

<style scoped>
.time-select-demo-event {
  width: 270px;
}
</style>
