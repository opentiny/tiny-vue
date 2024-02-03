<template>
  <tiny-image :src="url" @load="loadHandler" @error="errorHandler"></tiny-image>
</template>

<script lang="jsx">
import { Image, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: ''
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
