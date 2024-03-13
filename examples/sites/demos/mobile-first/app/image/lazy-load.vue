<template>
  <div class="block h-80 overflow-auto">
    <tiny-image v-for="url in srcList" :key="url" :src="url" lazy></tiny-image>
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
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/3.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/4.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/5.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/6.jpg`
      ]
    }
  }
}
</script>
