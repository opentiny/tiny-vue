<template>
  <div>
    <tiny-button @click="() => (show = !show)">点我触发</tiny-button>
    <div v-if="show">
      <tiny-image-viewer
        bg-color="white"
        is-thumbnail
        :url-list="srcList"
        show-index
        @delete="deleteHander"
      ></tiny-image-viewer>
    </div>
  </div>
</template>

<script>
import { ImageViewer, Button } from '@opentiny/vue'

export default {
  components: {
    TinyImageViewer: ImageViewer,
    TinyButton: Button
  },
  data() {
    return {
      show: false,
      srcList: [
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        '/static/images/3.jpg',
        '/static/images/1.jpg'
      ]
    }
  },
  methods: {
    deleteHander(imageName) {
      this.$message({ message: `已删除${imageName}图片`, status: 'info' })
    }
  }
}
</script>
