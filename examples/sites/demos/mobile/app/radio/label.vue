<template>
  <div class="demo">
    <p>默认</p>
    <tiny-radio v-model="value" label="1">男</tiny-radio>
    <tiny-radio v-model="value" label="2">女</tiny-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRadio } from '@opentiny/vue-mobile'

const value = ref('1')
</script>

<style>
.demo {
  height: 100%;
  overflow-y: auto;
  padding: 20px;
}
</style>
