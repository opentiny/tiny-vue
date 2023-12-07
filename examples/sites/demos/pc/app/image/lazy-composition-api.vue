<template>
  <div>
    <div style="margin: 12px">滚动下面的容器，通过开发者工具中的观察网络请求：</div>
    <div class="demo-image__lazy" style="height: 300px; overflow-y: auto">
      <tiny-image v-for="url in srcList" :key="url" :src="url" lazy fit="fill"></tiny-image>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const srcList = ref([
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
])
</script>

<style scoped>
.demo-image__lazy .tiny-image {
  display: block;
  min-height: 500px;
}
</style>
