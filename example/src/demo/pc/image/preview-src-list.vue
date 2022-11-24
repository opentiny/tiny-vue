<template>
  <tiny-image
    style="width: 100px; height: 100px"
    :src="url"
    :preview-src-list="srcList"
  ></tiny-image>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: 'static/images/1.jpg',
      srcList: [
        'static/images/1.jpg',
        'static/images/2.jpg',
        'static/images/3.jpg'
      ]
    }
  }
}
</script>
