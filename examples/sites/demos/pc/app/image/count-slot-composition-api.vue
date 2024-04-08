<template>
  <div class="demo-image__count-solt">
    <tiny-image :src="url" :preview-src-list="srcList">
      <template #count="{ index }">
        <span class="demo-image__count">第{{ index + 1 }}张/共{{ srcList.length }}张 </span>
      </template>
    </tiny-image>
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
.demo-image__count-solt {
  width: 200px;
  height: 200px;
}
.demo-image__count {
  font-size: 14px;
  color: #fff;
}
</style>
