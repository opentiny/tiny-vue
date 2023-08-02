<template>
  <tiny-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList" :z-index="3000"></tiny-image>
</template>

<script lang="jsx">
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: '/static/images/mountain.png',
      srcList: ['/static/images/mountain.png', '/static/images/house.jpg', '/static/images/bridge.jpg']
    }
  }
}
</script>
