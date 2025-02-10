<template>
  <div class="switch-wrap">
    <p>加载状态</p>
    <tiny-switch :modelValue="true" @change="handleChangeLoading1" :loading="loading1"></tiny-switch>
    <p>加载状态-小尺寸</p>
    <tiny-switch :modelValue="true" @change="handleChangeLoading2" :loading="loading2" mini></tiny-switch>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySwitch } from '@opentiny/vue-mobile'

const loading1 = ref(false)
const loading2 = ref(false)

function handleChangeLoading1() {
  loading1.value = true
  setTimeout(() => {
    loading1.value = false
  }, 2000)
}

function handleChangeLoading2() {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 2000)
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
