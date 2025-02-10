<template>
  <div class="button-wrap">
    <h3>按钮加载状态</h3>
    <tiny-button type="primary" loading>主要按钮-加载</tiny-button>
    <tiny-button type="secondary" :loading="loading" @click="btnClick">点我加载</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButton } from '@opentiny/vue-mobile'

const loading = ref(false)

function btnClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
body {
  overflow: hidden;
}
.button-wrap {
  padding: 0 10px;
  overflow-y: auto;
  height: 100%;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
