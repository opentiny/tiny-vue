<template>
  <div>
    <tiny-radio v-model="value" label="1">
      <span class="warning-bg">内容一：</span>
      <span>选项描述</span>
    </tiny-radio>
    <tiny-radio v-model="value" label="2">
      <span class="warning-bg">内容二：</span>
      <span>选项描述</span>
    </tiny-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio as TinyRadio } from '@opentiny/vue'

const value = ref('1')
</script>

<style scoped>
.warning-bg {
  color: #fa9841;
}
</style>
