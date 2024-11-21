<template>
  <tiny-image :src="url" @load="loadHandler"></tiny-image>
</template>

<script>
import { TinyImage, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyImage
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
    }
  },
  methods: {
    loadHandler() {
      TinyModal.message({ message: '加载成功触发事件', status: 'info' })
    }
  }
}
</script>
