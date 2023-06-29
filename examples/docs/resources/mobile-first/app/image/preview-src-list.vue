<template>
  <tiny-image
    :image-size="100"
    :src="url"
    :preview-src-list="srcList"
    show-index
    @delete="deleteHander"
    preview-visible
  ></tiny-image>
</template>

<script>
import { Image, Message } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: '/static/images/1.jpg',
      srcList: ['/static/images/1.jpg', '/static/images/2.jpg', '/static/images/3.jpg']
    }
  },
  methods: {
    deleteHander() {
      this.$message({ message: '已删除照片', status: 'info' })
    }
  }
}
</script>
