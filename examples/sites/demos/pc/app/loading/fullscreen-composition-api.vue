<template>
  <div>
    <tiny-button @click="handleClick" v-loading.lock.fullscreen="fullscreenLoading" style="max-width: unset"
      >指令方式加载全屏Loading</tiny-button
    >
    <tiny-button @click="handleClick2" style="max-width: unset">静态方法加载全屏Loading</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref, getCurrentInstance } from 'vue'
import { Button as TinyButton, Loading } from '@opentiny/vue'

const fullscreenLoading = ref(false)
const instance = getCurrentInstance()
const { $loading } = instance.appContext.config.globalProperties

function handleClick() {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2500)
}

function handleClick2() {
  const loading = $loading({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.8)'
  })
  setTimeout(() => {
    loading.close()
  }, 2500)
}
</script>
