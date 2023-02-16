<template>
  <tiny-file-upload
    drag
    :action="action"
    multiple
    accept=".png,.jpeg,.jpg"
    @drop-error="dropErrorHandler"
  >
    <icon-fileupload class="tiny-svg-size icon-fileupload"></icon-fileupload>
    <div class="tiny-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  </tiny-file-upload>
</template>

<script>
import { FileUpload } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'
import { message } from '@opentiny/vue-modal'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconFileupload: iconFileupload()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    dropErrorHandler(files) {
      message(`有${files.length}个文件拖拽失败`)
    }
  }
}
</script>
