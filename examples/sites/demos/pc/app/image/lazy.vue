<template>
  <div>
    <div>滚动下面的容器，通过开发者工具中的观察网络请求：</div>
    <div class="demo-image__lazy">
      <tiny-image v-for="url in srcList" :key="url" :src="url" lazy></tiny-image>
    </div>
  </div>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      srcList: [
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
      ]
    }
  }
}
</script>

<style scoped>
.demo-image__lazy {
  height: 300px;
  margin-top: 20px;
  overflow-y: auto;
}
.demo-image__lazy .tiny-image {
  display: block;
  min-height: 500px;
}
</style>
