<template>
  <div class="time-select-demo-focus">
    <tiny-button @click="hanleFocus">手动获取焦点</tiny-button>
    <tiny-time-select v-model="value" placeholder="选择时间" ref="timeSelectRef"></tiny-time-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect, Button as TinyButton } from '@opentiny/vue'

const value = ref('')
const timeSelectRef = ref()

function hanleFocus() {
  timeSelectRef.value.focus()
}
</script>

<style lang="less" scoped>
.time-select-demo-focus {
  width: 270px;
  & > * {
    margin-top: 12px;
  }
}
</style>
