<template>
  <div class="demo-image__preview">
    <tiny-image :src="url" :preview-src-list="srcList" :z-index="3000"></tiny-image>
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
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      srcList: [
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
      ]
    }
  }
}
</script>

<style scoped>
.demo-image__preview {
  width: 200px;
  height: 200px;
}
</style>
