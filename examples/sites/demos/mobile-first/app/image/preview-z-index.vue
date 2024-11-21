<template>
  <tiny-image :imageSize="100" :src="url" :preview-src-list="srcList" :z-index="3000"></tiny-image>
</template>

<script>
import { TinyImage } from '@opentiny/vue'

export default {
  components: {
    TinyImage
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
      srcList: [
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
        `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/3.jpg`
      ]
    }
  }
}
</script>
