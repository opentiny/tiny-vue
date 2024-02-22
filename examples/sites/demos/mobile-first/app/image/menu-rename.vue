<template>
  <div>
    <tiny-button @click="() => (show = !show)">点我触发</tiny-button>
    <div v-if="show">
      <tiny-image-viewer is-menu-view :url-list="srcList" show-index @delete="deleteHander"></tiny-image-viewer>
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
        { url: '/static/images/3.jpg', name: '名称1' },
        { url: '/static/images/1.jpg', name: '名称2' },
        { url: '/static/images/3.jpg', name: '名称3' },
        { url: '/static/images/1.jpg', name: '名称4' },
        { url: '/static/images/3.jpg', name: '名称5' },
        { url: '/static/images/1.jpg', name: '名称6' },
        { url: '/static/images/3.jpg', name: '名称7' },
        { url: '/static/images/1.jpg', name: '名称8' },
        { url: '/static/images/3.jpg', name: '名称9' },
        { url: '/static/images/1.jpg', name: '名称10' },
        { url: '/static/images/3.jpg', name: '名称11' },
        { url: '/static/images/1.jpg', name: '名称12' },
        { url: '/static/images/3.jpg', name: '名称13' },
        { url: '/static/images/1.jpg', name: '名称14' },
        { url: '/static/images/3.jpg', name: '名称15' },
        { url: '/static/images/1.jpg', name: '名称16' },
        { url: '/static/images/3.jpg', name: '名称17' },
        { url: '/static/images/1.jpg', name: '名称18' }
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
