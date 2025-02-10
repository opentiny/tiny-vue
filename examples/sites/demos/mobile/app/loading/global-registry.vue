<template>
  <div class="demo-loading">
    <tiny-button type="secondary" @click="handleClick" v-loading.lock.fullscreen="showLoading">
      指令方式加载全屏Loading
    </tiny-button>

    <tiny-button type="secondary" @click="handleClick2"> 静态方法加载全屏Loading </tiny-button>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import { TinyLoading, TinyButton } from '@opentiny/vue-mobile'

const showLoading = ref(false)
const instance = getCurrentInstance()
const { $loading } = instance.appContext.config.globalProperties
const vLoading = TinyLoading.directive

function handleClick() {
  showLoading.value = true
  setTimeout(() => {
    showLoading.value = false
  }, 3000)
}

function handleClick2() {
  const loading = $loading({
    lock: true,
    text: 'Loading',
    tiny_mode: 'mobile'
  })
  setTimeout(() => {
    loading.close()
  }, 3000)
}
</script>

<style scoped>
.demo-loading {
  padding: 30px;
}

.demo-loading .tiny-mobile-button {
  width: 100%;
  margin-bottom: 30px;
}

#demo-loading {
  width: 100px;
  height: 100px;
}
</style>
