<template>
  <div>
    <div>点击图片预览大图</div>
    <br />
    <div class="demo-image__preview">
      <tiny-image :src="url" :preview-src-list="srcList" :z-index="3000" show-index></tiny-image>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
const srcList = ref([
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
])
</script>

<style scoped>
.demo-image__preview {
  width: 200px;
  height: 200px;
}
</style>
