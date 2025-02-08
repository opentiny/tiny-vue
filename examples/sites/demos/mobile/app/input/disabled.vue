<template>
  <div class="demo-input">
    <tiny-input v-model="input" disabled :placeholder="placeholder"></tiny-input>
    <br />
    <tiny-input v-model="text" type="textarea" disabled></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyInput } from '@opentiny/vue-mobile'

const input = ref('')
const text = ref('已输入值')
const placeholder = ref('请输入内容')
</script>

<style scoped>
.demo-input {
  padding: 20px;
  height: 100%;
}
</style>
