<template>
  <div>
    <tiny-button @click="handleClick" v-loading.lock.fullscreen="fullscreenLoading">
      指令方式加载全屏 Loading
    </tiny-button>
    <tiny-button @click="handleClick2">静态方法加载全屏 Loading</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Loading } from '@opentiny/vue'

const vLoading = Loading.directive

const fullscreenLoading = ref(false)

function handleClick() {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2500)
}

function handleClick2() {
  const loading = Loading.service({
    lock: true,
    customClass: 'my-custom-loading-fullscreen',
    text: '正在提交...',
    background: 'rgba(0, 0, 0, 0.3)'
  })
  setTimeout(() => {
    loading.close()
  }, 2500)
}
</script>

<style>
.my-custom-loading-fullscreen .tiny-loading__spinner > .tiny-svg.circular {
  fill: #fff;
}
.my-custom-loading-fullscreen .tiny-loading__spinner > .tiny-loading__text {
  color: #fff;
}
</style>
