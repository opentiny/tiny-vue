<template>
  <div class="tiny-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <tiny-file-upload drag :action="action" multiple accept=".png,.jpeg,.jpg" @drop-error="dropErrorHandler">
    <tiny-icon-picture class="tiny-svg-size icon-fileupload"></tiny-icon-picture>
  </tiny-file-upload>
</template>

<script>
import { TinyFileUpload, TinyModal } from '@opentiny/vue'
import { iconPicture } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload,
    TinyIconPicture: iconPicture()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    dropErrorHandler(files) {
      TinyModal.message(`有${files.length}个文件拖拽失败`)
    }
  }
}
</script>

<style scoped>
.tiny-upload__text {
  color: #595959;
  margin-bottom: 8px;
  font-size: 14px;
}
</style>
