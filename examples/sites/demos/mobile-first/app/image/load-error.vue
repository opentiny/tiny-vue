<template>
  <tiny-image :src="url1" @error="errorHandler" :image-size="200"></tiny-image>
</template>

<script>
import { TinyImage, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyImage
  },
  data() {
    return {
      url1: ''
    }
  },
  methods: {
    errorHandler() {
      TinyModal.message({ message: '加载失败触发事件', status: 'info' })
    }
  }
}
</script>
