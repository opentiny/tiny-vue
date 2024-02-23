<template>
  <div class="placeholder-container">
    <div class="placeholder-default">
      <p>默认</p>
      <tiny-image :src="url"></tiny-image>
    </div>

    <div>
      <p>自定义</p>
      <tiny-image :src="url">
        <template #placeholder>
          <div class="image-slot">加载中<span class="dot">...</span></div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
</script>

<style scoped>
.placeholder-container {
  width: 60%;
  display: flex;
}
.placeholder-default {
  margin-right: 30px;
}
</style>
