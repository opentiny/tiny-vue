<template>
  <tiny-pop-upload :http-request="httpRequest"></tiny-pop-upload>
</template>

<script lang="jsx">
import { TinyPopUpload, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload
  },
  data() {
    return {
      httpRequest: () => {
        return new Promise((resolve) => {
          // 此处为用户自定义的上传服务请求
          setTimeout(() => {
            TinyModal.message('上传成功')
          }, 500)
        })
      }
    }
  }
}
</script>
