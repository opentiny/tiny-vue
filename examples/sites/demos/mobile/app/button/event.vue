<template>
  <div class="button-wrap">
    <p>点击事件</p>
    <tiny-button type="secondary" :loading="loading" @click="btnClick" size="small">点我加载</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButton } from '@opentiny/vue-mobile'
import { iconMail } from '@opentiny/vue-icon'

const IconMail = iconMail()
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
