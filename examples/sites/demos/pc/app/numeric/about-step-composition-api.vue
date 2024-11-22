<template>
  <div class="m-layout">
    <div class="m-b10">
      <div class="m-b10">1、step-restore 用法</div>
      <tiny-numeric v-model="value" :step="step" step-restore></tiny-numeric>
    </div>
    <div>
      <div class="m-b10">2、step-strictly 用法</div>
      <tiny-numeric v-model="valueStep" :step="step" step-strictly></tiny-numeric>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TinyNumeric } from '@opentiny/vue'

const value = ref(0)
const step = ref(5)
const valueStep = ref(0)
</script>

<style scoped>
.m-layout {
  display: flex;
  flex-direction: column;
}
.m-b10 {
  margin-bottom: 10px;
}
</style>
