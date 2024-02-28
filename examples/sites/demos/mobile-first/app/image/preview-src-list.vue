<template>
  <tiny-image :image-size="100" :src="url" :preview-src-list="srcList" show-index preview-visible></tiny-image>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
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
