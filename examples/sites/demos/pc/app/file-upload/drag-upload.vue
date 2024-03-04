<template>
  <tiny-file-upload drag :action="action" multiple accept=".png,.jpeg,.jpg" @drop-error="dropErrorHandler">
    <tiny-icon-fileupload-pro class="tiny-svg-size icon-fileupload"></tiny-icon-fileupload-pro>
    <div class="tiny-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Modal } from '@opentiny/vue'
import { IconFileuploadPro } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyIconFileuploadPro: IconFileuploadPro()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    dropErrorHandler(files) {
      Modal.message(`有${files.length}个文件拖拽失败`)
    }
  }
}
</script>
