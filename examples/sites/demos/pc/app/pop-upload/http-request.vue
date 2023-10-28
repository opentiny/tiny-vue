<template>
  <tiny-pop-upload :http-request="httpRequest"></tiny-pop-upload>
</template>

<script lang="jsx">
import { PopUpload, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {
      httpRequest: () => {
        return new Promise((resolve) => {
          // 此处为用户自定义的上传服务请求
          setTimeout(() => {
            Modal.message('上传成功')
          }, 500)
        })
      }
    }
  }
}
</script>
