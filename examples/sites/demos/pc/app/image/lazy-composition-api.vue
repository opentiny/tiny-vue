<template>
  <div>
    <div>滚动下面的容器，通过开发者工具中的观察网络请求：</div>
    <br />
    <div class="demo-image__lazy">
      <tiny-image v-for="url in srcList" :key="url" :src="url" lazy></tiny-image>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const srcList = ref([
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
])
</script>

<style scoped>
.demo-image__lazy {
  height: 300px;
  overflow-y: auto;
  background-color: #f5f5f5;
}
.demo-image__lazy .tiny-image {
  display: block;
  min-height: 400px;
  margin: 24px;
}
</style>
