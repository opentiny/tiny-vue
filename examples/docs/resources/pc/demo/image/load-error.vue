<template>
  <tiny-image :src="url1" @error="errorHandler"></tiny-image>
</template>

<script lang="jsx">
import { Image, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url1: ''
    }
  },
  methods: {
    errorHandler() {
      Modal.message({ message: '加载失败触发事件', status: 'info' })
    }
  }
}
</script>
