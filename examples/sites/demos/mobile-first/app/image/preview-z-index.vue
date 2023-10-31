<template>
  <tiny-image :imageSize="100" :src="url" :preview-src-list="srcList" :z-index="3000"></tiny-image>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: '/static/images/1.jpg',
      srcList: ['/static/images/1.jpg', '/static/images/3.jpg']
    }
  }
}
</script>
