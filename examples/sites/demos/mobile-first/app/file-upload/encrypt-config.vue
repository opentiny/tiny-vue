<template>
  <div>
    {{ encryptConfig }}
    <tiny-file-upload :action="action" :data="data" :encrypt-config="encryptConfig">
      <tiny-button type="primary">点击上传</tiny-button>
    </tiny-file-upload>
  </div>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      encryptConfig: {
        enabled: true,
        encrypt: true,
        watermark: '水印示例1'
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
