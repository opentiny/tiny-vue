<template>
  <div>
    <tiny-image :src="errUrl" @error="errorHandler"></tiny-image>
    <tiny-image :src="url" @load="loadHandler"></tiny-image>
  </div>
</template>

<script>
import { Image, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      errUrl: '',
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    }
  },
  methods: {
    errorHandler() {
      Modal.message({ message: '加载失败触发事件', status: 'info' })
    },
    loadHandler() {
      Modal.message({ message: '加载成功触发事件', status: 'info' })
    }
  }
}
</script>

<style scoped>
.tiny-image {
  width: 150px;
  height: 100px;
}
</style>
