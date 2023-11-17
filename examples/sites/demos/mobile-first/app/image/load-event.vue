<template>
  <tiny-image :src="url" @load="loadHandler"></tiny-image>
</template>

<script>
import { Image, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: '/static/images/1.jpg'
    }
  },
  methods: {
    loadHandler() {
      Modal.message({ message: '加载成功触发事件', status: 'info' })
    }
  }
}
</script>
