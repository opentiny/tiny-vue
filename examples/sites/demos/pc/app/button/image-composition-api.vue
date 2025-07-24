<template>
  <tiny-button class="demo-button">
    <img :src="image" />
    <span>图片按钮</span>
  </tiny-button>
</template>

<script setup>
import { TinyButton } from '@opentiny/vue'

const image = `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/button-image.png`
</script>

<style scoped>
.demo-button img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 2px;
}
.demo-button span {
  height: 16px;
  line-height: 16px;
}
</style>
