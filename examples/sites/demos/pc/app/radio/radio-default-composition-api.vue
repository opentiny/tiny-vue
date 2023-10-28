<template>
  <div>
    <tiny-radio v-model="value" label="1">
      <span class="red">选项内容一</span>
      <span>选项描述</span>
    </tiny-radio>
    <tiny-radio v-model="value" label="2">
      <span>选项内容二</span>
      <span>选项描述</span>
    </tiny-radio>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Radio as TinyRadio } from '@opentiny/vue'

const value = ref('1')
</script>

<style scoped>
.red {
  color: #ff0000;
}
</style>
