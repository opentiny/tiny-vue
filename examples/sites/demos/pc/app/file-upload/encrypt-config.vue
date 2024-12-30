<template>
  <div>
    <div class="mb10">{{ encryptConfig }}</div>
    <tiny-file-upload :action="action" :data="data" :encrypt-config="encryptConfig">
      <tiny-button>点击上传</tiny-button>
    </tiny-file-upload>
  </div>
</template>

<script>
import { TinyFileUpload, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      encryptConfig: {
        enabled: true,
        encrypt: true,
        watermark: '水印示例 1'
      }
    }
  },
  computed: {
    data() {
      return {
        encrypt: this.encryptConfig.encrypt,
        watermark: this.encryptConfig.watermark
      }
    }
  }
}
</script>
