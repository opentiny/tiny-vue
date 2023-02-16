<template>
  <tiny-pop-upload :http-request="httpRequest"></tiny-pop-upload>
</template>

<script>
import { PopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {
      httpRequest: () => {
        // 此处服务为用户的 自定义上传服务
      }
    }
  }
}
</script>
